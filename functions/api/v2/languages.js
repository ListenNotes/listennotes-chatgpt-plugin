import ListenApiManager from '../../../edge-src/common/ListenApiManager.js'
import GetLanguagesDef from "../../../edge-src/api-definitions/GetLanguagesDef";

export async function onRequestGet(context) {
  const mgr = new ListenApiManager(context, GetLanguagesDef)
  return await mgr.getResponse()
}
