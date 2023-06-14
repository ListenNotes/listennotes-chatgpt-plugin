async function apiAuth({request, next, env}) {
  const authHeader = request.headers.get('Authorization')
  if (authHeader && env.CHATGPT_SECRET && authHeader === `Bearer ${env.CHATGPT_SECRET}`) {
    return next()
  }
  return new Response('Unauthorized', {status: 401});
}

export const onRequest = [apiAuth];
