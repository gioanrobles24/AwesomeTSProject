import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import en from "./en";
import es from "./es";

i18n.use(initReactI18next).init({
  // we init with resources
  resources: {
    en: en,
    es: es
  },
  fallbackLng: "es",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  react: {
    useSuspense: false
  },
  cleanCode: true
});

export default i18n;
