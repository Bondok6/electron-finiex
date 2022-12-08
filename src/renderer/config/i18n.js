const en = require("../locales/en.json");
const ar = require("../locales/ar.json");

module.exports = {
  silentTranslationWarn: process.env.NODE_ENV === "production",
  locale: "ar",
  fallbackLocale: "ar",

  messages: { en, ar },
};
