"use client";
import Image from "next/image";
import styles from "#styles/project.module.css";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Work_Sans } from "next/font/google";
import { motion } from "framer-motion";

import useGetData from "app/[locale]/provider/get_data";
const workSans = Work_Sans({ subsets: ["latin"], weight: "500" });

function PortfolioItem() {
  const id = Number.parseInt(useParams().id as string);

  const { data } = useGetData();
  const project = data[id];

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.img_section}>
          <span className={workSans.className}>{project.date}</span>
          <Image priority fill alt={project.title} src={project.img_url} />
        </motion.section>
        <section className={styles.tags_section}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2>Tags</h2>
            <hr />
          </motion.div>
          <ul>
            {project.tag.map((tag, id) => {
              return (
                <motion.li key={id} className={workSans.className} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: id * 0.2 } }}>
                  {tag}
                </motion.li>
              );
            })}
          </ul>
        </section>
      </article>
      <motion.aside initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className={styles.aside}>
        <section className={styles.header_section}>
          <h1>{project.title}</h1>
          <p className={workSans.className}>{project.description}</p>
        </section>
        <section className={styles.cta_section}>
          {project.git_url ? (
            <Link href={project.git_url} target="_blank" className={workSans.className}>
              See Github
            </Link>
          ) : (
            <p>Private repo</p>
          )}
          {project.webiste_url ? (
            <Link href={project.webiste_url} target="_blank" className={workSans.className}>
              Go to website
            </Link>
          ) : (
            <p>Private website</p>
          )}
        </section>
      </motion.aside>
    </main>
  );
}

export default PortfolioItem;
