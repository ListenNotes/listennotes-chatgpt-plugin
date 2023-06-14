import ResponseBuilder from "./ResponseBuilder";

const { ClientForWorkers } = require('podcast-api');

export default class ListenApiManager {
  constructor(context) {
    const {env} = context
    this.client = ClientForWorkers({
      apiKey: env.LISTEN_API_KEY || null,
    })

    this.responseBuilder = new ResponseBuilder(context)
  }

  async justListen(transformResultFunc) {
    const res = await this.client.justListen()
    return this.responseBuilder.getJsonResponse(transformResultFunc(res.data))
  }
}
