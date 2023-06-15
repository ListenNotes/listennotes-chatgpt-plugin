async function preprocessRequest({request, next, data}) {
  const urlObj = new URL(request.url)

  data.baseUrl = urlObj.origin
  data.searchParams = Object.fromEntries(urlObj.searchParams)

  return next()
}

export const onRequest = [preprocessRequest];
