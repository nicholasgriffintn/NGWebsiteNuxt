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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'keywords', name: 'keywords', content: 'web developer,blogger,technology,founder,TechNutty' },
      { hid: 'author', name: 'author', content: 'Nicholas Griffin' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-touch-icon-57x57.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-touch-icon-60x60.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-touch-icon-72x72.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-touch-icon-76x76.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-touch-icon-114x114.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-touch-icon-120x120.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-touch-icon-144x144.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' },
      { rel: 'icon', type: 'apple-touch-icon', href: '/icons/apple-touch-icon-180x180.png' },
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
    ['@nuxtjs/google-tag-manager', { id: 'GTM-NK46QBJ' }]
  ],
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
