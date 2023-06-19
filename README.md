# Listen Notes ChatGPT Plugin

This repository contains the source code for the Listen Notes ChatGPT plugin. This plugin is built with [PodcastAPI.com](https://www.podcastapi.com/) and deployed on serverless Cloudflare Pages using JavaScript. It allows users to interact with the Listen Notes Podcast Database through the ChatGPT interface. Users can search for podcasts, find episodes, get recommendations, and more.

## Table of Contents

- [Using the Plugin](#using-the-plugin)
- [Running Locally](#running-locally)
- [Deploying to Production](#deploying-to-production)
- [Adapting the Plugin](#adapting-the-plugin)

## Using the Plugin

To use the Listen Notes ChatGPT plugin, you'll need to enable the plugin on [chat.openai.com](https://chat.openai.com/) first:
<img width="724" alt="Screenshot 2023-06-19 at 10 11 25 AM" src="https://github.com/ListenNotes/listennotes-chatgpt-plugin/assets/1719237/6cbf8570-b1e7-4c83-b3f4-0576612b65b5">

You can try prompts like these:
* "what are some recent podcast episodes talking about Sam Altman, in English"
* "give me a random podcast episode to listen"
* "how many episodes does the daily podcast have"
* "有哪些好的中文播客，关于犯罪的"
* "find me some podcasts about charles manson"

<img width="683" alt="Screenshot 2023-06-19 at 10 18 30 AM" src="https://github.com/ListenNotes/listennotes-chatgpt-plugin/assets/1719237/edacc151-7ea9-4f0c-992a-461bd7a7e567">


## Running Locally

To run this repo on your local development environment, follow these steps:

**0) Install [Cloudflare Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/)**
```
npm install -g wrangler
```

**1) Clone the repository to your local machine.**
```
git clone git@github.com:ListenNotes/listennotes-chatgpt-plugin.git
```

**2) Install the necessary dependencies.**
```
yarn install
```

**3) Create a `.dev.vars` file in the root directory of this project (at the same level as package.json).**

Put these variables in the `.dev.vars` file:
```
LISTEN_API_KEY = "your_podcast_api_key_from_podcastapi.com"

CHATGPT_SECRET = "your_custom_secret_which_is_like_a_password"
CHATGPT_VERIFICATION_TOKEN = "a_secret_generated_on_chat.openai.com"
NODE_VERSION = '17'
```

|Variables|Description|Required for dev?|
|---------|-----------|-----------------|
|LISTEN_API_KEY| API key for Podcast API, which can be obtained at [listennotes.com/api/pricing](https://www.listennotes.com/api/pricing/)| Yes|
|CHATGPT_SECRET| A custom secret for interacting with proxy endpoints defined in [functions/api/v2](./functions/api/v2)| Yes|
|CHATGPT_VERIFICATION_TOKEN| A verification token generated on chat.openai.com. For dev purposes, you can put a random string or leave it blank for now.| No|
|NODE_VERSION| Pin the nodejs version to 17.0, which is to make Cloudflare Pages happy. | No|

**4) Test the proxy endpoints**

Run the dev server first:
```
yarn dev
```

Then use curl to send a request (Note: Replace $CHATGPT_SECRET with the value that you set in the `.dev.vars` file):
```
curl -X GET --location "http://localhost:8788/api/v2/search_podcasts?q=nba" \
    -H "Authorization: Bearer $CHATGPT_SECRET"
```

## Adapting the Plugin

This plugin can be adapted to work with other APIs. To do this, you'll need to modify the endpoints and the corresponding functions in the code. 

Specifically, you'll need to change three things:

1) **Update [ai-plugin.json](./functions/.well-known/ai-plugin.json/index.js)**: Learn more on [openai.com](https://platform.openai.com/docs/plugins/getting-started/plugin-manifest).

2) **Update [proxy endpoints](./functions/api/v2) with other APIs**: Those proxy endpoints are running on Cloudflare Pages edge to send API requests. You may want to learn [how Cloudflare Pages functions work](https://developers.cloudflare.com/pages/platform/functions/get-started/) first.

3) **Update [openapi.json](./functions/chatgpt-plugin/openapi.json/index.js)**: ChatGPT relies on this openapi spec to know what proxy endpoints are available. You may want to learn more on [openai.com](https://platform.openai.com/docs/plugins/getting-started/openapi-definition).

Replace the PodcastAPI.com calls with calls to your chosen API, and update the data processing to match the structure of your new API's responses. Remember to update the ai-plugin.json and openapi.json to accurately reflect your new plugin's functionality.

### Deploying to Production

To deploy the Listen Notes ChatGPT plugin to production on [Cloudflare Pages](https://pages.cloudflare.com/), follow these steps:

1) **[Create a Cloudflare Pages project](https://dash.cloudflare.com/sign-up/workers-and-pages)**

You'll setup deployment configuration like this:

 <img width="945" alt="Screenshot 2023-06-19 at 11 35 53 AM" src="https://github.com/ListenNotes/listennotes-chatgpt-plugin/assets/1719237/31f61947-a01d-466b-9523-4a90ac7d10c8">

And setup environment variables:

<img width="930" alt="Screenshot 2023-06-19 at 11 36 46 AM" src="https://github.com/ListenNotes/listennotes-chatgpt-plugin/assets/1719237/4ffc570d-598f-4aff-912c-f0de66eec1b6">

Note: At first, you may just put a random string for CHATGPT_VERIFICATION_TOKEN because you'll get the real verification token later from openapi.com.

And setup custom domain for your Cloudflare Pages project:

<img width="1290" alt="Screenshot 2023-06-19 at 11 43 43 AM" src="https://github.com/ListenNotes/listennotes-chatgpt-plugin/assets/1719237/06552010-21f7-4997-9033-b17e6b8ca8ec">


2) **[Test on chat.openai.com](https://chat.openai.com/)**

Go to the Plugin store:

<img width="1088" alt="Screenshot 2023-06-19 at 11 42 42 AM" src="https://github.com/ListenNotes/listennotes-chatgpt-plugin/assets/1719237/6fe88f94-3a53-45db-b2f9-de7f1febb04d">

And follow the instructions to setup your plugin:

<img width="391" alt="Screenshot 2023-06-19 at 11 45 18 AM" src="https://github.com/ListenNotes/listennotes-chatgpt-plugin/assets/1719237/7f5c3415-81e8-425e-a9b7-7abc870032ff">

You'll see the verification token, then go back to the Cloudflare Pages dashboard to setup the value of CHATGPT_VERIFICATION_TOKEN (you can delete the old variable and add a new one):

<img width="1246" alt="Screenshot 2023-06-19 at 11 47 33 AM" src="https://github.com/ListenNotes/listennotes-chatgpt-plugin/assets/1719237/830f85ec-cd14-467a-a51b-a87e77695e57">

To make your Cloudflare Pages project pick up the new CHATGPT_VERIFICATION_TOKEN value, you'll have to redeploy:

<img width="483" alt="Screenshot 2023-06-19 at 11 48 45 AM" src="https://github.com/ListenNotes/listennotes-chatgpt-plugin/assets/1719237/7a4d0502-a535-43a6-a3b1-c371c8759ccb">

Then go back to the ChatGPT UI to verify the verification token.

By this point, you should be able to test your plugin on chat.openai.com.

### Submit for review

To list your plugin on the Plugin Store, please refer to the guidelines provided on [this page](https://platform.openai.com/docs/plugins/review) for submitting your plugin for review.
