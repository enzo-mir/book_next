import React from "react";
import styles from "#styles/card.module.css";

const Card = ({
  id,
  children,
}: Readonly<{
  id: number;
  children: React.ReactNode;
}>) => {
  return (
    <article className={styles.card}>
      {children}
      <a href={`/portfolio/${id}`}>Learn More +</a>
    </article>
  );
};

export default Card;
