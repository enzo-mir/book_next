import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import fr from "@locales/fr/translate.json";
import en from "@locales/en/translate.json";
import Cookies from "js-cookie";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translate: en,
      },
      fr: {
        translate: fr,
      },
    },
    fallbackLng: "en",
    ns: ["translate"],
    lng: Cookies.get("lng") || (navigator.language.includes("fr") ? "fr" : "en"),
    defaultNS: "translate",
  });

export default i18n;
