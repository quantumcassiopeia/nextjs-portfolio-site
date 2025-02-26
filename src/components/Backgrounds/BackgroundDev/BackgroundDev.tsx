import React from "react";
import styles from "./styles.module.scss";

interface SectionProps {
  children: React.ReactNode;
}

const BackgroundDev: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.background}>
        <p className={`${styles.text} lineUp`}>Developer</p>
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default BackgroundDev;
