export const OPENAPI_PROPERTIES = {
  episodeSpec: {
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
  },
  podcastSpec: {
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
}

export const OPENAPI_RESPONSE_TMPL = {
  EPISODE_SIMPLE: {
    type: 'object',
    properties: {
      title: {...OPENAPI_PROPERTIES.episodeSpec.title},
      description: {...OPENAPI_PROPERTIES.episodeSpec.description},
      image: {...OPENAPI_PROPERTIES.episodeSpec.image},
      audio: {...OPENAPI_PROPERTIES.episodeSpec.audio},
      audio_length_sec: {...OPENAPI_PROPERTIES.episodeSpec.audio_length_sec},
      pub_date_ms: {...OPENAPI_PROPERTIES.episodeSpec.pub_date_ms},
      listennotes_url: {...OPENAPI_PROPERTIES.episodeSpec.listennotes_url},
      podcast: {
        type: 'object',
        properties: {
          title: {...OPENAPI_PROPERTIES.podcastSpec.title},
          publisher: {...OPENAPI_PROPERTIES.podcastSpec.publisher},
          image: {...OPENAPI_PROPERTIES.podcastSpec.image},
          listen_score: {...OPENAPI_PROPERTIES.podcastSpec.listen_score},
          listen_score_global_rank: {...OPENAPI_PROPERTIES.podcastSpec.listen_score_global_rank},
          listennotes_url: {...OPENAPI_PROPERTIES.podcastSpec.listennotes_url},
        },
      },
    },
  },
}

export default class BaseDef {
  constructor() {
  }

  //
  // Implement these functions
  //
  transformResultFunc(result) {
    return {}
  }

  apiFunctionName() {
    return ''
  }

  openApiPathSpec() {
    return {}
  }

  // Pass extra params to Listen API's endpoint
  extraParams() {
    return {}
  }

  //
  // Internal utility functions
  //
  _makeOpenApiPathSpec(params) {
    return ({
      get: {
        operationId: params.operationId,
        description: params.description,
        parameters: [...params.parameters],
        responses: {
          '200': {
            description: params.response200.description,
            content: {
              'application/json': {
                schema: params.response200.schema,
              },
            },
          },
        },
      },
    })
  }
}
