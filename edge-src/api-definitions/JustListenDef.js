import BaseDef, {OPENAPI_PROPERTIES} from "./BaseDef";

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
    const {episodeSpec, podcastSpec} = OPENAPI_PROPERTIES;
    const params = {
      operationId: 'justListen',
      description: 'Get a random podcast episode, ' +
        'with all necessary metadata to describe this episode and stream the audio.' +
        'Recently published episodes are more likely to be fetched.',
      parameters: [],
      response200: {
        description: 'Returns a json object with the podcast episode data',
        schema: {
          type: 'object',
          properties: {
            title: {...episodeSpec.title},
            description: {...episodeSpec.description},
            image: {...episodeSpec.image},
            audio: {...episodeSpec.audio},
            audio_length_sec: {...episodeSpec.audio_length_sec},
            pub_date_ms: {...episodeSpec.pub_date_ms},
            listennotes_url: {...episodeSpec.listennotes_url},
            podcast: {
              type: 'object',
              properties: {
                title: {...podcastSpec.title},
                publisher: {...podcastSpec.publisher},
                image: {...podcastSpec.image},
                listen_score: {...podcastSpec.listen_score},
                listen_score_global_rank: {...podcastSpec.listen_score_global_rank},
                listennotes_url: {...podcastSpec.listennotes_url},
              },
            },
          },
        },
      },
    }
    return {
      '/just_listen': this._makeOpenApiPathSpec(params),
    }
  }
}
