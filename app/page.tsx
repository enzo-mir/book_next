"use client";
import styles from "#styles/main.module.css";
import { motion } from "framer-motion";
import Card from "#components/card";

export default function Page() {
  return (
    <main className={styles.main}>
      <section className={styles.header_section}>
        <h1>
          <motion.span initial={{ opacity: 0, translateX: "2%" }} animate={{ opacity: 1, translateX: "0%", transition: { delay: 1.5 } }}>
            hi
          </motion.span>
          <motion.span initial={{ opacity: 0, translateX: "2%" }} animate={{ opacity: 1, translateX: "0%", transition: { delay: 1.75 } }}>
            i&apos;m a front end web developer
          </motion.span>
        </h1>

        <aside></aside>
      </section>
      <section className={styles.bottom_section}>
        <div>
          <motion.hr initial={{ width: "0%" }} animate={{ width: "100%", transition: { duration: 0.5, delay: 1.75 } }} />
          <motion.p initial={{ y: -20, opacity: 0 }} animate={{ y: -0, opacity: 1, transition: { duration: 0.5, delay: 1.75 } }}>
            Let&apos;s discover my code !
          </motion.p>
        </div>
        <ul className={styles.galery}>
          <Card />
        </ul>
      </section>
    </main>
  );
}
