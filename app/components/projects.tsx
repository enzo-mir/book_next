import React, { useEffect, useState } from "react";
import style from "../style/projects.module.css";
import Image from "next/image";
import projects from "../data/data.json";
import { Suspense } from "react";
import { filter_store } from "../data/filter_store";
import FlipMove from "react-flip-move";

const Projects = () => {
  const [filter, setFilter] = filter_store((state) => [state.filter, state.setFilter]);

  function filterByDate() {
    const orderedData = projects.sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) {
        return filter.date === "old" ? 1 : -1;
      }
      if (new Date(a.date) > new Date(b.date)) {
        return filter.date === "old" ? -1 : 1;
      }
    });
    return orderedData;
  }

  function filteredData() {
    return filterByDate();
  }

  return (
    <FlipMove className={style.projectsContainer}>
      {filteredData().map((project) => {
        return (
          <article key={project.id} className={style.card}>
            <div className={style.headerCard}>
              <h1>{project.title}</h1>
              <Suspense fallback={<Image alt="loading" src="/image_loading.svg" priority width={100} height={100} />}>
                <Image alt={project.title} src={project.img_url} priority width={200} height={150} />
              </Suspense>
            </div>
            <div className={style.bottomCard}>
              <sub>{project.date}</sub>
              <p>{project.description}</p>
              <ul className={style.tags}>
                {project.tag.map((tag, index) => {
                  return <li key={index}>{tag}</li>;
                })}
              </ul>
              <div className={style.link}>
                <a href={project.git_url} target="_blank">
                  #github
                </a>
                <a href={project.webiste_url} target="_blank">
                  Visit webiste
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </FlipMove>
  );
};

export default Projects;
