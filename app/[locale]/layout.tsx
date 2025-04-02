import "./globals.css";
import Header from "#components/header";
import Footer from "#components/footer";
import Inner from "./inner";
import { ReactElement } from "react";
import { I18nProviderClient } from "../../locales/client";

export default async function RootLayout({ params, children }: { params: Promise<{ locale: string }>; children: ReactElement }) {
  const { locale } = await params;

  return (
    <I18nProviderClient locale={locale}>
      <Header />
      <Inner>{children}</Inner>
      <Footer />
    </I18nProviderClient>
  );
}
