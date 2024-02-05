"use client";
import Book from "./components/book";
import { displayMainPage } from "./data/displayPage_store";
import Portfolio from "./components/portfolio";

export default function Home() {
  const mainPage = displayMainPage((state) => state.mainPage);
  return <main>{mainPage === "book" ? <Book /> : <Portfolio />}</main>;
}
