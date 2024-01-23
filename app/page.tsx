"use client";
import Nav from "./components/nav";
import style from "./style/page.module.css";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className={style.main}>
      <Nav />
      <Projects />
    </main>
  );
}
