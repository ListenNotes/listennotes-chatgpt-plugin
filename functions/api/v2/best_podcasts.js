import ListenApiManager from '../../../edge-src/common/ListenApiManager.js'
import BestPodcastsDef from "../../../edge-src/api-definitions/BestPodcastsDef";

export async function onRequestGet(context) {
  const mgr = new ListenApiManager(context, BestPodcastsDef)
  return await mgr.getResponse()
}
