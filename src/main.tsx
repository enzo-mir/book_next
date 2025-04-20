import { createRoot } from "react-dom/client";
import "@css/globals.css";
import Navigation from "./navigation";
import { BrowserRouter } from "react-router-dom";
import "@services/i18n";
import Inner from "@components/inner";
import Header from "@components/header";
import Footer from "@components/footer";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Navigation />
    <Footer />
  </BrowserRouter>
);
