export const OPENAPI_PROPERTIES = {
  episodeSpec: {
    id: {
      type: 'string',
      description: 'the id of the episode, ' +
        'which can be used to pass to the other endpoints that need an episode id as a parameter',
    },
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
    id: {
      type: 'string',
      description: 'the id of the podcast, ' +
        'which can be used to pass to the other endpoints that need a podcast id as a parameter',
    },
    title: {
      type: 'string',
      description: 'title of the podcast',
    },
    description: {
      type: 'string',
      description: 'description of the podcast in html',
    },
    publisher: {
      type: 'string',
      description: 'publisher of the podcast',
    },
    image: {
      type: 'string',
      description: 'image url of the podcast',
    },
    listen_score: {
      type: 'integer',
      description: 'Listen Score of the podcast, ' +
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
    latest_episode_id: {
      type: 'string',
      description: 'the id of the latest episode of the podcast, ' +
        'which can be used to fetch detailed metadata of the episode using the `getEpisode` endpoint',
    },
    latest_pub_date_ms: {
      type: 'integer',
      description: 'published date of the latest episode of this podcast in milliseconds of the Unix epoch',
    },
    update_frequency_hours: {
      type: "integer",
      description: "How frequently does this podcast release a new episode? In hours. " +
        "For example, if the value is 166, then it's every 166 hours (or weekly).",
    },
    audio_length_sec: {
      type: "integer",
      description: "Average audio length of all episodes of this podcast. In seconds.",
    },
    total_episodes: {
      type: "integer",
      description: "Total number of episodes in this podcast.",
    },
    earliest_pub_date_ms: {
      type: "integer",
      description: "The published date of the oldest episode of this podcast. In milliseconds",
    },
  },
}

export const OPENAPI_PARAMETERS = {
  q: {
    "name": "q",
    "in": "query",
    "description": "A keyword to search, which could be person, place, topic..." +
      "You can use double quotes to do verbatim match, e.g., \"game of thrones\". Otherwise, it's fuzzy search.",
    "required": true,
    "schema": {
      "type": "string",
    },
  },
  sort_by_date: {
    "name": "sort_by_date",
    "in": "query",
    "description": "Sort by published date or not? If 0, then sort by relevance. If 1, then sort by published date.",
    "required": false,
    "schema": {
      "type": "integer",
      "default": 0,
      "enum": [
        0,
        1,
      ]
    }
  },
  len_min: {
    "name": "len_min",
    "in": "query",
    "description": "Minimum audio length for episode in minutes.",
    "required": false,
    "schema": {
      "type": "integer",
      "default": 0
    }
  },
  len_max: {
    "name": "len_max",
    "in": "query",
    "description": "Maximum audio length for episode in minutes.",
    "required": false,
    "schema": {
      "type": "integer",
    }
  },
  genre_ids: {
    "name": "genre_ids",
    "in": "query",
    "description": "A comma-delimited string of a list of genre ids. If not specified, then all genres are included." +
      "Find the genre id and the name of all genres from the `getGenres` endpoint",
    "required": false,
    "schema": {
      "type": "string",
    },
  },
  published_before: {
    "name": "published_before",
    "in": "query",
    "description": "Only show results published before this timestamp (in milliseconds).",
    "required": false,
    "schema": {
      "type": "integer",
    }
  },
  published_after: {
    "name": "published_after",
    "in": "query",
    "description": "Only show results published after this timestamp (in milliseconds).",
    "required": false,
    "schema": {
      "type": "integer",
      "default": 0
    }
  },
  only_in: {
    "name": "only_in",
    "in": "query",
    "description": "A comma-delimited string to search only in specific fields. Allowed values are title, description, author, and audio. If not specified, then search every fields.",
    "required": false,
    "schema": {
      "type": "string",
      "default": "title,description,author,audio"
    }
  },
  language: {
    "name": "language",
    "in": "query",
    "description": "Limit search results to a specific language. If not specified, it'll be any language." +
      " Get a list of supported languages from the `getLanguages` endpoint",
    "required": false,
    "schema": {
      "type": "string",
    }
  },
  region: {
    "name": "region",
    "in": "query",
    "description": "Limit search results to a specific region (e.g., us, gb, in...). " +
      "If not specified, it'll be any region. Get the supported country codes from the `getRegions` endpoint",
    "required": false,
    "schema": {
      "type": "string",
    },
  },
  page_size: {
    "name": "page_size",
    "in": "query",
    "description": "The maximum number of search results per page. A valid value should be an integer between 1 and 10 (inclusive).",
    "required": false,
    "schema": {
      "type": "integer",
      "default": 10
    },
  },
  episode_count_min: {
    'name': 'episode_count_min',
    "in": "query",
    "description": "Minimum number of episodes.",
    "required": false,
    "schema": {
      "type": "integer"
    }
  },
  episode_count_max: {
    'name': 'episode_count_max',
    "in": "query",
    "description": "Maximum number of episodes.",
    "required": false,
    "schema": {
      "type": "integer"
    }
  },
  update_freq_min: {
    "name": "update_freq_min",
    "in": "query",
    "description": "Minimum update frequency in hours." +
      " For example, if you want to find \"weekly\" podcasts, then you can set **update_freq_min**=144 hours (or 6 days)" +
      " and **update_freq_max**=192 hours (or 8 days).",
    "required": false,
    "schema": {
      "type": "integer"
    },
  },
  update_freq_max: {
    "name": "update_freq_max",
    "in": "query",
    "description": "Minimum update frequency in hours." +
      " For example, if you want to find \"weekly\" podcasts, then you can set **update_freq_min**=144 hours (or 6 days)" +
      " and **update_freq_max**=192 hours (or 8 days).",
    "required": false,
    "schema": {
      "type": "integer"
    },
  },
  genre_id: {
    "name": "genre_id",
    "in": "query",
    "description": "Narrow down results for a specific podcast genre. Get the id from the `getGenres` endpoint.",
    "required": false,
    "schema": {
      "type": "string",
      }
  },
  best_podcasts_region: {
    "name": "region",
    "in": "query",
    "description": "Filter best podcasts by country/region. " +
      "Get the supported country codes (e.g., us, jp, gb...) from the `getRegions` endpoint.",
    "required": false,
    "schema": {
      "type": "string",
      "default": "us"
    }
  },
  best_podcasts_publisher_region: {
    "name": "publisher_region",
    "in": "query",
    "description": "Filter best podcasts by the publisher's country/region. " +
      "Get the supported country codes (e.g., us, jp, gb...) from the `getRegions` endpoint.",
    "required": false,
    "schema": {
      "type": "string",
    }
  },
}

export const OPENAPI_RESPONSE_TMPL = {
  EPISODE_SIMPLE: {
    type: 'object',
    properties: {
      id: {...OPENAPI_PROPERTIES.episodeSpec.id},
      title: {...OPENAPI_PROPERTIES.episodeSpec.title},
      description: {...OPENAPI_PROPERTIES.episodeSpec.description},
      image: {...OPENAPI_PROPERTIES.episodeSpec.image},
      audio: {...OPENAPI_PROPERTIES.episodeSpec.audio},
      audio_length_sec: {...OPENAPI_PROPERTIES.episodeSpec.audio_length_sec},
      pub_date_ms: {...OPENAPI_PROPERTIES.episodeSpec.pub_date_ms},
      listennotes_url: {...OPENAPI_PROPERTIES.episodeSpec.listennotes_url},
      podcast: {
        type: 'object',
        description: 'the podcast that this episode belongs to',
        properties: {
          id: {...OPENAPI_PROPERTIES.podcastSpec.id},
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

  PODCAST_SIMPLE: {
    type: 'object',
    properties: {
      id: {...OPENAPI_PROPERTIES.podcastSpec.id},
      title: {...OPENAPI_PROPERTIES.podcastSpec.title},
      description: {...OPENAPI_PROPERTIES.podcastSpec.description},
      listennotes_url: {...OPENAPI_PROPERTIES.podcastSpec.listennotes_url},
      publisher: {...OPENAPI_PROPERTIES.podcastSpec.publisher},
      image: {...OPENAPI_PROPERTIES.podcastSpec.image},
      latest_episode_id: {...OPENAPI_PROPERTIES.podcastSpec.latest_episode_id},
      latest_pub_date_ms: {...OPENAPI_PROPERTIES.podcastSpec.latest_pub_date_ms},
      earliest_pub_date_ms: {...OPENAPI_PROPERTIES.podcastSpec.earliest_pub_date_ms},
      total_episodes: {...OPENAPI_PROPERTIES.podcastSpec.total_episodes},
      audio_length_sec: {...OPENAPI_PROPERTIES.podcastSpec.audio_length_sec},
      update_frequency_hours: {...OPENAPI_PROPERTIES.podcastSpec.update_frequency_hours},
      listen_score: {...OPENAPI_PROPERTIES.podcastSpec.listen_score},
      listen_score_global_rank: {...OPENAPI_PROPERTIES.podcastSpec.listen_score_global_rank},
    },
  },

  GENRE: {
    "id": {
      "type": "integer",
      "description": "The id of this genre, which can be used in the `genre_ids` parameter in other endpoints.",
    },
    "name": {
      "type": "string",
      "description": "Human-readable genre name.",
    },
    "parent_id": {
      "type": "integer",
      "description": "Parent genre's id.",
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

  // Functions from podcast-api-js:
  // https://github.com/ListenNotes/podcast-api-js#api-reference
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
