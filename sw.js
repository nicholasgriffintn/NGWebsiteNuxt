importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/14f20a9935ed8df7f5ec.js",
    "revision": "5ff4427b20422780b13f788087cb8ffc"
  },
  {
    "url": "/_nuxt/20b7ee2ac65a1a0da292.js",
    "revision": "a498e0985cb37b5f6edcc086fb4adc6e"
  },
  {
    "url": "/_nuxt/41b1e94fef42d08aed47.js",
    "revision": "cbd5606a6a72a694469a4c9a58455f24"
  },
  {
    "url": "/_nuxt/4b312fc1dc422f907bb6.js",
    "revision": "b48c03b91f6a24e226b78bf06545ae9d"
  },
  {
    "url": "/_nuxt/66ac9de6a2c2d5f2a6db.js",
    "revision": "fb660c72c05a9a3ed741a2ca13c3026c"
  },
  {
    "url": "/_nuxt/9fa357ce713538a1e592.js",
    "revision": "435103e4e2b42bd725cb46f4ba98462a"
  },
  {
    "url": "/_nuxt/cba0a7e6bd4a1c7d27fe.js",
    "revision": "483b529cb27331b39fa796ff04b1fb75"
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
