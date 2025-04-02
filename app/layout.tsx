import type { Metadata } from "next";
import Nimpkish_font from "next/font/local";
import "./[locale]/globals.css";
import { ReactElement } from "react";
import Inner from "./[locale]/inner";

const Nimpkish = Nimpkish_font({ src: "./[locale]/fonts/ED_Nimpkish-Regular.otf" });
export const metadata: Metadata = {
  title: "Miraglio enzo",
  description: "Hi i'm a front end web developer, hire me out !",
  icons: "/favicon.ico",
  keywords: ["web", "developer", "frontend", "fullstack", "react", "nextjs", "Toulouse", "France"],
};

export default async function RootLayout({ children }: { params: Promise<{ locale: string }>; children: ReactElement }) {
  return (
    <html lang="fr" translate="no">
      <body className={Nimpkish.className + " o"}>
        <Inner>{children}</Inner>
      </body>
    </html>
  );
}
