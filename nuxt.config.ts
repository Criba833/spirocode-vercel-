// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-03-21",
  devtools: { enabled: true },

  alias: {
    "@": "/",
  },

  app: {
    head: {
      title: "SpiroCode",
      link: [
        // Google Fonts
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Qualy:wght@400;500;600;700&family=Work+Sans:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  modules: ["@unocss/nuxt"],

  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
});
