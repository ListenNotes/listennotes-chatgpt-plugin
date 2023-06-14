import ResponseBuilder from "../../../edge-src/common/ResponseBuilder";

const openapiSpec = {
  info: 'hello'
}

export async function onRequestGet(context) {
  const responseBuilder = new ResponseBuilder(context)

  return responseBuilder.getJsonResponse(openapiSpec)
}
