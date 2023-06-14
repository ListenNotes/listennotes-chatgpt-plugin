const sampleJson = {
  "id": "2c9f8095c5a84c29972022dff98cf0cf",
  "link": "https://techcastdaily.libsyn.com/tsla-earnings-preview-q1-23-041823?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website",
  "audio": "https://www.listennotes.com/e/p/2c9f8095c5a84c29972022dff98cf0cf/",
  "image": "https://production.listennotes.com/podcasts/tesla-daily-tesla-news-analysis-rob-maurer-6qtMpiL7R4S-5Cbag3XfNvA.1400x1400.jpg",
  "title": "TSLA Earnings Preview Q1-23 (04.18.23)",
  "podcast": {
    "id": "b30f0c450baf4681b21637b20cb5647f",
    "image": "https://production.listennotes.com/podcasts/tesla-daily-tesla-news-analysis-rob-maurer-6qtMpiL7R4S-5Cbag3XfNvA.1400x1400.jpg",
    "title": "Tesla Daily: Tesla News & Analysis",
    "publisher": "Rob Maurer",
    "thumbnail": "https://production.listennotes.com/podcasts/tesla-daily-tesla-news-analysis-rob-maurer-viHqbY7w9tN-5Cbag3XfNvA.300x300.jpg",
    "listen_score": 56,
    "listennotes_url": "https://www.listennotes.com/c/b30f0c450baf4681b21637b20cb5647f/",
    "listen_score_global_rank": "0.5%"
  },
  "thumbnail": "https://production.listennotes.com/podcasts/tesla-daily-tesla-news-analysis-rob-maurer-viHqbY7w9tN-5Cbag3XfNvA.300x300.jpg",
  "description": "<p>➤ Rob Maurer walks through forecasts and what to expect for Tesla’s Q1-2023 earnings report</p> <p>Shareloft: https://www.shareloft.com Twitter: https://www.twitter.com/teslapodcast Patreon: https://www.patreon.com/tesladailypodcast Tesla Referral: <a href=\"https://ts.la/robert47283\">https://ts.la/robert47283</a></p> <p>Executive producer Jeremy Cooke Executive producer Troy Cherasaro Executive producer Andre/Maria Kent Executive producer Jessie Chimni Executive producer Michael Pastrone Executive producer Richard Del Maestro Executive producer John Beans</p> <p>Disclosure: Rob Maurer is long TSLA stock & derivatives</p>",
  "pub_date_ms": 1681872285000,
  "guid_from_rss": "c054f2d6-1cce-4245-a0e5-eeac1f61121b",
  "listennotes_url": "https://www.listennotes.com/e/2c9f8095c5a84c29972022dff98cf0cf/",
  "audio_length_sec": 1331,
  "explicit_content": false,
  "maybe_audio_invalid": false,
  "listennotes_edit_url": "https://www.listennotes.com/e/2c9f8095c5a84c29972022dff98cf0cf/#edit"
}

export function onRequestGet(context) {
  return new Response(JSON.stringify(sampleJson), {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
}
