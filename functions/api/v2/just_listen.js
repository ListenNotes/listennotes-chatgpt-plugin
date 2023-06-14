const { ClientForWorkers } = require('podcast-api');

export async function onRequestGet(context) {
  const {env} = context
  const client = ClientForWorkers({
    apiKey: env.LISTEN_API_KEY || null,
  })
  const resultJson = await client.justListen()
  return new Response(JSON.stringify(resultJson), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
}
