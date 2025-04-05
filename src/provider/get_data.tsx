import { getI18n } from "react-i18next";
import type data from "@locales/en/translate.json";
import en from "@locales/en/translate.json";
import fr from "@locales/fr/translate.json";

export default function useGetData(): typeof data {
  const local = getI18n().language;
  return local === "fr" ? fr : en;
}
