import { createI18n } from "vue-i18n";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import rw from "./locales/rw.json";

const savedLanguage = localStorage.getItem("language") || "en";

const i18n = createI18n({
  legacy: false,

  locale: savedLanguage,

  fallbackLocale: "en",

  messages: {
    en,
    fr,
    rw
  }
});

export default i18n;