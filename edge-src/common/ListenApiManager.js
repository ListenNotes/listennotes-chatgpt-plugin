import ResponseBuilder from "./ResponseBuilder";

const { ClientForWorkers } = require('podcast-api');

export default class ListenApiManager {
  constructor(context, EndpointDef) {
    const {env, data} = context

    this.client = ClientForWorkers({
      apiKey: env.LISTEN_API_KEY || null,
    })

    this.data = data
    this.endpointDef = new EndpointDef()
    this.responseBuilder = new ResponseBuilder(context)
  }

  async getResponse() {
    const res = await this.client[this.endpointDef.apiFunctionName()](this.data.searchParams)
    return this.responseBuilder.getJsonResponse(
      this.endpointDef.transformResultFunc(res.data))
  }
}
