// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss'
  ],


  tailwindcss: {
    cssPath: '~/public/assets/css/soft-ui-dashboard-tailwind.css',
    exposeConfig: false,
    config: {},
    viewer: true,
  }

})
