"use client";
import { GoogleAnalytics } from "@next/third-parties/google";
import Book from "./components/book";

export default function Home() {
  return (
    <main>
      <GoogleAnalytics gaId="G-EL3FB4G0L0" />
      <Book />
    </main>
  );
}
