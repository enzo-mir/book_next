/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import style from "../style/book/projects.module.css";
import Image from "next/image";
import { Suspense } from "react";
import { filter_store } from "../data/filter_store";
import FlipMove from "react-flip-move";
import projects from "../data/data.json";
import { projectsType } from "../types/projectsType";
import { motion, stagger } from "framer-motion";

const Projects = () => {
  const [filter, setFilter] = filter_store((state) => [state.filter, state.setFilter]);

  function filterByDate(array: projectsType) {
    const orderedData: projectsType = array.sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) {
        return filter.date === "old" ? 1 : -1;
      }
      if (new Date(a.date) > new Date(b.date)) {
        return filter.date === "old" ? -1 : 1;
      }
      return 0;
    });
    return orderedData;
  }

  function filterByTags(array: projectsType) {
    if (filter.tags.length) {
      return array.filter((arr) => {
        const tagsFilter = filter.tags.length ? filter.tags.every((tag) => arr.tag.includes(tag)) : true;
        return tagsFilter;
      });
    } else {
      return array;
    }
  }

  function filterBytype(array: projectsType) {
    const orderedData = filter.type !== "all" ? array.filter((project) => (project.type === filter.type ? true : false)) : array;
    return orderedData;
  }
  function filterBySearch(searchValue: string) {
    return projects.filter((project) => project.title.toLowerCase().includes(searchValue.toLowerCase())) as projectsType;
  }

  function filteredData() {
    if (!filter.search) {
      return filterByDate(filterByTags(filterBytype(projects as projectsType)));
    } else {
      return filterByDate(filterBySearch(filter.search));
    }
  }

  return (
    <FlipMove className={style.projectsContainer}>
      {filteredData().length ? (
        filteredData().map((project) => {
          return (
            <article key={project.id} className={style.card}>
              <div className={style.headerCard}>
                <h1>{project.title}</h1>
                <Suspense fallback={<Image alt="loading" src="/image_loading.svg" priority fill />}>
                  <img alt={project.title} src={project.img_url} fetchPriority="high" width="300" height="150" loading="lazy" />
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
        })
      ) : (
        <p>No project corresponding to filter</p>
      )}
    </FlipMove>
  );
};

export default Projects;
