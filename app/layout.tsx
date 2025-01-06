import type { Metadata } from "next";
import Nimpkish_font from "next/font/local";
import "./globals.css";
import Header from "#components/header";
import Footer from "#components/footer";
import Inner from "./inner";

const Nimpkish = Nimpkish_font({ src: "./fonts/ED_Nimpkish-Regular.otf" });
export const metadata: Metadata = {
  title: "Home page - Miraglio enzo",
  description: "hi i'm a front end web developer, hire me out !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Nimpkish.className + " o"} translate="no">
        <Header />
        <Inner>{children}</Inner>
        <Footer />
      </body>
    </html>
  );
}
