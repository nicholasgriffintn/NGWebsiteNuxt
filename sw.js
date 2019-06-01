importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00d2f21f406288ed133a.js",
    "revision": "acc233e108a800d9d08050ab2c0582a9"
  },
  {
    "url": "/_nuxt/011c46af306bcf5f5d97.js",
    "revision": "21143a358615137bd3ed8cff38f65291"
  },
  {
    "url": "/_nuxt/180068db65d241d526bd.js",
    "revision": "0dfae3e13f7aae581d02f88ba87e750c"
  },
  {
    "url": "/_nuxt/193fae209b5bf1696b46.js",
    "revision": "77fc412d2ca0203c639afc6924883244"
  },
  {
    "url": "/_nuxt/1dc0b463559668038079.js",
    "revision": "41e72b0a3d0775e338a10869ea598ad0"
  },
  {
    "url": "/_nuxt/216ddcd4c003a85fd2fe.js",
    "revision": "177f174256102988fb8bd8ec410c92d1"
  },
  {
    "url": "/_nuxt/2cccfa65d473ff3e7152.js",
    "revision": "412891cee4093e274108597a3cc8960c"
  },
  {
    "url": "/_nuxt/81ea9926193639cd91c7.js",
    "revision": "247a24c171e6079ca7e5acffef5c35d9"
  },
  {
    "url": "/_nuxt/977850dab4ed07b749d4.js",
    "revision": "c901c7f54de2b07865da7d6df2a84fb5"
  },
  {
    "url": "/_nuxt/a17fa3e31b7b00f10115.js",
    "revision": "e2b30fc02fb58b5c5eab88ddb3d8a4ae"
  },
  {
    "url": "/_nuxt/b17b317d944f212e4e9c.js",
    "revision": "e53faea299dc616a97db5730451841e1"
  },
  {
    "url": "/_nuxt/b387d6742d1644399d44.js",
    "revision": "426b6f4cab0f547e2b1ad4a2fe61d938"
  },
  {
    "url": "/_nuxt/ce82ade6751dcf9e680e.js",
    "revision": "3ed8c4506d84ed39ce410b69aee3f581"
  },
  {
    "url": "/_nuxt/d8acce2dd9ca194bf30f.js",
    "revision": "232785bf83ce0cbe0d7036575add5af4"
  },
  {
    "url": "/_nuxt/e49867cea97d5f1d147b.js",
    "revision": "cf82013e164476af8a8bc3eb873ef5ee"
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
