"use client";
import React, { ElementRef, useRef } from "react";
import styles from "#styles/portfolio.module.css";
import ProjectCard from "#components/project_card";
import { filterByAdonis, filterByApi, filterByHtml } from "../services/filter_projects";

const Page = () => {
  const containerRef = useRef<ElementRef<"section">>(null);
  return (
    <main className={styles.main}>
      <section>
        <h1>Discover my projects</h1>
        <p>(Drag it !)</p>
      </section>
      <section className={styles.section} ref={containerRef}>
        <div>
          <h1>html, css, js Vanillia</h1>
          <hr />
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
