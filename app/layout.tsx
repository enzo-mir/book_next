import type { Metadata } from "next";
import Nimpkish_font from "next/font/local";
import "./[locale]/globals.css";
import Header from "#components/header";
import Footer from "#components/footer";
import { ReactElement } from "react";
import Inner from "./[locale]/inner";
import { I18nProviderClient } from "locales/client";

const Nimpkish = Nimpkish_font({ src: "./[locale]/fonts/ED_Nimpkish-Regular.otf" });
export const metadata: Metadata = {
  title: "Home page - Miraglio enzo",
  description: "hi i'm a front end web developer, hire me out !",
};

export default async function RootLayout({ params, children }: { params: Promise<{ locale: string }>; children: ReactElement }) {
  const { locale } = await params;

  return (
    <html lang="en">
      <body className={Nimpkish.className + " o"} translate="no">
          <Inner>{children}</Inner>
      </body>
    </html>
  );
}
