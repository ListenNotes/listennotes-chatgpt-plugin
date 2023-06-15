import BaseDef, {OPENAPI_RESPONSE_TMPL} from "./BaseDef";

export default class JustListenDef  extends BaseDef {
  apiFunctionName() {
    return 'justListen'
  }

  transformResultFunc(result) {
    return ({
      title: result.title,
      description: result.description,
      image: result.image,
      audio: result.audio,
      audio_length_sec: result.audio_length_sec,
      pub_date_ms: result.pub_date_ms,
      listennotes_url: result.listennotes_url,
      podcast: {
        title: result.podcast.title,
        publisher: result.podcast.publisher,
        image: result.podcast.image,
        listen_score: result.podcast.listen_score,
        listen_score_global_rank: result.podcast.listen_score_global_rank,
        listennotes_url: result.podcast.listennotes_url,
      }
    })
  }

  openApiPathSpec() {
    const params = {
      operationId: 'justListen',
      description: 'Get a random podcast episode, ' +
        'with all necessary metadata to describe this episode and stream the audio.' +
        'Recently published episodes are more likely to be fetched.',
      parameters: [],
      response200: {
        description: 'Returns a json object with the podcast episode data',
        schema: OPENAPI_RESPONSE_TMPL.EPISODE_SIMPLE,
      },
    }
    return {
      '/just_listen': this._makeOpenApiPathSpec(params),
    }
  }
}
