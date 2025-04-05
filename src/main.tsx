import { createRoot } from "react-dom/client";
import "@css/globals.css";
import Navigation from "./navigation";
import { BrowserRouter } from "react-router-dom";
import Layout from "@pages/layout";
import "@services/i18n";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Navigation />
    </Layout>
  </BrowserRouter>
);
