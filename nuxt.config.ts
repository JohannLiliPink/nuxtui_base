// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },

  runtimeConfig: {

    public:{

      urlApi:'http://172.16.20.138:8000/api/',
      
    }
    
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },

  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },

  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },

  tailwindcss: {
    cssPath: '~/public/assets/css/soft-ui-dashboard-tailwind.css',
    exposeConfig: false,
    config: {},
    viewer: true,
  }

})
