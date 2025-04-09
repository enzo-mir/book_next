import styles from "@css/card.module.css";
import { motion } from "framer-motion";
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
    <motion.li
      key={obj.id}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: -0, opacity: 1, transition: { delay: 2 + index * 0.2 } }}
    >
      <motion.article
        className={styles.card}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: -0, opacity: 1, transition: { duration: 0.5 } }}
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
