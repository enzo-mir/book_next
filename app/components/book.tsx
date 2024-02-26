import React from "react";
import Nav from "./nav";
import Projects from "./projects";
import { motion } from "framer-motion";

const Book = () => {
  return (
    <motion.main initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }} exit={{ opacity: 0, y: -100 }}>
      <Nav />
      <Projects />
    </motion.main>
  );
};

export default Book;
