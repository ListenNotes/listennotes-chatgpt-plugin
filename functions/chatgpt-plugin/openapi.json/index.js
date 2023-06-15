import ResponseBuilder from "../../../edge-src/common/ResponseBuilder";
import JustListenDef from "../../../edge-src/api-definitions/JustListenDef";
import SearchEpisodesDef from "../../../edge-src/api-definitions/SearchEpisodesDef";
import SearchPodcastsDef from "../../../edge-src/api-definitions/SearchPodcastsDef";
import GetGenresDef from '../../../edge-src/api-definitions/GetGenresDef';
import BestPodcastsDef from '../../../edge-src/api-definitions/BestPodcastsDef';
import GetLanguagesDef from "../../../edge-src/api-definitions/GetLanguagesDef";
import GetRegionsDef from "../../../edge-src/api-definitions/GetRegionsDef";

// Example spec: https://platform.openai.com/docs/plugins/getting-started/openapi-definition
// - 200 characters max for each API endpoint description/summary field in API specification
// - 200 characters max for each API param description field in API specification
const openapiSpec = (params) => ({
  openapi: '3.1.0',
  info: {
    title: 'Listen Notes Podcast Search Engine and Database Plugin',
    description: 'A plugin that allows the user to discover podcasts and episodes using ChatGPT.',
    version: '2.0.0',
  },
  servers: [
    {
      url: `${params.baseUrl}/api/v2`,
    },
  ],
  paths: {
    ...params.paths,
  },
})

export async function onRequestGet(context) {
  const {data} = context
  const responseBuilder = new ResponseBuilder(context)
  const params = {
    baseUrl: data.baseUrl,
    paths: {
      ...new SearchPodcastsDef().openApiPathSpec(),
      ...new SearchEpisodesDef().openApiPathSpec(),
      ...new BestPodcastsDef().openApiPathSpec(),
      ...new JustListenDef().openApiPathSpec(),
      ...new GetGenresDef().openApiPathSpec(),
      ...new GetLanguagesDef().openApiPathSpec(),
      ...new GetRegionsDef().openApiPathSpec(),
    },
  }
  return responseBuilder.getJsonResponse(openapiSpec(params))
}
