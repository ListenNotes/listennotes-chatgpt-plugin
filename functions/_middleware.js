async function preprocessRequest({request, next, data}) {
  const urlObj = new URL(request.url)
  data.baseUrl = urlObj.origin
  return next()
}

export const onRequest = [preprocessRequest];
