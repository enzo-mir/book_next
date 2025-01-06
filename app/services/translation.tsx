import en from "../provider/locales/en/common.json";
import fr from "../provider/locales/fr/common.json";

export const LANGUAGE_KEY = "preferred_language";

export const getTranslation = () => {
  const storedLanguage = sessionStorage.getItem(LANGUAGE_KEY);
  if (storedLanguage) {
    return storedLanguage === "fr" ? fr : en;
  } else if (typeof window !== "undefined") {
    const browserLanguage = navigator.language.includes("fr") ? "fr" : "en";
    sessionStorage.setItem(LANGUAGE_KEY, browserLanguage);
    return browserLanguage === "fr" ? fr : en;
  }
  return en;
};
