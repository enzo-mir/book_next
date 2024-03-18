import React from "react";
import styles from "#styles/portfolio.module.css";
import Image from "next/image";
import type data from "../provider/data.json";

const ProjectCard = ({ project }: { project: typeof data[0] }) => {
  return (
    <article key={project.id} className={styles.article}>
      <h2>{project.title}</h2>
      <Image width={300} height={200} objectFit="cover" alt="ok" src={project.img_url} />
    </article>
  );
};

export default ProjectCard;
