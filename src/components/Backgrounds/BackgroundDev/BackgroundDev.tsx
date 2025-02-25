import React from "react";
import styles from "./styles.module.scss";

interface SectionProps {
  children: React.ReactNode;
}

const BackgroundDev: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className={styles.background}>
      <p className={`${styles.text} lineUp`}>Developer</p>

      <div className={`${styles.content} maxWidth`}>{children}</div>
    </section>
  );
};

export default BackgroundDev;
