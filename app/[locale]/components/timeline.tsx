"use client";
import { Work_Sans } from "next/font/google";
import React from "react";
import Image from "next/image";
import styles from "#styles/about.module.css";
import { motion } from "framer-motion";
import type { timeline } from "locales/data/en.json";

const workSans = Work_Sans({ subsets: ["latin"], weight: ["500", "300", "600"], display: "swap" });
const Timeline = ({ data }: { data: (typeof timeline)[0] }) => {
  return (
    <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2 } }} key={data.id} className={styles.article}>
      <Image src={data.img} alt={data.title} width={60} height={60} />
      <aside>
        <h1>{data.title}</h1>
        <p className={workSans.className}>{data.description}</p>
      </aside>
    </motion.article>
  );
};

export default Timeline;
