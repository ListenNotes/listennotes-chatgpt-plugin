import ListenApiManager from '../../../edge-src/common/ListenApiManager.js'
import SearchEpisodesDef from "../../../edge-src/api-definitions/SearchEpisodesDef";

export async function onRequestGet(context) {
  const mgr = new ListenApiManager(context, SearchEpisodesDef)
  return await mgr.getResponse()
}
