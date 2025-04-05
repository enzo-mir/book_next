import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "@pages/portfolio";
import About from "@pages/about";
import Project from "@pages/project";
import NotFound from "@pages/not_found";
const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio/:id" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
