import React, { ElementRef, useRef, useState } from "react";
import styles from "#styles/portfolio.module.css";
import Image from "next/image";
import { handleDragStart } from "../services/distorsion";

import { motion, useInView } from "framer-motion";
import { Work_Sans } from "next/font/google";
import type { data } from "locales/data/en.json";
import { useI18n } from "locales/client";
import Link from "next/link";

const workSans = Work_Sans({ subsets: ["latin"], weight: "600" });
const Article = ({ project, id }: { project: (typeof data)[0]; id: number }) => {
  const t = useI18n();
  const ref = useRef<ElementRef<"article">>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.article
      className={styles.article}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 2 } }}
      ref={ref}
      data-visible={isInView}
    >
      <div>
        <h2 className={workSans.className}>{project.title}</h2>
        <Link href={`/portfolio/${id}`}>{t("learn_more")} +</Link>
      </div>
      <Image fill objectFit="cover" alt="projects" src={project.img_url} fetchPriority="high" />
    </motion.article>
  );
};

const ProjectCard = ({ containerRef, filter }: { containerRef: React.RefObject<ElementRef<"section">>; filter: typeof data }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [distortion, setDistortion] = useState(0);

  return (
    <div
      onMouseDown={(e) => handleDragStart(e, setPosition, position, setDistortion, sliderRef, containerRef)}
      ref={sliderRef}
      style={{
        transform: `translateX(${position}px) skewX(${distortion}deg)`,
      }}
    >
      {filter.map((project) => {
        return <Article key={project.id} id={project.id} project={project} />;
      })}
    </div>
  );
};

export default ProjectCard;
