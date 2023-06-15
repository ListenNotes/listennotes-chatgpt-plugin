import BaseDef, {OPENAPI_PARAMETERS, OPENAPI_RESPONSE_TMPL} from "./BaseDef";

export default class GetPodcastDef  extends BaseDef {
  apiFunctionName() {
    return 'fetchPodcastById'
  }

  transformResultFunc(result) {
    console.log(result)
    return {}
  }

  openApiPathSpec() {
    const params = {
      operationId: 'getPodcast',
      description: 'Fetch detailed meta data for a podcast by id, including up to 10 episodes. ' +
        'The `id` parameter of this endpoint can be obtained from the response of other endpoints.',
      parameters: [
        OPENAPI_PARAMETERS.podcast_id,
      ],
      response200: {
        description: 'Returns a json object with the podcast metadata',
        schema: OPENAPI_RESPONSE_TMPL.PODCAST_SIMPLE,
      },
    }
    return {
      '/podcasts/{id}': this._makeOpenApiPathSpec(params),
    }
  }
}
