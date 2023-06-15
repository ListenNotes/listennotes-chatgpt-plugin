import BaseDef, {OPENAPI_PARAMETERS, OPENAPI_RESPONSE_TMPL} from "./BaseDef";

export default class BestPodcastsDef  extends BaseDef {
  apiFunctionName() {
    return 'fetchPodcastGenres'
  }

  transformResultFunc(result) {
    return result.genres
  }

  openApiPathSpec() {
    const params = {
      operationId: 'getGenres',
      description: 'Fetch a list of podcast genres. ' +
        'The `id` field can be used in other endpoints as `genre_id` parameter.',
      parameters: [],
      response200: {
        description: 'Returns a list of podcast genres in json format',
        schema: {
          type: 'array',
          items: {
            type: 'object',
            properties: OPENAPI_RESPONSE_TMPL.GENRE,
          },
        },
      },
    }
    return {
      '/genres': this._makeOpenApiPathSpec(params),
    }
  }

  extraParams() {
    return {}
  }
}
