import Image from "next/image";
import avatar from "./images/avatar_head.png";
import { Work_Sans } from "next/font/google";
import Card from "#components/card";
import data from "./provider/data.json";
import styles from "#styles/main.module.css";

const workSans = Work_Sans({ subsets: ["latin"], weight: "500" });
export default function Home() {
  function getRandomObject() {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data.slice(0, 4);
  }
  const randomObject = getRandomObject();

  return (
    <main className={styles.main}>
      <section className={styles.header_section}>
        <h1>
          hi <br />
          <strong>i&apos;m a front end web developer</strong>
        </h1>

        <aside>
          <Image width={200} height={200} priority src={avatar} alt={"head of enzo miraglio in memojy"} />
        </aside>
      </section>
      <section className={styles.bottom_section}>
        <div>
          <hr />
          <p className={workSans.className}>Let&apos;s discover my code !</p>
        </div>
        <ul className={styles.galery}>
          {randomObject.map((obj) => {
            return (
              <li key={obj.id}>
                <Card id={obj.id}>
                  <Image fill alt={"projects represented"} src={obj.img_url} />
                </Card>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
