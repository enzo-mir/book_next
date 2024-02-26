"use client";
import Book from "./components/book";
import { displayMainPage } from "./data/displayPage_store";
import Portfolio from "./components/portfolio";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const mainPage = displayMainPage((state) => state.mainPage);
  return (
    <>
      {mainPage === "book" ? (
        <AnimatePresence>
          <Book />
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <Portfolio />
        </AnimatePresence>
      )}
    </>
  );
}
