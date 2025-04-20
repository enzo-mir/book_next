import { ComponentRef, useRef } from "react";
import styles from "@css/portfolio.module.css";
import ProjectCard from "@components/project_card";
import { filterByAdonis, filterByApi, filterByHtml } from "@services/filter_projects";
import { motion } from "framer-motion";
import type { data } from "@locales/en/translate.json";
import useGetData from "@provider/get_data";
import { useTranslation } from "react-i18next";

const FilteredElement = ({ filter, text }: { filter: typeof data; text: string }) => {
  const containerRef = useRef<ComponentRef<"section">>(null);
  return (
    <section className={styles.section} ref={containerRef}>
      <div>
        <motion.h3 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.75 } }}>
          {text}
        </motion.h3>
        <motion.hr
          initial={{ width: "0%" }}
          animate={{
            width: "100%",
            transition: { duration: 0.5, delay: 0.75 },
          }}
        />
      </div>
      <ProjectCard containerRef={containerRef} filter={filter} />
    </section>
  );
};

const Portfolio = () => {
  const { t } = useTranslation();
  const { data } = useGetData();

  return (
    <main className={styles.main}>
      <section>
        <motion.h2
          initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
          animate={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
            transition: { delay: 0.25, duration: 0.2 },
          }}
        >
          {t("portfolio.h1")}
        </motion.h2>
        <motion.p
          initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
          animate={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
            transition: { delay: 0.25, duration: 0.2 },
          }}
        >
          {t("portfolio.p")}
        </motion.p>
      </section>

      <FilteredElement filter={filterByHtml(data)} text="html, css, js Vanillia" />
      <FilteredElement filter={filterByApi(data)} text="api, json" />
      <FilteredElement filter={filterByAdonis(data)} text="adonisjs, react, typescript" />
    </main>
  );
};

export default Portfolio;
