"use client";
import React, { ReactNode } from "react";
import styles from "#styles/inner.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
const Inner = ({ children }: { children: ReactNode }) => {
  var pathName = usePathname().replace("/", "");
  if (pathName.includes("/")) {
    pathName = `project : ${pathName.slice(pathName.indexOf("/") + 1)}`;
  }

  const staggerTransition = (index: number) => {
    switch (index % 7) {
      case 0:
      case 6:
        return 0.7;
      case 1:
      case 5:
        return 0.8;
      case 2:
      case 4:
        return 0.9;
      case 3:
        return 1;
      default:
        break;
    }
  };
  return (
    <AnimatePresence>
      <motion.div initial={{ zIndex: 50 }} animate={{ zIndex: -1, transition: { delay: 1.5 } }} exit={{ zIndex: 50 }} className={styles.wrapper}>
        <motion.h1 initial={{ top: "50%", visibility: "visible" }} animate={{ top: "40%", visibility: "hidden", transition: { delay: 1 } }}>{`${
          pathName.length ? "." + pathName.charAt(0).toUpperCase() + pathName.slice(1) : ".Me"
        }`}</motion.h1>
        {Array.from({ length: 28 }, (_, index) => (
          <motion.span
            initial={{ height: "100%", opacity: 1 }}
            animate={{ height: "0%", opacity: 0, transition: { duration: 0.3, delay: staggerTransition(index) } }}
            exit={{ height: "100%", opacity: 1 }}
            key={index}
          ></motion.span>
        ))}
      </motion.div>
      {children}
    </AnimatePresence>
  );
};

export default Inner;
