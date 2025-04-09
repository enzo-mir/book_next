import { createRoot } from "react-dom/client";
import "@css/globals.css";
import Navigation from "./navigation";
import { BrowserRouter } from "react-router-dom";
import Layout from "@pages/layout";
import "@services/i18n";
import Inner from "@components/inner";
import { Suspense } from "react";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Inner>
      <Suspense fallback={<></>}>
        <Layout>
          <Navigation />
        </Layout>
      </Suspense>
    </Inner>
  </BrowserRouter>,
);
