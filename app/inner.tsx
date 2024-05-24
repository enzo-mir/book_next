"use client";
import React, { ReactNode } from "react";
import styles from "#styles/inner.module.css";
import { motion } from "framer-motion";
const Inner = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 50% 0)" }}
      animate={{ clipPath: "circle(150% at 50% 0)", transition: { duration: 0.5, ease: [0, -0.02, 1, 0.41] } }}
      exit={{ clipPath: "circle(0% at 50% 0)" }}
      className={styles.wrapper}
    >
      {children}
    </motion.div>
  );
};

export default Inner;
