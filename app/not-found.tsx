import React from "react";
import { Work_Sans } from "next/font/google";
const worksans = Work_Sans({ weight: "400", subsets: ["latin"] });
import styles from "#styles/not_found.module.css";

const NotFound = () => {
  return (
    <main className={styles.main}>
      <h1 className={worksans.className}>This page could not be found</h1>
      <a href="/" className={worksans.className}>
        Go back home
      </a>
    </main>
  );
};

export default NotFound;
