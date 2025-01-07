import React, { useEffect, useState } from "react";
import styles from "#styles/card.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import useGetData from "../provider/get_data";
import { useI18n } from "locales/client";

const Card = () => {
  const { data } = useGetData();
  const t = useI18n();
  const [shuffledData, setShuffledData] = useState<typeof data>([]);

  useEffect(() => {
    function shuffleArray(): typeof data {
      const newArray = [...data];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray.slice(0, 4);
    }

    setShuffledData(shuffleArray());
  }, [data]);

  return shuffledData.map((obj, index) => (
    <motion.li key={obj.id} initial={{ y: -20, opacity: 0 }} animate={{ y: -0, opacity: 1, transition: { delay: 2 + index * 0.2 } }}>
      <motion.article
        className={styles.card}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: -0, opacity: 1, transition: { duration: 0.5 } }}
        onClick={() => (window.location.href = `/portfolio/${obj.id}`)}
      >
        <Image fill alt={"projects represented"} src={obj.img_url} priority />

        <div>
          <p>{t("learn_more")} +</p>
        </div>
      </motion.article>
    </motion.li>
  ));
};

export default Card;
