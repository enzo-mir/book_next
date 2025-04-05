import { useTranslation } from "react-i18next";
import Langsvg from "@assets/images/lang";

const SwitchLangButton = () => {
  const { i18n } = useTranslation();

  const switchLocale = () => {
    const locale = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(locale);
  };

  return (
    <button onClick={() => switchLocale()}>
      <Langsvg />
      {i18n.language}
    </button>
  );
};

export default SwitchLangButton;
