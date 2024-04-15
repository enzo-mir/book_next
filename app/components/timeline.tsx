"use client";
import { Work_Sans } from "next/font/google";
import React from "react";
import timelineDatas from "../provider/timeline.json";
import Image from "next/image";
import styles from "#styles/about.module.css";
import { useInView } from "react-intersection-observer";
const workSans = Work_Sans({ subsets: ["latin"], weight: ["500", "300", "600"], display: "swap" });

const Timeline = ({ data }: { data: (typeof timelineDatas)[0] }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <article key={data.id} className={styles.article} data-visible={inView} ref={ref}>
      <Image src={data.img} alt={data.title} width={60} height={60} />
      <aside>
        <h1>{data.title}</h1>
        <p className={workSans.className}>{data.description}</p>
      </aside>
    </article>
  );
};

export default Timeline;
