import { ComponentRef, RefObject, useRef, useState } from "react";
import styles from "@css/portfolio.module.css";
import { handleDragStart } from "@services/distorsion";
import { motion, useInView } from "framer-motion";
import type { data } from "@locales/en/translate.json";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Article = ({
  project,
  id,
}: {
  project: (typeof data)[0];
  id: number;
}) => {
  const { t } = useTranslation();
  const ref = useRef<ComponentRef<"article">>(null);
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
        <h2>{project.title}</h2>
        <Link to={`/portfolio/${id}`}>{t("learn_more")} +</Link>
      </div>
      <img alt="projects" src={project.img_url} fetchPriority="high" />
    </motion.article>
  );
};

const ProjectCard = ({
  containerRef,
  filter,
}: {
  containerRef: RefObject<HTMLElement | null>;
  filter: typeof data;
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [distortion, setDistortion] = useState(0);

  return (
    <div
      onMouseDown={(e) =>
        handleDragStart(
          e,
          setPosition,
          position,
          setDistortion,
          sliderRef,
          containerRef,
        )
      }
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
