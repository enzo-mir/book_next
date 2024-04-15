import React from "react";
import styles from "#styles/card.module.css";
import { motion } from "framer-motion";
const Card = ({
  id,
  children,
}: Readonly<{
  id: number;
  children: React.ReactNode;
}>) => {
  return (
    <motion.article className={styles.card} initial={{ y: -20, opacity: 0 }} animate={{ y: -0, opacity: 1, transition: { duration: 0.5 } }}>
      {children}
      <div>
        <a href={`/portfolio/${id}`}>Learn More +</a>
      </div>
    </motion.article>
  );
};

export default Card;
