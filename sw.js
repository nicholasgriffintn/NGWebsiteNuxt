importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/374c35dcd568f77d8d47.js",
    "revision": "840ea811b7c4d4c6b0f8ee28fbd05a7a"
  },
  {
    "url": "/_nuxt/45ac0f7fc46aa7c3ad9a.js",
    "revision": "0e90d29c94f874498c3f7d0c3d103972"
  },
  {
    "url": "/_nuxt/6567371566924b89bd09.js",
    "revision": "81aefbc8c2fd9e8791c2302b0fe387c0"
  },
  {
    "url": "/_nuxt/6b8a8582a5f82c0f1e06.js",
    "revision": "ffa7f5a779b60e93d5a04bec105ad933"
  },
  {
    "url": "/_nuxt/7d74e4f443396720daa5.js",
    "revision": "5ccfb0cb3649f90a6426dbb6eff62fb6"
  },
  {
    "url": "/_nuxt/8c50d3902d6da8d5999e.js",
    "revision": "88d0037d88a1ba6933525fc19ad4c704"
  },
  {
    "url": "/_nuxt/92e4b7089066e2e02baa.js",
    "revision": "1f0624391d97a6c270741f79dc4ba412"
  },
  {
    "url": "/_nuxt/a298e545f844038858ba.js",
    "revision": "d627bab9ada4ed474c1bbbbd58411c55"
  },
  {
    "url": "/_nuxt/c8d4048d477256b0faea.js",
    "revision": "b62753d526f6ae19006fc7729a9aa1ea"
  },
  {
    "url": "/_nuxt/caba30063dacca87411e.js",
    "revision": "a21a28c701e7814ec299533a86c4f54d"
  },
  {
    "url": "/_nuxt/d26db56abffc2e10e685.js",
    "revision": "7bfbf17fd5a87a17bb82741576f53dee"
  },
  {
    "url": "/_nuxt/e8612cbf07d095254218.js",
    "revision": "3fa62f192f2d8da71ebf9f8c3ea8a802"
  },
  {
    "url": "/_nuxt/ed5ca3c40fa941f82244.js",
    "revision": "b470a565f5b466a205b5cb7ab2c909b5"
  },
  {
    "url": "/_nuxt/faa1419093dd88d93b3c.js",
    "revision": "ee9cdf668ac76de4d1d994da3cc0c67d"
  }
], {
  "cacheId": "nicholasgriffin",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
