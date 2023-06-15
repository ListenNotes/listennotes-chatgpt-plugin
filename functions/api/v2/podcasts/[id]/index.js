import ListenApiManager from '../../../../../edge-src/common/ListenApiManager.js'
import GetPodcastDef from "../../../../../edge-src/api-definitions/GetPodcastDef";

export async function onRequestGet(context) {
  const {params} = context
  context.data.searchParams.id = params.id
  const mgr = new ListenApiManager(context, GetPodcastDef)
  return await mgr.getResponse()
}
