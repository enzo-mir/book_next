import styles from "./page.module.css";
import data from "./data/data.json";

export default function Home() {
  console.log(data);

  return <main className={styles.main}>main</main>;
}
