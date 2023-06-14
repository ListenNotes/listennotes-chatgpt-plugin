# Listen Notes ChatGPT Plugin

## Environment Variables

* LISTEN_API_KEY
* CHATGPT_SECRET
* NODE_VERSION
* CHATGPT_VERIFICATION_TOKEN

## How to add a new API endpoint

1. For a new endpoint, implement a new Def file in `edge-src/api-definitions`, like JustListenDef.js
2. Create a new function file under `functions/api/v2`, like just_listen.js
3. Add the new Def object to params.paths in `chatgpt-plugin/openapi.json/index.js`, like `...new JustListenDef().openApiPathSpec()`
