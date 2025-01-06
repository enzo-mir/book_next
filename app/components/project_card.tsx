import React, { ElementRef, useRef, useState } from "react";
import styles from "#styles/portfolio.module.css";
import Image from "next/image";
import { handleDragStart } from "../services/distorsion";

import { motion } from "framer-motion";
import { Work_Sans } from "next/font/google";
import { getTranslation } from "../services/translation";

const workSans = Work_Sans({ subsets: ["latin"], weight: "600" });
const t = getTranslation();

const ProjectCard = ({ containerRef, filter }: { containerRef: React.RefObject<ElementRef<"section">>; filter: typeof t.data }) => {
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
        return (
          <motion.article
            key={project.id}
            className={styles.article}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 2 } }}
          >
            <div>
              <h2 className={workSans.className}>{project.title}</h2>
              <a href={`/portfolio/${project.id}`}>{t.learn_more} +</a>
            </div>
            <Image fill objectFit="cover" alt="projects" src={project.img_url} fetchPriority="high" />
          </motion.article>
        );
      })}
    </div>
  );
};

export default ProjectCard;
