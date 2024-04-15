"use client";
import Image from "next/image";
import styles from "#styles/project.module.css";
import data from "../../provider/data.json";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"], weight: "500" });
function PortfolioItem() {
  const id = Number.parseInt(useParams().id as string);
  const project = data[id];

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <section className={styles.img_section}>
          <span className={workSans.className}>{project.date}</span>
          <Image fill alt="" src={project.img_url} />
        </section>
        <section className={styles.tags_section}>
          <div>
            <h2>Tags</h2>
            <hr />
          </div>
          <ul>
            {project.tag.map((tag, id) => {
              return <li key={id} className={workSans.className}>{tag}</li>;
            })}
          </ul>
        </section>
      </article>
      <aside className={styles.aside}>
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
      </aside>
    </main>
  );
}

export default PortfolioItem;
