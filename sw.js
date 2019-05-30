importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/12b297124325d1a36a11.js",
    "revision": "626de1f1e1538643b10d878968103f95"
  },
  {
    "url": "/_nuxt/30af842f03976cd68c53.js",
    "revision": "974c8dbea3fa5c56a7d044dd9e63427d"
  },
  {
    "url": "/_nuxt/3d585c7a2897735a5479.js",
    "revision": "f78e5577d557c8cf0fd93be2c991c0bc"
  },
  {
    "url": "/_nuxt/3da11ee67390b6e11abb.js",
    "revision": "471dc2ef34d2389ce5d9d4f963f0dbbf"
  },
  {
    "url": "/_nuxt/42383b8707f44ae92737.js",
    "revision": "823f685828da9ebae6cfe13808ca5bb8"
  },
  {
    "url": "/_nuxt/47461f3fb071417f8e94.js",
    "revision": "8d43154246551da0cf2f63af363bbd48"
  },
  {
    "url": "/_nuxt/4b4b504cbe2bde1d4efa.js",
    "revision": "a077c967ae93246a3a4e957bc0021cf6"
  },
  {
    "url": "/_nuxt/5dd629e7ba60be35c5dc.js",
    "revision": "0853642410bef65b690d5beab7c50131"
  },
  {
    "url": "/_nuxt/718d1438e62ad3659c52.js",
    "revision": "f1d75c17d0076bb4f514f916ce332fdd"
  },
  {
    "url": "/_nuxt/841193d0387b5ba33180.js",
    "revision": "4f177ca51d299e46a8cb593d9e7135ca"
  },
  {
    "url": "/_nuxt/889a025991e0867415bf.js",
    "revision": "6df26ddf0cdc151c6dda0298aee27110"
  },
  {
    "url": "/_nuxt/bbfd17e44ed19bb76225.js",
    "revision": "4652f2f6c0b4c6192ffa0c3681195152"
  },
  {
    "url": "/_nuxt/cc4778707edcf952cc6d.js",
    "revision": "d68403cc09f19c2617bceebe7cc69e43"
  },
  {
    "url": "/_nuxt/d3b7b73756ddc4495dd1.js",
    "revision": "1743d671161171f668d2e34f74456979"
  },
  {
    "url": "/_nuxt/e75172f317d08c38b03a.js",
    "revision": "f74c5ad1668d18ccfb959a40ddf06e26"
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
