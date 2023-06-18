/**
 * Learn chatgpt plugins: https://platform.openai.com/docs/plugins/introduction
 */

import ResponseBuilder from "../../../edge-src/common/ResponseBuilder";

// 100 character max
const descriptionForHuman = "The best podcast search engine and database. All podcasts and episodes. " +
  "Built with PodcastAPI.com."

// 8,000 character max
// Instruct the model on how to use your plugin generally
// Use natural language, preferably in a concise yet descriptive and objective tone.
// We suggest starting the description_for_model with “Plugin for …”
// and then enumerating all of the functionality that your API provides.
// Best practices: https://platform.openai.com/docs/plugins/getting-started/best-practices
const descriptionForModel = 'Plugin for discovering podcasts and episodes.\n ' +
  '- When asked for searching podcasts, use the `searchPodcasts` endpoint\n ' +
  '- when asked for searching episodes or interviews, use the `searchEpisodes` endpoint\n ' +
  '- When asked for top podcasts or best podcasts or podcast recommendations, ' +
  'use the `getBestPodcasts` endpoint first; if no results, then try the `searchPodcasts` endpoint\n ' +
  '- When you need category or genres id, use the `getGenres` endpoint to ' +
  'find the closet genre name then get the id\n ' +
  'Instructions for displaying results:\n ' +
  "- Always use `listennotes_url` from the response data for the link of a podcast or an episode. " +
  "Don't make up your own link.\n " +
  '- Display at most 5 results, where each result is a podcast or an episode.\n ' +
  '- Summarize the description of each result to at most 150 characters.'

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
  "legal_info_url": `${params.baseUrl}/chatgpt-plugin/legal.txt`
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
