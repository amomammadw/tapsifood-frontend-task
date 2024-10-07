// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  icon: {
    collections: ["tabler"],
  },

  app: {
    head: {
      title: "TapsiFood | Frontend Task",
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon"],
  compatibilityDate: "2024-10-07",
});
