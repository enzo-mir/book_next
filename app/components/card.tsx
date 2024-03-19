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
      <div>
        <a href={`/portfolio/${id}`}>Learn More +</a>
      </div>
    </article>
  );
};

export default Card;
