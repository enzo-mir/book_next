import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "@pages/portfolio";
import About from "@pages/about";
const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Navigation;
