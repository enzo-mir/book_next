"use client";
import React from "react";
import styles from "#styles/about.module.css";
import Timeline from "#components/timeline";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { getTranslation } from "../services/translation";

const Page = () => {
  const t = getTranslation();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <main className={styles.main} ref={ref}>
      <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        {t.discover}
      </motion.h1>

      <section className={styles.timeline_section}>
        <hr data-visible={inView} />
        <div>
          {t.timeline.map((data) => {
            return <Timeline data={data} key={data.id} />;
          })}
        </div>
        <aside></aside>
      </section>
    </main>
  );
};

export default Page;
