import BaseDef, {OPENAPI_PARAMETERS, OPENAPI_RESPONSE_TMPL} from "./BaseDef";

export default class BestPodcastsDef  extends BaseDef {
  apiFunctionName() {
    return 'fetchBestPodcasts'
  }

  transformResultFunc(result) {
    return result.podcasts.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      listennotes_url: item.listennotes_url,
      publisher: item.publisher,
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
    const params = {
      operationId: 'getBestPodcasts',
      description: 'Fetch a list of best podcasts by genre, region, and language.' +
        'Get the genre ids from the `getGenres` endpoint',
      parameters: [
        OPENAPI_PARAMETERS.genre_id,
        OPENAPI_PARAMETERS.best_podcasts_region,
        OPENAPI_PARAMETERS.best_podcasts_publisher_region,
        OPENAPI_PARAMETERS.language,
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
      '/best_podcasts': this._makeOpenApiPathSpec(params),
    }
  }

  extraParams() {
    return {
      sort: 'listen_score',
    }
  }
}
