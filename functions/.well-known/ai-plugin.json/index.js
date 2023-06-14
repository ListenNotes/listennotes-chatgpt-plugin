import ResponseBuilder from "../../../edge-src/common/ResponseBuilder";

const pluginSpec = {
  "schema_version": "v1",
  "name_for_human": "Listen Notes",
  "name_for_model": "PodcastDatabase",
  "description_for_human": "The best podcast search engine and database. Search 160+ million podcast episodes by topic or people",
  "description_for_model": "Plugin for searching podcasts and episodes. Always use listennotes_url from the response data for the link of a podcast or an episode. Don't make up your own link.",
  "auth": {
    "type": "service_http",
    "authorization_type": "bearer",
    "verification_tokens": {
      "openai": "2af42ffda4fa46718bbcb21562234c38"
    }
  },
  "api": {
    "type": "openapi",
    "url": "https://ai.listennotes.com/chatgpt-plugin/openapi.json"
  },
  "logo_url": "https://ai.listennotes.com/assets/android-chrome-512x512.png",
  "contact_email": "hello@listennotes.com",
  "legal_info_url": "https://ai.listennotes.com/legal.txt"
}

export async function onRequestGet(context) {
  const responseBuilder = new ResponseBuilder(context)

  return responseBuilder.getJsonResponse(pluginSpec)
}
