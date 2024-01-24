"use client";
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { displayMainPage } from "./data/displayPage_store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mainPage = displayMainPage((state) => state.mainPage);
  return (
    <html lang="en">
      <head>
        <title>Portfolio Book - @enzmrg</title>
        <meta name="description" content="portfolio" />
      </head>
      <body data-page={mainPage}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-EL3FB4G0L0" />
    </html>
  );
}
