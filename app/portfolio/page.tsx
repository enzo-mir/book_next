"use client";
import React, { ElementRef, useRef } from "react";
import styles from "#styles/portfolio.module.css";
import ProjectCard from "#components/project_card";
import { filterByAdonis, filterByApi, filterByHtml } from "../services/filter_projects";
import { motion } from "framer-motion";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"], weight: "600" });
const Page = () => {
  const containerRef = useRef<ElementRef<"section">>(null);
  return (
    <main className={styles.main}>
      <section>
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          Discover my projects
        </motion.h1>
        <motion.p className={workSans.className} initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          Drag it !
        </motion.p>
      </section>
      <section className={styles.section} ref={containerRef}>
        <div>
          <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            html, css, js Vanillia
          </motion.h1>
          <motion.hr initial={{ width: "0%" }} animate={{ width: "100%", transition: { duration: 0.5 } }} />
        </div>
        <ProjectCard containerRef={containerRef} filter={filterByHtml} />
      </section>
      <section className={styles.section} ref={containerRef}>
        <div>
          <h1>api, json</h1>
          <hr />
        </div>
        <ProjectCard containerRef={containerRef} filter={filterByApi} />
      </section>

      <section className={styles.section} ref={containerRef}>
        <div>
          <h1>adonisjs, react, typescript</h1>
          <hr />
        </div>
        <ProjectCard containerRef={containerRef} filter={filterByAdonis} />
      </section>
    </main>
  );
};

export default Page;
