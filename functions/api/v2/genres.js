import ListenApiManager from '../../../edge-src/common/ListenApiManager.js'
import GetGenresDef from "../../../edge-src/api-definitions/GetGenresDef";

export async function onRequestGet(context) {
  const mgr = new ListenApiManager(context, GetGenresDef)
  return await mgr.getResponse()
}
