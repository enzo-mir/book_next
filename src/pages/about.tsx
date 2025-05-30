import styles from "@css/about.module.css";
import Timeline from "@components/timeline";
import { motion } from "motion/react";
import useGetData from "../provider/get_data";
import { useTranslation } from "react-i18next";

const About = () => {
  const { timeline } = useGetData();
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.25 } }}
      >
        {t("discover")}
      </motion.h2>

      <section className={styles.timeline_section}>
        <motion.hr
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "100%", opacity: 1, transition: { delay: 0.25 } }}
        />
        <div>
          {timeline.map((data) => {
            return <Timeline data={data} key={data.id} />;
          })}
        </div>
        <aside></aside>
      </section>
    </main>
  );
};

export default About;
