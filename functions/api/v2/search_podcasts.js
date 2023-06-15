import ListenApiManager from '../../../edge-src/common/ListenApiManager.js'
import SearchPodcastsDef from "../../../edge-src/api-definitions/SearchPodcastsDef";

export async function onRequestGet(context) {
  const mgr = new ListenApiManager(context, SearchPodcastsDef)
  return await mgr.getResponse()
}
