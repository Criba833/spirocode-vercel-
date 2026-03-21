// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-03-21",
  devtools: { enabled: true },
  app: {
    head: {
      title: "SpiroCode",
    },
  },

  modules: ["@unocss/nuxt"],

  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
});
