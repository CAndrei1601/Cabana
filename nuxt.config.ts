// https://nuxt.com/docs/api/configuration/nuxt-config
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from "@unocss/transformer-directives";
export default defineNuxtConfig({
  app: {
    head: {
      title: "Cabana Lirca",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Averia+Serif+Libre&family=Inter:wght@400;500;600&display=swap",
        },
      ],
    },
  },
  css: ["@/assets/main.scss"],
  modules: [
    "@nuxt/image-edge",
    "@nuxtjs/i18n",
    "@unocss/nuxt",
    "@nuxtjs/device",
    "nuxt-swiper",
  ],
  buildModules: ["@nuxtjs/google-fonts"],
  i18n: {
    strategy: "prefix_except_default",
    locales: [
      {
        code: "ro",
        file: "ro.json",
      },
    ],
    defaultLocale: "ro", // default locale of your project for Nuxt pages and routings
    detectBrowserLanguage: false,
    langDir: "lang",
  },

  swiper: {
    modules: ["navigation", "pagination"],
    styleLang: "css",
  },

  googleFonts: {
    display: "swap",
    download: true,
    inject: true,
    families: {
      Roboto: true,
      "Averia+Serif+Libre": {
        wght: [400],
      },
      Inter: {
        wght: [400, 500, 600],
      },
    },
  },
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: false, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    transformers: [transformerVariantGroup(), transformerDirectives()],
    theme: {
      colors: {
        green: {
          10: "#DDDCD3",
          16: "#D1D1C7",
          24: "#C3C3B9",
          40: "#A3A79C",
          60: "#7D8478",
          100: "#303E30",
        },
        greenDarker:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16)), #303E30;",
        cream: "#F0EDE4",
        orange: "#EC5C1F",
        orangeHover: "#F88758",
        orangeDarker:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), #EC5C1F;",
      },

      //test
      fontFamily: {
        aveira: ["Averia Serif Libre", "cursive"],
        inter: ["Inter", "sans-serif"],
      },

      breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1500px",
        "3xl": "1920px",
      },
    },
  },
});
