importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08095cc0ddcff0005f18.js",
    "revision": "e304aa369b935aca1b4c5499d4609c2c"
  },
  {
    "url": "/_nuxt/0a9df1c9c77a89bdd93f.js",
    "revision": "9186f996f8a419bc6dceb49aa79656f8"
  },
  {
    "url": "/_nuxt/218d0ead9542693bd463.js",
    "revision": "c45feb9605f930733c1e913f8f65455c"
  },
  {
    "url": "/_nuxt/3944c3a8048d050fbd80.js",
    "revision": "33b5ace3051041e6c76868021e5addf4"
  },
  {
    "url": "/_nuxt/58b49f0cea55bbc66653.js",
    "revision": "faa6ce2a63111b0882f40e20257ac442"
  },
  {
    "url": "/_nuxt/72ff58b2c4c4555793ba.js",
    "revision": "6867d27ca46b12b4126d038a226cc87d"
  },
  {
    "url": "/_nuxt/891cec3389c6ce4c26d5.js",
    "revision": "d71bd58a12a4097e45c3587cd2bd8fa2"
  },
  {
    "url": "/_nuxt/a064f62c0b7efcecfaa9.js",
    "revision": "c9707128ed8d0c7b1d97d4b2d7da7771"
  },
  {
    "url": "/_nuxt/a546a561d9800fac68ce.js",
    "revision": "fcb39ec7dd777fc2dbaa1bd0ea3ae532"
  },
  {
    "url": "/_nuxt/cd4412461eab3e0f1742.js",
    "revision": "0b9fc2438e8c44fc00ca86a2f642ea85"
  },
  {
    "url": "/_nuxt/d7c75f6ac79d1786d22d.js",
    "revision": "4910e495fedf86031f894c083d25c67b"
  },
  {
    "url": "/_nuxt/eb89f409f7dd0f9865fb.js",
    "revision": "f341c530f4b8e61c2a91a34725df66f4"
  },
  {
    "url": "/_nuxt/edd650b703f941ffab3d.js",
    "revision": "f7462ee48bae97c965a4857c32ad625b"
  },
  {
    "url": "/_nuxt/fa9e51ab6a6d4487e545.js",
    "revision": "cf109778b614940221ced5d71b143f26"
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
