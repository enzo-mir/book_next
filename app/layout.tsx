"use client";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
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
        <title>Portfolio - @enzomrg</title>
        <meta name="description" content="portfolio enzo miraglio toulouse développeur front-end" />
      </head>
      <body data-page={mainPage}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
