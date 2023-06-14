/**
 * Learn chatgpt plugins: https://platform.openai.com/docs/plugins/introduction
 */

import ResponseBuilder from "../../../edge-src/common/ResponseBuilder";

// 100 character max
const descriptionForHuman = "The best podcast search engine and database. " +
  "Search 160+ million podcast episodes by topic or people"

// 8,000 character max
// Instruct the model on how to use your plugin generally
// Use natural language, preferably in a concise yet descriptive and objective tone.
// We suggest starting the description_for_model with “Plugin for …”
// and then enumerating all of the functionality that your API provides.
const descriptionForModel = 'Plugin for discovering podcasts and episodes. ' +
  "Always use listennotes_url from the response data for the link of a podcast or an episode. " +
  "Don't make up your own link."

const pluginSpec = (params) => ({
  "schema_version": "v1",

  // Human-readable name, such as the full company name. 20 character max.
  "name_for_human": "Listen Notes",

  // Name the model will use to target the plugin (no spaces allowed, only letters and numbers). 50 character max.
  "name_for_model": "PodcastDatabase",

  // Human-readable description of the plugin. 100 character max.
  "description_for_human": descriptionForHuman,

  // Description better tailored to the model, such as token context length considerations or keyword usage for
  // improved plugin prompting. 8,000 character max.
  "description_for_model": descriptionForModel,

  "auth": {
    "type": "service_http",
    "authorization_type": "bearer",
    "verification_tokens": {
      "openai": params.chatgptVerificationToken,
    }
  },

  "api": {
    "type": "openapi",
    "url": `${params.baseUrl}/chatgpt-plugin/openapi.json`
  },

  // URL used to fetch the logo. Suggested size: 512 x 512. Transparent backgrounds are supported.
  // Must be an image, no GIFs are allowed.
  "logo_url": `${params.baseUrl}/assets/android-chrome-512x512.png`,

  // Email contact for safety/moderation, support, and deactivation
  "contact_email": "hello@listennotes.com",

  // Redirect URL for users to view plugin information
  "legal_info_url": `${params.baseUrl}/legal.txt`
})

export async function onRequestGet(context) {
  const {env, data} = context

  const params = {
    chatgptVerificationToken: env.CHATGPT_VERIFICATION_TOKEN,
    baseUrl: data.baseUrl,
  }

  const responseBuilder = new ResponseBuilder(context)
  return responseBuilder.getJsonResponse(pluginSpec(params))
}
