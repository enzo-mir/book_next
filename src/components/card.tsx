import styles from "@css/card.module.css";
import { motion } from "motion/react";
import useGetData from "@provider/get_data";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Card = () => {
  const { data } = useGetData();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [shuffledArray] = useState(() => {
    const newArray = [...data];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray.slice(0, 4);
  });

  return shuffledArray.map((obj, index) => (
    <motion.li key={obj.id} className={styles.card_container}>
      <motion.article
        className={styles.card}
        initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
        animate={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
          transition: { delay: 0.25 + 0.3 * index, duration: 0.3 },
        }}
        onClick={() => navigate(`/portfolio/${obj.id}`)}
      >
        <img
          alt={"projects represented"}
          src={obj.img_url}
          fetchPriority="high"
        />

        <div>
          <p>{t("learn_more")} +</p>
        </div>
      </motion.article>
    </motion.li>
  ));
};

export default Card;
