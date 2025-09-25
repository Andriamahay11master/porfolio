import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations directly
import en from "../public/locales/en/translation.json";
import fr from "../public/locales/fr/translation.json";

const defaultNS = "translation";

i18n
  // Detect user language from browser/localStorage
  .use(LanguageDetector)
  // Pass the instance to react-i18next
  .use(initReactI18next)
  // Initialize
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: "en", // default language
    fallbackLng: "en",
    debug: import.meta.env.DEV, // debug only in dev mode
    interpolation: {
      escapeValue: false, // not needed for React
    },
    defaultNS,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
