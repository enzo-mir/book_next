"use client";
import React from "react";
import timelineDatas from "../provider/timeline.json";
import styles from "#styles/about.module.css";
import Timeline from "#components/timeline";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Page = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <main className={styles.main} ref={ref}>
      <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Discover me
      </motion.h1>

      <section className={styles.timeline_section}>
        <hr data-visible={inView} />
        <div>
          {timelineDatas.map((data) => {
            return <Timeline data={data} key={data.id} />;
          })}
        </div>
        <aside></aside>
      </section>
    </main>
  );
};

export default Page;
