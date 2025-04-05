import styles from "@css/not_found.module.css";

const NotFound = () => {
  return (
    <main className={styles.main}>
      <h1>This page could not be found</h1>
      <a href="/">Go back home</a>
    </main>
  );
};

export default NotFound;
