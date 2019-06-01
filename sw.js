importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/015b52f1432967c474d6.js",
    "revision": "8d4ed13f3a833bffdf061fea45577967"
  },
  {
    "url": "/_nuxt/1519300d57d6fa1931d6.js",
    "revision": "8e2bfc4e75eca4201dda630ec7d03587"
  },
  {
    "url": "/_nuxt/38658e6e14e7ba64db8b.js",
    "revision": "ed192b05c75139c35e1a6fe25cb9bb8d"
  },
  {
    "url": "/_nuxt/4290f68c1cbf55973ae2.js",
    "revision": "f8dba7d5e32b11e0524b2e067548a890"
  },
  {
    "url": "/_nuxt/45cd76051c06079af8ef.js",
    "revision": "cf064b2413b772ef203e003cf910403f"
  },
  {
    "url": "/_nuxt/66fe418448a98683de6c.js",
    "revision": "0e834b90d77c44f646942bb23b4bfe12"
  },
  {
    "url": "/_nuxt/670744a3e88a3350f523.js",
    "revision": "44c843c9252c4bd064cc73f1a5c48ab0"
  },
  {
    "url": "/_nuxt/758bcfd2eec4281adba3.js",
    "revision": "da1e904ae32731c7c74a6860b838e13c"
  },
  {
    "url": "/_nuxt/8b0c2f431e356e51e93c.js",
    "revision": "311d023ef1ca412c7aaf82efbbef6f55"
  },
  {
    "url": "/_nuxt/8b1ef29d53c17104191b.js",
    "revision": "dc8fe6fe0d0125dd73fcada8d3e4a074"
  },
  {
    "url": "/_nuxt/a8b6a36a9709a42c285b.js",
    "revision": "d8ec14f052dd4aa2fc733c1dd0f92c37"
  },
  {
    "url": "/_nuxt/aecd36c2db2e4855473b.js",
    "revision": "b83d3336188d1cc2d1da5590652eb077"
  },
  {
    "url": "/_nuxt/c2fe9af0c534540cbd4e.js",
    "revision": "83578ef1b9123837d0883b8d60c6e521"
  },
  {
    "url": "/_nuxt/ca60aa13b40d9b0d286e.js",
    "revision": "5f587e26f4e9d2359a4fee7d9a906085"
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
