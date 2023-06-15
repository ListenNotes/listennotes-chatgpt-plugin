import BaseDef, {OPENAPI_PARAMETERS, OPENAPI_RESPONSE_TMPL} from "./BaseDef";

export default class SearchPodcastsDef  extends BaseDef {
  apiFunctionName() {
    return 'search'
  }

  transformResultFunc(result) {
    return result.results.map((item) => ({
      title: item.title_original,
      description: item.description_original,
      listennotes_url: item.listennotes_url,
      publisher: item.publisher_original,
      image: item.image,
      latest_episode_id: item.latest_episode_id,
      latest_pub_date_ms: item.latest_pub_date_ms,
      earliest_pub_date_ms: 1482664380160,
      total_episodes: item.total_episodes,
      audio_length_sec: item.audio_length_sec,
      update_frequency_hours: item.update_frequency_hours,
      listen_score: item.listen_score,
      listen_score_global_rank: item.listen_score_global_rank,
    }))
  }

  openApiPathSpec() {
    // const {episodeSpec, podcastSpec} = OPENAPI_PROPERTIES;
    const params = {
      operationId: 'searchPodcasts',
      description: 'Search podcasts by keyword. ' +
        'A keyword can be a topic, a person name, a place, or a brand. ' +
        'Useful to discover podcasts by hosts, topics, publishers, etc. Also useful to find podcasts by name.',
      parameters: [
        OPENAPI_PARAMETERS.q,
        OPENAPI_PARAMETERS.sort_by_date,
        OPENAPI_PARAMETERS.len_min,
        OPENAPI_PARAMETERS.len_max,
        OPENAPI_PARAMETERS.published_before,
        OPENAPI_PARAMETERS.published_after,
        OPENAPI_PARAMETERS.only_in,
        OPENAPI_PARAMETERS.language,
        OPENAPI_PARAMETERS.region,
        OPENAPI_PARAMETERS.page_size,
        OPENAPI_PARAMETERS.episode_count_min,
        OPENAPI_PARAMETERS.episode_count_max,
        OPENAPI_PARAMETERS.update_freq_min,
        OPENAPI_PARAMETERS.update_freq_max,
      ],
      response200: {
        description: 'Returns a list of podcasts in json format',
        schema: {
          type: 'array',
          items: {
            type: 'object',
            properties: OPENAPI_RESPONSE_TMPL.PODCAST_SIMPLE,
          },
        },
      },
    }
    return {
      '/search_podcasts': this._makeOpenApiPathSpec(params),
    }
  }

  extraParams() {
    return {
      type: 'podcast',
    }
  }
}
