"use client";
import React from "react";
import styles from "#styles/about.module.css";
import Timeline from "../components/timeline";
import { motion } from "framer-motion";
import useGetData from "../provider/get_data";
import { useI18n } from "locales/client";

const Page = () => {
  const { timeline } = useGetData();
  const t = useI18n();

  return (
    <main className={styles.main}>
      <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1.75 } }}>
        {t("discover")}
      </motion.h1>

      <section className={styles.timeline_section}>
        <motion.hr initial={{ height: 0, opacity: 0 }} animate={{ height: "100%", opacity: 1, transition: { delay: 1.75 } }} />
        <div>
          {timeline.map((data) => {
            return <Timeline data={data} key={data.id} />;
          })}
        </div>
        <aside></aside>
      </section>
    </main>
  );
};

export default Page;
