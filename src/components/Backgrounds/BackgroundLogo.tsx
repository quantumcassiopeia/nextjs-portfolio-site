import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface SectionProps {
  color: "primary" | "secondary";
  children: React.ReactNode;
}

const BackgroundLogo: React.FC<SectionProps> = ({ children, color }) => {
  return (
    <section className={styles.container}>
      <div className={`${styles.background} ${styles[color]}`}>
        <Image
          className={styles.logo}
          src="./logo/logo_circuits.png"
          alt="Logo Circuits"
          width={0}
          height={0}
        />
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default BackgroundLogo;
