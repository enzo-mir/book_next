"use client";
import React from "react";
import timelineDatas from "../provider/timeline.json";
import styles from "#styles/about.module.css";
import Timeline from "#components/timeline";
import { useInView } from "react-intersection-observer";

const Page = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <main className={styles.main} ref={ref}>
      <h1>Discover me</h1>

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
