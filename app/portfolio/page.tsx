"use client";
import React, { ElementRef, MouseEvent, MouseEventHandler, useRef } from "react";
import styles from "#styles/portfolio.module.css";
import ProjectCard from "#components/project_card";

const Page = () => {
  const containerRef = useRef<ElementRef<"section">>(null);
  return (
    <main className={styles.main}>
      <h1>Discover my projects</h1>
      <section className={styles.section} ref={containerRef}>
        <div>
          <h1>html, css, js Vanillia</h1>
          <hr />
        </div>

        <ProjectCard containerRef={containerRef} />
      </section>
      Bookmark landing page ok Job listings with filtering Bookmark landing page ok Job listings with filtering
    </main>
  );
};

export default Page;
