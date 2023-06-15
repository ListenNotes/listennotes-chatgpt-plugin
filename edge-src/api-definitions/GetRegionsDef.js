import BaseDef from "./BaseDef";

export default class GetRegionsDef  extends BaseDef {
  apiFunctionName() {
    return 'fetchPodcastRegions'
  }

  transformResultFunc(result) {
    return result.regions
  }

  openApiPathSpec() {
    const params = {
      operationId: 'getRegions',
      description: 'Fetch a list of supported countries/regions. ' +
        'The key of the returned json object is the region code (e.g., us, gb...) ' +
        'used in other endpoints as `region` parameter.',
      parameters: [],
      response200: {
        description: 'Returns a json object of countries/regions. ' +
          'The key is the region code (e.g., us, gb), and the value is the human-readable ' +
          'region name (e.g., United States)',
        schema: {
          type: 'object',
          example: {
            "de": "Germany",
            "us": "United States",
            "au": "Australia",
            "ua": "Ukraine"
          },
        },
      },
    }
    return {
      '/regions': this._makeOpenApiPathSpec(params),
    }
  }

  extraParams() {
    return {}
  }
}
