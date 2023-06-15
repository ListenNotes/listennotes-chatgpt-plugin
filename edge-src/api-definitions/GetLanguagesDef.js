import BaseDef from "./BaseDef";

export default class GetLanguagesDef  extends BaseDef {
  apiFunctionName() {
    return 'fetchPodcastLanguages'
  }

  transformResultFunc(result) {
    return result.languages
  }

  openApiPathSpec() {
    const params = {
      operationId: 'getLanguages',
      description: 'Fetch a list of supported languages for podcasts. ' +
        'Use the language name as `language` parameter in other endpoints.',
      parameters: [],
      response200: {
        description: 'Returns a list of podcast languages in json format',
        schema: {
          type: 'array',
          items: {
            type: 'string',
            description: 'Human readable language name (e.g., English). ' +
              'Use this as `language` parameter in other endpoints.',
          },
        },
      },
    }
    return {
      '/languages': this._makeOpenApiPathSpec(params),
    }
  }

  extraParams() {
    return {}
  }
}
