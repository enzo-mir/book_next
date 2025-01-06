import React from "react";
import Langsvg from "../images/lang.svg";
import { LANGUAGE_KEY } from "../services/translation";

const SwitchLangButton = () => {
  if (typeof window === "undefined") return null;
  const storedLanguage = sessionStorage.getItem(LANGUAGE_KEY);
  const switchLang = () => {
    if (storedLanguage === "fr") {
      sessionStorage.setItem(LANGUAGE_KEY, "en");
      return window.location.reload();
    }
    sessionStorage.setItem(LANGUAGE_KEY, "fr");
    return window.location.reload();
  };
  return (
    <button onClick={switchLang}>
      <Langsvg />
      {storedLanguage?.toUpperCase()}
    </button>
  );
};

export default SwitchLangButton;
