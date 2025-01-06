import en from "../provider/locales/en/common.json";
import fr from "../provider/locales/fr/common.json";

export const getTranslation = () => {
  return navigator.language.includes("fr") ? fr : en;
};
