import styles from "@css/about.module.css";
import { motion } from "motion/react";
import type { timeline } from "@locales/en/translate.json";

const Timeline = ({ data }: { data: (typeof timeline)[0] }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      key={data.id}
      className={styles.article}
    >
      <img src={data.img} alt={data.title} width={60} height={60} />
      <aside>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </aside>
    </motion.article>
  );
};

export default Timeline;
