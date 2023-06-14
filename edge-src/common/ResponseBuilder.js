export default class ResponseBuilder {
  constructor() {
  }

  getJsonResponse(resultJson) {
    return new Response(JSON.stringify(resultJson), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
  }
}
