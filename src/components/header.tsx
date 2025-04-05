import React, { ComponentRef, MouseEvent, Suspense, useRef } from "react";
import GithubIcon from "@assets/images/github";
import FrontEndMentor from "@assets/images/front_end_mentor";
import SendEmail from "@assets/images/send_email";
import styles from "@css/layout.module.css";
const SwitchLangButton = React.lazy(() => import("./switch_lang_button"));
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const checkRef = useRef<ComponentRef<"input">>(null);
  const pathName = useLocation().pathname.replace("/", "");

  function headerVisible(e: MouseEvent) {
    if (checkRef.current) {
      if (e.target === e.currentTarget) {
        checkRef.current.checked = false;
      }
    }
  }

  function mouseLeave(span: HTMLSpanElement) {
    span.style.opacity = "0";
    span.style.left = `50%`;
  }

  function mouseEnterLink(e: MouseEvent<HTMLElement>, span: HTMLSpanElement) {
    const positionX = e.clientX - e.currentTarget.getBoundingClientRect().x;
    e.currentTarget.addEventListener("pointerleave", () => mouseLeave(span));
    span.style.left = `${positionX}px`;
    span.style.opacity = "1";
  }

  return (
    <>
      <header className={styles.header} onPointerDown={headerVisible} onMouseDown={headerVisible}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href={"/portfolio"} aria-current={pathName === "portfolio" ? true : false}>
                {t("navbar.portfolio")}
              </a>
            </li>
            <li>
              <a href={"/about"} aria-current={pathName === "about" ? true : false}>
                {t("navbar.about")}
              </a>
            </li>
          </ul>
        </nav>
        <h1>
          <a href={"/"}>{t("navbar.home")}</a>
          <Suspense fallback={<></>}>
            <SwitchLangButton />
          </Suspense>
        </h1>
        <ul className={styles.socials}>
          <li
            onPointerEnter={(e) => mouseEnterLink(e, e.currentTarget.firstChild as HTMLSpanElement)}
            onPointerMove={(e) => mouseEnterLink(e, e.currentTarget.firstChild as HTMLSpanElement)}
          >
            <span>github</span>
            <a rel="external" href="https://github.com/enzo-mir" target="_blank">
              <GithubIcon />
            </a>
          </li>
          <li
            onPointerEnter={(e) => mouseEnterLink(e, e.currentTarget.firstChild as HTMLSpanElement)}
            onPointerMove={(e) => mouseEnterLink(e, e.currentTarget.firstChild as HTMLSpanElement)}
          >
            <span>frontendmentor</span>
            <a rel="external" href="https://www.frontendmentor.io/profile/enzo-mir" target="_blank">
              <FrontEndMentor />
            </a>
          </li>
          <li
            onPointerEnter={(e) => mouseEnterLink(e, e.currentTarget.firstChild as HTMLSpanElement)}
            onPointerMove={(e) => mouseEnterLink(e, e.currentTarget.firstChild as HTMLSpanElement)}
          >
            <span>mail</span>
            <a rel="external" href="mailto:miraglioenzo93@gmail.com" target="_blank">
              <SendEmail />
            </a>
          </li>
        </ul>
        <label htmlFor="check" className={styles.burger}>
          <input ref={checkRef} type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </header>
    </>
  );
};

export default Header;
