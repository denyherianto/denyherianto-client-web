export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Deny's Daily",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A father from Mojokerto with a huge dream about life and family est. 1993.',
      },
      {
        name: 'og:description',
        content:
          'A father from Mojokerto with a huge dream about life and family est. 1993.',
      },
      {
        name: 'og:title',
        content: "Deny's Daily",
      },
      {
        name: 'og:site_name',
        content: "Deny's Daily",
      },
      {
        name: 'twitter:image:alt',
        content: "Deny's Daily",
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap',
        defer: true,
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap',
        defer: true,
      },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Global CSS
   */
  css: [
    // { src: 'bulma/bulma.sass', lang: 'sass' },
    // {
    //   src: 'bulma-utilities/sass/bulma-utilities.sass',
    //   lang: 'sass',
    // },
    // { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
    'bulma-utilities/css/bulma-utilities.css',
    // '~assets/css/style.css',
    '~assets/css/main.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        suffix: true,
        icons: {
          brands: true,
          regular: true,
        },
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },

  env: {
    siteUrl: 'https://me.denyherianto.com',
    baseUrl: 'https://backend.denyherianto.com',
    title: "Deny's Daily",
  },

  server: {
    port: 8117, // default: 3000
  },

  pwa: {
    manifest: {
      name: 'Deny Herianto',
      short_name: 'denyherianto',
      lang: 'en',
      start_url: '/',
    },
    workbox: {
      clientsClaim: false,
    },
  },
}
