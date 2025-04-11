import { ReactNode, useEffect, useState } from "react";
import styles from "@css/inner.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Inner({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const pathName = pathname.split("/")[1];

  const isValidPage = [`portfolio`, ``, `about`].includes(pathName);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("o");
      setLoading(false);
    }, 1500);
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

  const Loading = () => {
    return (
      <motion.div
        initial={{ zIndex: 50 }}
        animate={{
          zIndex: -1,
          transition: { delay: 2 },
        }}
        exit={{ opacity: 0 }}
        className={styles.wrapper}
      >
        <motion.h1 initial={{ top: "50%", opacity: 1 }} animate={{ top: "40%", opacity: 0, transition: { delay: 1 } }}>{`${
          pathName.length ? "." + pathName.charAt(0).toUpperCase() + pathName.slice(1) : ".Me"
        }`}</motion.h1>
        {Array.from({ length: 28 }, (_, index) => (
          <motion.span
            initial={{ height: "100%", opacity: 1 }}
            animate={{
              height: "0%",
              transition: {
                duration: 0.4,
                delay: staggerTransition(index),
              },
            }}
            key={index}
          ></motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <>
      <AnimatePresence>{loading && isValidPage ? <Loading /> : null}</AnimatePresence>
      {!loading && children}
    </>
  );
}
