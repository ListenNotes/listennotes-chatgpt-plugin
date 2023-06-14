import ResponseBuilder from "../../../edge-src/common/ResponseBuilder";

const justListenEndpoint = {
  get: {
    operationId: 'justListen',
    description: 'Get a random podcast episode, ' +
      'with all necessary metadata to describe this episode and stream the audio.' +
      'Recently published episodes are more likely to be fetched.',
    parameters: [],
    responses: {
      '200': {
        description: 'Returns a json object with the podcast episode data',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  description: 'title of the podcast episode',
                },
                description: {
                  type: 'string',
                  description: 'description of the podcast episode in html',
                },
                image: {
                  type: 'string',
                  description: 'image url of the podcast episode',
                },
                audio: {
                  type: 'string',
                  description: 'audio url of the podcast episode, used for playing the audio',
                },
                audio_length_sec: {
                  type: 'integer',
                  description: 'audio length of the podcast episode in seconds',
                },
                pub_date_ms: {
                  type: 'integer',
                  description: 'published date of the podcast episode in milliseconds of the Unix epoch',
                },
                listennotes_url: {
                  type: 'string',
                  description: 'the canonical url of the podcast episode on Listen Notes, ' +
                    'which can be used to manually share this episode',
                },
                podcast: {
                  type: 'object',
                  properties: {
                    title: {
                      type: 'string',
                      description: 'title of the podcast that this episode belongs to',
                    },
                    publisher: {
                      type: 'string',
                      description: 'publisher of the podcast that this episode belongs to',
                    },
                    image: {
                      type: 'string',
                      description: 'image url of the podcast that this episode belongs to',
                    },
                    listen_score: {
                      type: 'integer',
                      description: 'Listen Score of the podcast that this episode belongs to, ' +
                        'which indicates the estimated popularity of the podcast (similar to nielsen ratings)',
                    },
                    listen_score_global_rank: {
                      type: 'string',
                      description: 'the global rank of the podcast according to Listen Score',
                    },
                    listennotes_url: {
                      type: 'string',
                      description: 'the canonical url of the podcast on Listen Notes, ' +
                        'which can be used to manually share this podcast',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

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
    '/just_listen': justListenEndpoint,
  },
})

export async function onRequestGet(context) {
  const {data} = context
  const responseBuilder = new ResponseBuilder(context)
  const params = {
    baseUrl: data.baseUrl,
  }
  return responseBuilder.getJsonResponse(openapiSpec(params))
}
