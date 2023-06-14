const { ClientForWorkers } = require('podcast-api');

export default class ListenApiManager {
  constructor(context) {
    const {env} = context
    this.client = ClientForWorkers({
      apiKey: env.LISTEN_API_KEY || null,
    })
  }

  _getResponse(resultJson) {
    return new Response(JSON.stringify(resultJson), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
  }

  async justListen(transformResultFunc) {
    const res = await this.client.justListen()
    return this._getResponse(transformResultFunc(res.data))
  }
}
