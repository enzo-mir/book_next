import React from "react";
import GithubIcon from "../images/github.svg";
import FrontEndMentor from "../images/front_end_mentor.svg";
import SendEmail from "../images/send_email.svg";
import styles from "#styles/header.module.css";
import { Work_Sans } from "next/font/google";
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
        <h1>miraglio enzo</h1>
        <ul className={styles.socials}>
          <li>
            <a href="#">
              <GithubIcon />
            </a>
          </li>
          <li>
            <a href="">
              <FrontEndMentor />
            </a>
          </li>
          <li>
            <a href="">
              <SendEmail />
            </a>
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
