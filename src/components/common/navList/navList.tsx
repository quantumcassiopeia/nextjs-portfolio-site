import { useState } from "react";
import styles from "./styles.module.scss";

export default function NavList() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <span
        onClick={handleClick}
        className={`${styles.menuToggle} ${isOpen ? styles.active : ""}`}
      ></span>

      <ul className={`${styles.list} ${isOpen ? styles.active : ""}`}>
        <li className={styles["active-line"]}>
          <a href="#">Home</a>
        </li>
        <li className={styles["active-line"]}>
          <a href="#">About me</a>
        </li>
        <li className={styles["active-line"]}>
          <a href="#">Projects</a>
        </li>
      </ul>
    </div>
  );
}
