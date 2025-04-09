import styles from "@css/project.module.css";
import { motion } from "framer-motion";
import useGetData from "@provider/get_data";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import NotFound from "./not_found";

function Project() {
  const id = Number.parseInt(useParams().id as string);
  const { t } = useTranslation();

  const { data } = useGetData();
  const project = data.find((project) => project.id === id);

  if (!project) return <NotFound />;

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.img_section}
        >
          <span>{project.date}</span>
          <img
            fetchPriority="high"
            width={600}
            height={400}
            alt={project.title}
            src={project.img_url}
          />
        </motion.section>
        <section className={styles.tags_section}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2>Tags</h2>
            <hr />
          </motion.div>
          <ul>
            {project.tag.map((tag, id) => {
              return (
                <motion.li
                  key={id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: id * 0.2 } }}
                >
                  {tag}
                </motion.li>
              );
            })}
          </ul>
        </section>
      </article>
      <motion.aside
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={styles.aside}
      >
        <section className={styles.header_section}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </section>
        <section className={styles.cta_section}>
          {project.git_url ? (
            <a rel="noopener" href={project.git_url} target="_blank">
              {t("projects.repo.open")}
            </a>
          ) : (
            <p>{t("projects.repo.private")}</p>
          )}
          <a rel="noopener" href={project.webiste_url} target="_blank">
            {t("projects.website")}
          </a>
        </section>
      </motion.aside>
    </main>
  );
}

export default Project;
