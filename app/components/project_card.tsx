import React, { ElementRef,useRef, useState } from "react";
import styles from "#styles/portfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import { handleDragStart } from "../services/distorsion";
import data from "../provider/data.json";

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
        return (
          <article key={project.id} className={styles.article}>
            <div>
              <h2 className="box">{project.title}</h2>
              <Link href={`/portfolio/${project.id}`}>Leanr more +</Link>
            </div>
            <Image width={300} height={200} objectFit="cover" alt="ok" src={project.img_url} />
          </article>
        );
      })}
    </div>
  );
};

export default ProjectCard;