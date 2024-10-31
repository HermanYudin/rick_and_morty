export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/public/assets/styles/main.scss"],
  runtimeConfig: {
    public: {
      url: process.env.API_URL,
    },
  },
  modules: ["@pinia/nuxt"],
});
