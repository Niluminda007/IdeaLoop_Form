import translationsEnglish from "./locales/en/en.json";
import translationsGerman from "./locales/de/de.json";
import translationsRussian from "./locales/ru/ru.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: translationsEnglish,
  },
  de: {
    translation: translationsGerman,
  },
  ru: {
    translation: translationsRussian,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
