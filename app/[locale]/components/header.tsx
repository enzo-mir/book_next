"use client";
import React, { ElementRef, MouseEvent, useRef } from "react";
import GithubIcon from "../images/github.svg";
import FrontEndMentor from "../images/front_end_mentor.svg";
import SendEmail from "../images/send_email.svg";
import styles from "#styles/header.module.css";
import { Work_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SwitchLangButton from "./switch_lang_button";
import { useI18n } from "locales/client";

const workSans = Work_Sans({ subsets: ["latin"], weight: "500" });
const Header = () => {
  const t = useI18n();
  const checkRef = useRef<ElementRef<"input">>(null);
  const pathName = usePathname().replace("/", "");
  function headerVisible(e: MouseEvent) {
    if (checkRef.current) {
      e.target === e.currentTarget ? (checkRef.current.checked = false) : null;
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
              <a href={"/portfolio"} aria-current={pathName === "portfolio" ? true : false} className={workSans.className}>
                {t("navbar.portfolio")}
              </a>
            </li>
            <li>
              <a href={"/about"} aria-current={pathName === "about" ? true : false} className={workSans.className}>
                {t("navbar.about")}
              </a>
            </li>
          </ul>
        </nav>
        <h1>
          <Link href={"/"}>{t("navbar.home")}</Link>
          <SwitchLangButton />
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
