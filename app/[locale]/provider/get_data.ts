import { useLocale } from "next-intl";
import type data from "locales/data/en.json";
import en from "locales/data/en.json";
import fr from "locales/data/fr.json";

export default function useGetData(): typeof data {
  const local = useLocale();
  return local === "fr" ? fr : en;
}
