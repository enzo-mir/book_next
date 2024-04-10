"use client";
import Image from "next/image";
import avatar from "./images/avatar_head.png";
import Card from "#components/card";
import data from "./provider/data.json";
import styles from "#styles/main.module.css";
import { motion } from "framer-motion";
export default function Home() {
  function shuffleArray() {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data.slice(0, 4);
  }
  const randomObject = shuffleArray();
  return (
    <main className={styles.main}>
      <section className={styles.header_section}>
        <h1>
          <motion.span initial={{ opacity: 0, translateX: "2%" }} animate={{ opacity: 1, translateX: "0%" }}>
            hi
          </motion.span>
          <motion.span initial={{ opacity: 0, translateX: "2%" }} animate={{ opacity: 1, translateX: "0%" }}>
            i&apos;m a front end web developer
          </motion.span>
        </h1>

        <aside>
          <Image width={200} height={200} priority src={avatar} alt={"head of enzo miraglio in memojy"} />
        </aside>
      </section>
      <section className={styles.bottom_section}>
        <div>
          <motion.hr initial={{ width: "0%" }} animate={{ width: "100%", transition: { duration: 0.5 } }} />
          <motion.p initial={{ y: -20, opacity: 0 }} animate={{ y: -0, opacity: 1, transition: { duration: 0.5 } }}>
            Let&apos;s discover my code !
          </motion.p>
        </div>
        <ul className={styles.galery}>
          {randomObject.map((obj, index) => {
            return (
              <motion.li key={obj.id} initial={{ y: -20, opacity: 0 }} animate={{ y: -0, opacity: 1 }}>
                <Card id={obj.id}>
                  <Image fill alt={"projects represented"} src={obj.img_url} />
                </Card>
              </motion.li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
