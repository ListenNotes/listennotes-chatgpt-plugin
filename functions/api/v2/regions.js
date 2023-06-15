import ListenApiManager from '../../../edge-src/common/ListenApiManager.js'
import GetRegionsDef from "../../../edge-src/api-definitions/GetRegionsDef";

export async function onRequestGet(context) {
  const mgr = new ListenApiManager(context, GetRegionsDef)
  return await mgr.getResponse()
}
