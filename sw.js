importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08c617dcfad4d222618c.js",
    "revision": "d260217eea8695cf8d3e34d4298d16d6"
  },
  {
    "url": "/_nuxt/13437162080e50cd357f.js",
    "revision": "65c07ca1205590f81a441eecb60373b7"
  },
  {
    "url": "/_nuxt/2e7a363c321a9edb1c08.js",
    "revision": "cc1754915c12c622323bc027ebb692b0"
  },
  {
    "url": "/_nuxt/300a7bc41f44aa8d1713.js",
    "revision": "24f72019bca96009d831dd8996286161"
  },
  {
    "url": "/_nuxt/3f5f95df15d16604e7e4.js",
    "revision": "f0bb71a95eebbd0e13e979d1b9663cb3"
  },
  {
    "url": "/_nuxt/404bcd92972f1ddfc06e.js",
    "revision": "4bb33ef6dbe2a73186641f7609430879"
  },
  {
    "url": "/_nuxt/43915717ff265eaf1f7d.js",
    "revision": "98f7e92d81e646eec29329eaa6870905"
  },
  {
    "url": "/_nuxt/477ba181feea3d91b77c.js",
    "revision": "8c53fe27d76130af6f6191374e73cf95"
  },
  {
    "url": "/_nuxt/59ab6b80ae202f3310e0.js",
    "revision": "77bd6b34ed25509a8dea6f1a61481e42"
  },
  {
    "url": "/_nuxt/7c75bec0c7d56f681010.js",
    "revision": "799282ec734f3d5c31be6d1e912213c5"
  },
  {
    "url": "/_nuxt/91cfd09efa1efe617b30.js",
    "revision": "c973ba0c8c502f67f82dbd9bd53e154c"
  },
  {
    "url": "/_nuxt/a5c82858f1d9944162a6.js",
    "revision": "b55628e180962e64d6a2fcd564ba4f6e"
  },
  {
    "url": "/_nuxt/b0f59e5884180f1a6f1c.js",
    "revision": "42ae360922a90b1067318f1e7526f55e"
  },
  {
    "url": "/_nuxt/e34bffa4b736a59c5395.js",
    "revision": "89f80aceb7681e5677772862ca09fe9e"
  },
  {
    "url": "/_nuxt/f1ae6aed591872faf670.js",
    "revision": "ffb4d9770ee331afa9e777611fe23315"
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
