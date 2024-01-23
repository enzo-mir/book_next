import React from "react";
import style from "../style/projects.module.css";
import Image from "next/image";
import datas from "../data/data.json";
import { Suspense } from "react";

const Projects = () => {
  return (
    <div className={style.projectsContainer}>
      {datas.map((data) => {
        return (
          <article key={data.id} className={style.card}>
            <div className={style.headerCard}>
              <h1>{data.title}</h1>
              <Suspense fallback={<Image alt="loading" src="/image_loading.svg" priority width={100} height={100} />}>
                <Image alt={data.title} src={data.img_url} priority width={200} height={150} />
              </Suspense>
            </div>
            <div className={style.bottomCard}>
              <sub>{data.date}</sub>
              <p>{data.description}</p>
              <ul className={style.tags}>
                {data.tag.map((tag, index) => {
                  return <li key={index}>{tag}</li>;
                })}
              </ul>
              <div className={style.link}>
                <a href={data.git_url} target="_blank">
                  #github
                </a>
                <a href={data.webiste_url} target="_blank">
                  Visit webiste
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Projects;
