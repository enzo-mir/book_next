import React from "react";
import styles from "#styles/card.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const Card = ({
  id,
  children,
}: Readonly<{
  id: number;
  children: React.ReactNode;
}>) => {
  const router = useRouter();

  return (
    <motion.article
      className={styles.card}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: -0, opacity: 1, transition: { duration: 0.5 } }}
      onClick={() => (window.location.href = `/portfolio/${id}`)}
    >
      {children}
      <div>
        <p>Learn More +</p>
      </div>
    </motion.article>
  );
};

export default Card;
