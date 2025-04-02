"use client";
import React, { ElementRef, useRef } from "react";
import styles from "#styles/portfolio.module.css";
import ProjectCard from "../components/project_card";
import { filterByAdonis, filterByApi, filterByHtml } from "../services/filter_projects";
import { motion } from "framer-motion";
import { Work_Sans } from "next/font/google";
import type { data } from "locales/data/en.json";
import useGetData from "../provider/get_data";
import { useI18n } from "locales/client";

const workSans = Work_Sans({ subsets: ["latin"], weight: "600" });

const FilteredElement = ({ filter, text }: { filter: typeof data; text: string }) => {
  const containerRef = useRef<ElementRef<"section">>(null);
  return (
    <section className={styles.section} ref={containerRef}>
      <div>
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1.75 } }}>
          {text}
        </motion.h1>
        <motion.hr initial={{ width: "0%" }} animate={{ width: "100%", transition: { duration: 0.5, delay: 1.75 } }} />
      </div>
      <ProjectCard containerRef={containerRef} filter={filter} />
    </section>
  );
};

const Page = () => {
  const t = useI18n();

  const { data } = useGetData();

  return (
    <main className={styles.main}>
      <section>
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1.75 } }}>
          {t("portfolio.h1")}
        </motion.h1>
        <motion.p className={workSans.className} initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1.75 } }}>
          {t("portfolio.p")}
        </motion.p>
      </section>

      <FilteredElement filter={filterByHtml(data)} text="html, css, js Vanillia" />
      <FilteredElement filter={filterByApi(data)} text="api, json" />
      <FilteredElement filter={filterByAdonis(data)} text="adonisjs, react, typescript" />
    </main>
  );
};

export default Page;
