import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationIT from "./locales/it/translation.json";
import translationES from "./locales/es/translation.json";

const resources = {
    en: {
      translation: translationEN,
    },
    it: {
      translation: translationIT,
    },
    es: {
      translation: translationES,
    },
  };
  
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;