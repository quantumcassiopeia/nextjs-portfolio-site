import styles from "./styles.module.scss";

function getYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {getYear()} | All rights reserved </span>
    </footer>
  );
}
