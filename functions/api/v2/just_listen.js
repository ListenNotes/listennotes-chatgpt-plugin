import ListenApiManager from '../../../edge-src/common/ListenApiManager.js'
import JustListenDef from "../../../edge-src/api-definitions/JustListenDef";

export async function onRequestGet(context) {
  const mgr = new ListenApiManager(context, JustListenDef)
  return await mgr.getResponse()
}
