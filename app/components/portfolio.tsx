import Image from "next/image";
import React, { useRef } from "react";
import styles from "../style/portfolio/portfolio.module.css";
import { RxCross2 } from "react-icons/rx";
import { LazyMotion, animate, inView, motion, useInView } from "framer-motion";
import { log } from "console";

const Portfolio = () => {
  function SkillsComponents() {
    const skillsAssets = [
      {
        id: 0,
        title: "Front-end",
        tags: ["#React", "#NextJs", "#TypeScript", "#Tailwind", "#Zustand", "#Styled-components"],
        image: "/react_frontend.webp",
        alt: "react logo in galaxy",
      },
      {
        id: 1,
        title: "Back-end",
        tags: ["#AdonisJs", "#Inertia", "#Zod", "#NodeJs", "#Fastify"],
        image: "/adonis_backend.webp",
        alt: "adonis logo curved",
      },
      {
        id: 2,
        title: "Others",
        tags: ["#Figma", "#Github", "#VsCode"],
        image: "/figma_others.jpg",
        alt: "figma logo",
      },
    ];

    return skillsAssets.map((skills) => {
      return (
        <motion.article
          key={skills.id}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * skills.id } }}
        >
          <h2>{skills.title}</h2>
          <ul>
            {skills.tags.map((tag, index) => {
              return <li key={index}>{tag}</li>;
            })}
          </ul>
          <div>
            <Image src={skills.image} alt={skills.alt} width={600} height={300} priority />
          </div>
        </motion.article>
      );
    });
  }

  function changeAccordionActive(target: HTMLElement) {
    const currentAttribute = target.parentElement?.dataset.active;
    target.parentElement!.dataset.active = currentAttribute === "true" ? "false" : "true";
  }

  return (
    <>
      <section className={styles.secctionHeader}>
        <h1>Hi there !</h1>
        <p>
          I&apos;m Enzo Miraglio
          <br />
          <strong>developer</strong> based in France
        </p>
      </section>
      <section className={styles.sectionSkills}>
        <div className={styles.headSkills}>
          <h1>skills</h1>
          <motion.hr initial={{ width: 0 }} animate={{ width: "100%", transition: { duration: 0.5 } }} />
        </div>
        <SkillsComponents />
      </section>
      <section className={styles.sectionFaq}>
        <div className={styles.headSkills}>
          <h1>FAQ&apos;s</h1>
          <hr />
        </div>
        <div>
          <article data-active="true">
            <h2>What’s my experience ?</h2>
            <button onClick={(e) => changeAccordionActive(e.currentTarget as HTMLElement)}>
              <RxCross2 />
            </button>
            <div className={styles.bottomFaq}>
              <p>
                I have actually 3 years of personnal experience in web development, 1 year with react and I recently adopted the Back-end development
              </p>
            </div>
          </article>
          <article data-active="false">
            <h2>What to expect of me ?</h2>
            <button onClick={(e) => changeAccordionActive(e.currentTarget as HTMLElement)}>
              <RxCross2 />
            </button>
            <div className={styles.bottomFaq}>
              <p>I am a Front-end developer which try to have knowledge in back development and design</p>
            </div>
          </article>
          <article data-active="false">
            <h2>How many times do I spend by projects ? </h2>
            <button onClick={(e) => changeAccordionActive(e.currentTarget as HTMLElement)}>
              <RxCross2 />
            </button>
            <div className={styles.bottomFaq}>
              <p>
                This is relative to the difficulty of the project, for an integration of design as landing page, SPA, this will be between 3 and 6
                hours (hosted inclued) else for a full stack application this will be longer.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className={styles.sectionFooter}>
        <h1>Want a dev ?</h1>
        <button onClick={() => (window.location.href = "mailto:miraglioenzo93@gmail.com")}>Contact me !</button>
      </section>
    </>
  );
};

export default Portfolio;
