// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // Tailwind CSS
    "@nuxtjs/tailwindcss",
  ],
  app: {
    head: {
      title: "Daniela Dias - Website Portfolio",
      meta: [
        {
          name: "description",
          content: "Site about Daniela Diaz - UX|UI Designer",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
      script: [
        {
          src: "https://unpkg.com/vue-typer/dist/vue-typer.min.js",
          body: true,
        },
      ],
    },
    // layoutTransition: { name: "layout", mode: "out-in" },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
});
