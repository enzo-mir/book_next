import React, { ElementRef, MouseEvent, Ref, useRef, useState } from "react";
import styles from "#styles/portfolio.module.css";
import Image from "next/image";
import data from "../provider/data.json";

const ProjectCard = ({ containerRef }: { containerRef: React.RefObject<ElementRef<"section">> }) => {
  const filterByHtml = () => data.filter((project) => (project.tag.includes("Html" && "Css" && "Js") && !project.tag.includes("Api") ? true : false));
  const sliderRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [distortion, setDistortion] = useState(0);

  const handleDragStart = (event: MouseEvent) => {
    event.preventDefault();
    const maxDrag = -(sliderRef.current!.offsetWidth - containerRef.current!.offsetWidth);
    const startX = event.clientX;
    const startLeft = position;

    const handleDragMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      if (startLeft + deltaX < maxDrag) {
        setPosition(maxDrag);
        setDistortion(0);
      } else {
        if (startLeft + deltaX > 0) {
          setPosition(0);
          setDistortion(0);
        } else {
          setPosition(startLeft + deltaX);
          if (deltaX / 10 < -20 || deltaX / 10 > 20) {
            setDistortion(30);
          } else {
            setDistortion(deltaX / 10);
          }
        }
      }
    };

    const handleDragEnd = () => {
      setDistortion(0);
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
    };

    document.addEventListener("mousemove", handleDragMove);
    document.addEventListener("mouseup", handleDragEnd);
  };

  return (
    <div
      onMouseDown={handleDragStart}
      ref={sliderRef}
      style={{
        transform: `translateX(${position}px) skewX(${distortion}deg)`,
      }}
    >
      {filterByHtml().map((project) => {
        return (
          <article key={project.id} className={styles.article}>
            <h2 className="box">{project.title}</h2>
            <Image width={300} height={200} objectFit="cover" alt="ok" src={project.img_url} />
          </article>
        );
      })}
  
    </div>
  );
};

export default ProjectCard;
