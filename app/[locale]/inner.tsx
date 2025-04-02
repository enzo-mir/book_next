"use client";
import React, { ReactNode, useEffect } from "react";
import styles from "#styles/inner.module.css";
import { motion } from "framer-motion";
import { useParams, usePathname } from "next/navigation";

export default function Inner({ children }: { children: ReactNode }) {
  const { locale } = useParams() as { locale: "en" | "fr" };

  var pathName = usePathname().replace(`/${locale}`, "").replace("/", "");

  const isValidPage = [`portfolio`, ``, `about`].includes(pathName);

  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("o");
    }, 1300);
  });

  const staggerTransition = (index: number) => {
    switch (index % 7) {
      case 0:
      case 6:
        return 1;
      case 1:
      case 5:
        return 1.1;
      case 2:
      case 4:
        return 1.2;
      case 3:
        return 1.3;
      default:
        break;
    }
  };
  return (
    <>
      {isValidPage ? (
        <motion.div initial={{ zIndex: 50 }} animate={{ zIndex: -1, transition: { delay: 2 } }} exit={{ zIndex: 50 }} className={styles.wrapper}>
          <motion.h1 initial={{ top: "50%", opacity: 1 }} animate={{ top: "40%", opacity: 0, transition: { delay: 1 } }}>{`${
            pathName.length ? "." + pathName.charAt(0).toUpperCase() + pathName.slice(1) : ".Me"
          }`}</motion.h1>
          {Array.from({ length: 28 }, (_, index) => (
            <motion.span
              initial={{ height: "100%", opacity: 1 }}
              animate={{ height: "0%", transition: { duration: 0.4, delay: staggerTransition(index) } }}
              exit={{ height: "100%", opacity: 1 }}
              key={index}
            ></motion.span>
          ))}
        </motion.div>
      ) : null}

      {children}
    </>
  );
}
