import { Routes, Route } from "react-router-dom";
import React from "react";
const Home = React.lazy(() => import("./pages/home"));
const Portfolio = React.lazy(() => import("./pages/portfolio"));
const About = React.lazy(() => import("./pages/about"));
const Project = React.lazy(() => import("./pages/project"));
const NotFound = React.lazy(() => import("./pages/not_found"));
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
