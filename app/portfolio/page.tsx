"use client";
import React from "react";
import styles from "#styles/portfolio.module.css";
import data from "../provider/data.json";
import ProjectCard from "#components/project_card";

const Page = () => {
  const filterByHtml = () => data.filter((project) => (project.tag.includes("Html" && "Css" && "Js") && !project.tag.includes("Api") ? true : false));

  return (
    <main className={styles.main}>
      <h1>Discover my projects</h1>
      <section className={styles.section}>
        <div>
          <h1>html, css, js (Vanillia)</h1>
          <hr />
        </div>

        <div>
          {filterByHtml().map((project) => {
            return <ProjectCard project={project} key={project.id} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Page;
