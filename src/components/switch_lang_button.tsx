import { useTranslation } from "react-i18next";
import Langsvg from "@assets/images/lang";
import Cookies from "js-cookie";

const SwitchLangButton = () => {
  const { i18n } = useTranslation();

  const locale = i18n.language === "en" ? "fr" : "en";
  const switchLocale = () => {
    Cookies.set("lng", locale, { expires: 15, path: "/" });
    i18n.changeLanguage(locale);
  };

  return (
    <button onClick={() => switchLocale()}>
      <Langsvg />
      {locale.toUpperCase()}
    </button>
  );
};

export default SwitchLangButton;
