import Nav from "./components/nav";
import data from "./data/data.json";
import style from "./style/page.module.css";

export default function Home() {

  return (
    <main className={style.main}>
      <Nav />
    </main>
  );
}
