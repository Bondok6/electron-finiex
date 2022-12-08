let ENV_DEV = true;

//Development Environment
let port = "4000";
let host = "localhost";
let https = false;

//Production Environment
if (ENV_DEV == false) {
  port = "4000"; // make sure this port is open on your server you can do that via WHM or talk to you hosting company
  host = "finiexsoft.net";
  // https = {
  //   key: fs.readFileSync(path.resolve(__dirname, './../../ssl/keys/e91d4_263ff_69849e351107df5bd175dc197b8f6799.key')),
  //   cert: fs.readFileSync(path.resolve(__dirname, './../../ssl/certs/finiexsoft_net_e91d4_263ff_1662991925_03d581ece06647358a02c2032717de9b.crt'))
  // };
}

// use require instead of import to avoid error
const i18n = require("./config/i18n");

module.exports = {
  ssr: false,
  target: "universal",
  // deprecate
  /* mode : "client",*/
  server: {
    port: port,
    host: host,
    timing: false,
    https: https,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/chart.js",
        body: true,
      },
      {
        src: "https://cdn.grapecity.com/activereportsjs/3.1.0/dist/ar-js-core.js",
        body: true,
      },
      {
        src: "https://cdn.grapecity.com/activereportsjs/3.1.0/dist/ar-js-viewer.js",
        body: true,
      },
      {
        src: "https://cdn.grapecity.com/activereportsjs/3.1.0/dist/ar-js-tabular-data.js",
        body: true,
      },

      {
        src: "https://cdn.grapecity.com/activereportsjs/3.1.0/dist/ar-js-html.js",
        body: true,
      },
      {
        src: "https://www.grapecity.com/activereportsjs/demos/lib/purejs/license.js",
        body: true,
      },
      {
        src: "https://cdn.grapecity.com/activereportsjs/3.1.0/dist/ar-js-core.js",
        body: true,
      },
      {
        src: "https://cdn.grapecity.com/activereportsjs/3.1.0/dist/ar-js-designer.js",
        body: true,
      },
      {
        src: "https://cdn.grapecity.com/activereportsjs/3.1.0/dist/ar-js-pdf.js",
        body: true,
      },

      {
        src: "https://code.jquery.com/jquery-1.12.3.min.js",
        body: true,
      },
    ],
    title: "FINIEXS SOFT",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/ERP.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.grapecity.com/activereportsjs/3.0.0/styles/ar-js-viewer.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.grapecity.com/activereportsjs/3.0.0/styles/ar-js-ui.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.materialdesignicons.com/2.8.94/css/materialdesignicons.min.css",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap",
        rel: "stylesheet",
      },
      {
        href: "https://cdn.grapecity.com/activereportsjs/3.1.0/styles/ar-js-ui.css",
        rel: "stylesheet",
      },
      {
        href: "https://cdn.grapecity.com/activereportsjs/3.1.0/styles/ar-js-designer.css",
        rel: "stylesheet",
      },
    ],
  },

  publicRuntimeConfig: {
    axios: {
      //*for testing configuration axios
      baseURL: "https://api-dev.finiexsoft.net/api/v1/",
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css", "~/assets/style/style.scss"],

  router: {
    prefetchLinks: false,
  },
  modules: ["@nuxtjs/axios"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/element-ui",
    "@/plugins/axios",
    "@/plugins/global-functions",
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,
  // // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    /* other modules */
    [
      "nuxt-i18n",
      {
        vueI18nLoader: true,
        defaultLocale: "ar",
        locales: [
          {
            code: "en",
            name: "English",
          },
          {
            code: "ar",
            name: "العربية",
          },
        ],
        vueI18n: i18n,
      },
    ],
  ],

  fontawesome: {
    imports: [
      {
        set: "@fortawesome/pro-regular-svg-icons",
        icons: ["faAdjust"],
      },
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"],
      },
    ],
  },
  bundleRenderer: {
    shouldPreload: (file, type) => {
      return ["script", "style", "font"].includes(type);
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["~/plugins/*"],
    extractCSS: false,
    optimization: {
      usedExports: true,
      minimize: true,
      splitChunks: {
        chunks: "all",
        automaticNameDelimiter: "ChunK-Build",
        name: true,
        maxSize: 64000,
        cacheGroups:
          process.env == "production"
            ? {
                vendor: {
                  name: "node_vendors",
                  test: /[\\/]node_modules[\\/]/,
                  chunks: "all",
                  maxSize: 64000,
                },
              }
            : {},
      },
    },
    cssSourceMap: false,
    splitChunks: {
      pages: true,
      vendor: true,
      commons: true,
      runtime: true,
      layouts: true,
      name: true,
    },
    transpile: [/^element-ui/],
    loaders: {
      vue: {
        prettify: false,
      },
      babel: {
        presets: ["es2015", "stage-0"],
      },
    },
  },
  env: {
    BASE_URL: "https://api-dev.finiexsoft.net/api/v1/",
  },

  // webpack config
  //  webpack: {
  //    configure: (config) => {
  //     // babel loader
  //        { , }
  //     config.module.rules.push({
  //     test: /\.js$/,
  //        loader: 'babel',
  //         query: {compact: false}

  //     })
  //     return config

  //   }
};
