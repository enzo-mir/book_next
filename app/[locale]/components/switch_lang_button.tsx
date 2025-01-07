import { useLocale } from "next-intl";
import Langsvg from "../images/lang.svg";
import { useRouter } from "next/navigation";

const SwitchLangButton = () => {
  const router = useRouter();
  const locale = useLocale();

  const switchLocale = () => {
    const currentPath = window.location.pathname;
    router.push(currentPath.replace(`/${locale}`, locale === "en" ? "/fr" : "/en"));
  };

  return (
    <button onClick={() => switchLocale()}>
      <Langsvg />
      {locale}
    </button>
  );
};

export default SwitchLangButton;
