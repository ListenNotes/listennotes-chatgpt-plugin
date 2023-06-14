import ListenApiManager from '../../../edge-src/common/ListenApiManager.js'

export async function onRequestGet(context) {
  const mgr = new ListenApiManager(context)
  return await mgr.justListen((result) => ({
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
    },
  }))
}
