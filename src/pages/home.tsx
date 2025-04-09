import styles from "@css/layout.module.css";
import { motion } from "framer-motion";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
const Card = React.lazy(() => import("@components/card"));

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <section className={styles.header_section}>
        <h2>
          <motion.span
            initial={{ opacity: 0, translateX: "2%" }}
            animate={{
              opacity: 1,
              translateX: "0%",
              transition: { delay: 1.5 },
            }}
          >
            {t("index.p1")}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, translateX: "2%" }}
            animate={{
              opacity: 1,
              translateX: "0%",
              transition: { delay: 1.75 },
            }}
          >
            {t("index.p2")}
          </motion.span>
        </h2>
      </section>
      <section className={styles.bottom_section}>
        <div>
          <motion.hr
            initial={{ width: "0%" }}
            animate={{
              width: "100%",
              transition: { duration: 0.5, delay: 1.75 },
            }}
          />
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: -0,
              opacity: 1,
              transition: { duration: 0.5, delay: 1.75 },
            }}
          >
            {t("index.phrase")}
          </motion.p>
        </div>
        <ul className={styles.galery}>
          <Suspense fallback={<></>}>
            <Card />
          </Suspense>
        </ul>
      </section>
    </main>
  );
}
