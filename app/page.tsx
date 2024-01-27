"use client";
import { GoogleAnalytics } from "@next/third-parties/google";
import Book from "./components/book";
import { displayMainPage } from "./data/displayPage_store";
import Portfolio from "./components/portfolio";

export default function Home() {
  const mainPage = displayMainPage((state) => state.mainPage);
  return (
    <main>
      <GoogleAnalytics gaId="G-EL3FB4G0L0" />
      {mainPage === "book" ? <Book /> : <Portfolio />}
    </main>
  );
}
