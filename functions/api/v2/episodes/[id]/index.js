import ListenApiManager from '../../../../../edge-src/common/ListenApiManager.js'
import GetEpisodeDef from "../../../../../edge-src/api-definitions/GetEpisodeDef";

export async function onRequestGet(context) {
  const {params} = context
  context.data.searchParams.id = params.id
  const mgr = new ListenApiManager(context, GetEpisodeDef)
  return await mgr.getResponse()
}
