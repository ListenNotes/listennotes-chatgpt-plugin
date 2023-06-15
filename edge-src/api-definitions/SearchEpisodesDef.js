import BaseDef, {OPENAPI_PARAMETERS, OPENAPI_RESPONSE_TMPL} from "./BaseDef";

export default class SearchEpisodesDef  extends BaseDef {
  apiFunctionName() {
    return 'search'
  }

  transformResultFunc(result) {
    return result.results.map((item) => ({
      title: item.title_original,
      description: item.description_original,
      audio: item.audio,
      audio_length_sec: item.audio_length_sec,
      pub_date_ms: item.pub_date_ms,
      image: item.image,
      listennotes_url: item.listennotes_url,
      podcast: {
        title: item.podcast.title_original,
        publisher: item.podcast.publisher_original,
        listennotes_url: item.podcast.listennotes_url,
        image: item.podcast.image,
        listen_score: item.podcast.listen_score,
        listen_score_global_rank: item.podcast.listen_score_global_rank,
      },
    }))
  }

  openApiPathSpec() {
    // const {episodeSpec, podcastSpec} = OPENAPI_PROPERTIES;
    const params = {
      operationId: 'searchEpisodes',
      description: 'Search podcast episodes by keyword. ' +
        'A keyword can be a topic, a person name, a place, or a brand. ' +
        'Useful to find podcast interviews of a person, or episodes discussing a specific topic / person.',
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
      ],
      response200: {
        description: 'Returns a list of podcast episodes in json format',
        schema: OPENAPI_RESPONSE_TMPL.EPISODE_SIMPLE,
      },
    }
    return {
      '/search_episodes': this._makeOpenApiPathSpec(params),
    }
  }

  extraParams() {
    return {
      type: 'episode',
    }
  }
}
