/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../style/book/projects.module.css";
import { filter_store } from "../data/filter_store";
import projects from "../data/data.json";
import { projectsType } from "../types/projectsType";
const Projects = () => {
  const filter = filter_store((state) => state.filter);

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
  const calculateColumns = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1200) {
      return 5;
    } else if (screenWidth > 900) {
      return 4;
    } else if (screenWidth > 600) {
      return 3;
    } else {
      return 2;
    }
  };

  const columnsData = Array.from({ length: calculateColumns() }, (_, i) => {
    const itemsPerColumn = Math.ceil(filteredData().length / calculateColumns());
    return filteredData().slice(i * itemsPerColumn, (i + 1) * itemsPerColumn);
  });

  return (
    <div className={style.projectsContainer}>
      {filteredData().length ? (
        columnsData.map((col, i) => {
          return (
            <ul key={i} className={style.ul_card}>
              {col.map((project, index) => {
                return (
                  <li key={index}>
                    <article className={style.card}>
                      <div className={style.headerCard}>
                        <h1>{project.title}</h1>
                        <img alt={project.title} src={project.img_url} property="high" width="300" height="150" />
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
                  </li>
                );
              })}
            </ul>
          );
        })
      ) : (
        <p>No project corresponding to filter</p>
      )}
    </div>
  );
};

export default Projects;
