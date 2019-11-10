// glob is a small module to read 'globs', useful to get
// a filtered file list
const glob = require('glob');
// we acquire an array containing the filenames
// in the articles directory
const files = glob.sync('**/*.md', { cwd: 'articles'})

// We define a function to trim the '.md' from the filename
// and return the correct path.
// This function will be used later
function getSlugs(post, _) {
  const slug = post.substr(0, post.lastIndexOf('.'))
  return `/post-single/${slug}`
}

const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: { 
    title: 'Nicholas Griffin - Web Developer, Blogger and Technology Enthusiast',
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'name', property: 'name', content: 'Nicholas Griffin' },
      { hid: 'title', property: 'title', content: 'Nicholas Griffin' },
      { hid: 'ogSiteName', property: 'og:site_name', content: 'Nicholas Griffin' },
      { hid: 'description', hid: 'description', name: 'description', content: '👋 Welcome to my website! As you might have read in the title, my name is Nicholas Griffin and I am a web developer, blogger and technology enthusiast from the UK.' },
      { hid: 'keywords', hid: 'keywords', name: 'keywords', content: 'web developer,blogger,technology,founder,TechNutty' },
      { hid: 'ogTitle', property: 'og:title', content: 'Nicholas Griffin - Web Developer, Blogger and Technology Enthusiast' },
      { hid: 'ogType', property: 'og:type', content: 'website' },
      { hid: 'ogImage', property: 'og:image', content: 'https://cdn.nicholasgriffin.dev/Screenshot-2019-03-02-at-21-45-38.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-icon-57x57.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-icon-60x60.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-icon-72x72.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-icon-76x76.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-icon-114x114.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-icon-120x120.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-icon-144x144.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-icon-152x152.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-icon-180x180.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/favicon-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/favicon-16x16.png', sizes: '16x16' },
      { rel: 'mask-icon', type: 'apple-touch-icon', href: '/icons/safari-pinned-tab.svg', color: '#5bbad5' },
      { name: 'apple-mobile-web-app-title', content: 'Nicholas Griffin' },
      { name: 'application-name', content: 'Nicholas Griffin' },
      { name: 'theme-color', content: '#5bbad5' },
      { rel: 'manifest', href: '/manifest.json' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/static/css/style.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-tag-manager', { 
      id: 'GTM-NK46QBJ',
      pageTracking: false
    }]
  ],
  webfontloader: {
    google: {
      families: ['Open+Sans:400,700']
    }
  },
  sitemap: {
    hostname: 'https://nicholasgriffin.dev',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  generate: {
    routes: function () {
      return files.map(getSlugs)
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      })
    }
  }
}
