import React from "react";
import styles from "../style/header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.welcome}>
        <span>Welcome</span>
        <span> to my</span>
      </h2>
      <div className={styles.portfolioHeader}>
        <h1>Portfolio</h1>
        <span>Portfolio</span>
      </div>
      <ul className={styles.ulLink}>
        <li>
          <Image src="/github_link.svg" alt="icon github link" width={40} height={38} priority />
          <a href="https://github.com/enzo-mir" target="_blank">
            Github
          </a>
        </li>
        <li>
          <Image src="/frontendmentor_link.svg" priority alt="icon front end mentor" width={40} height={38} />
          <a href="https://www.frontendmentor.io/profile/enzo-mir" target="_blank">
            FrontEndMentor
          </a>
        </li>
        <li>
          <Image src="/email_link.svg" priority alt="icon send email" width={40} height={38} />
          <a href="mailto:miraglioenzo93@gmail.com">Address</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
