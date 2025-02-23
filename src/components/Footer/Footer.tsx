import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={`${styles.footer} line-grow`}>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Quantum Cassiopeia
      </p>
      <p className={styles.creator}>Created and developed by Robert Souza</p>
    </footer>
  );
}
