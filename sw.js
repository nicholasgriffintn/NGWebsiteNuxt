importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00a762ba8dfe8d896699.js",
    "revision": "691ea5d1befe36a386717231706b065b"
  },
  {
    "url": "/_nuxt/03e9a924ab826445cf4c.js",
    "revision": "fcecf337a53dc9e3364544e06eb501c6"
  },
  {
    "url": "/_nuxt/14c9c36523a33ff64abd.js",
    "revision": "9cee6430d20539b6cbdb552722e9cfde"
  },
  {
    "url": "/_nuxt/194f1e860869f1cf0412.js",
    "revision": "84974e7c05cbc6d9f017e100cdf3f4ab"
  },
  {
    "url": "/_nuxt/25e523b65019513fd41f.js",
    "revision": "2a1468e55276ee06dbe183ce3e88a6a3"
  },
  {
    "url": "/_nuxt/6e39b522a9209a8ad5f8.js",
    "revision": "064970abf437acaef5dcf470943511f5"
  },
  {
    "url": "/_nuxt/71fa2bae41f56918297a.js",
    "revision": "8737d704105e3db6759cdc679060682e"
  },
  {
    "url": "/_nuxt/7d66374f6722a12e89b2.js",
    "revision": "73ec6004304d5d0f54c0db0330f6c671"
  },
  {
    "url": "/_nuxt/7de4ddb54974d87b88f9.js",
    "revision": "9e050eab8c2383938df7b7114cd811fc"
  },
  {
    "url": "/_nuxt/927d978d8679bb714646.js",
    "revision": "805c557f585a38a73412da8376a2cf8b"
  },
  {
    "url": "/_nuxt/9b65b06aa828679fcb0f.js",
    "revision": "99893d592e64ef50add4552d2359919c"
  },
  {
    "url": "/_nuxt/a17f38554099660997c9.js",
    "revision": "bb9dc1a4913ccea42f5dc7fc923f0336"
  },
  {
    "url": "/_nuxt/a2f3bf3de944616b828f.js",
    "revision": "4867964d3b77eec8c8e59d4f858c4a2f"
  },
  {
    "url": "/_nuxt/b31bf4acc6c34186247b.js",
    "revision": "09ed28fd3eaba5a9d9697da84cbcd109"
  },
  {
    "url": "/_nuxt/d8b751a0d2eb2bf7a101.js",
    "revision": "32f3ec8ba13ee440e647345f176e4872"
  }
], {
  "cacheId": "NicholasGriffin",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
