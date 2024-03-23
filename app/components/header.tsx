import React from "react";
import GithubIcon from "../images/github.svg";
import FrontEndMentor from "../images/front_end_mentor.svg";
import SendEmail from "../images/send_email.svg";
import styles from "#styles/header.module.css";
import { Work_Sans } from "next/font/google";
import Link from "next/link";
const workSans = Work_Sans({ subsets: ["latin"], weight: "500" });

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/portfolio" className={workSans.className}>
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="/about" className={workSans.className}>
                ABOUT ME
              </a>
            </li>
          </ul>
        </nav>
        <h1>
          <Link href="/">miraglio enzo</Link>
        </h1>
        <ul className={styles.socials}>
          <li>
            <Link href="https://github.com/enzo-mir" target="_blank">
              <GithubIcon />
            </Link>
          </li>
          <li>
            <Link href="https://www.frontendmentor.io/profile/enzo-mir" target="_blank">
              <FrontEndMentor />
            </Link>
          </li>
          <li>
            <Link href="mailto:miraglioenzo93@gmail.com" target="_blank">
              <SendEmail />
            </Link>
          </li>
        </ul>
        <label htmlFor="check" className={styles.burger}>
          <input type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </header>
    </>
  );
};

export default Header;
