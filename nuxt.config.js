export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Oriane Louis | Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true,
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config) {
      // Find the rule which contains a assets file extension
      const assetsLoader = config.module.rules.find(rule => rule.test.test('.png'));

      // Overwrite the test regex and add `pdf`
      assetsLoader.test = /\.(png|jpe?g|gif|svg|webp|pdf)$/i;

      return config;
    },
  },
}
