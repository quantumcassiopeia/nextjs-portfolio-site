import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import heroBanner from "@/public/static/images/hero-banner.svg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.paragraph}>
        <h1>Robert Souza</h1>

        <h3 className={styles.title}>Front-end developer</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quos,
          eius consectetur voluptatum possimus nobis in. Accusantium pariatur
          unde, doloremque dolores officiis non odit sint vitae voluptas!
          Nesciunt, praesentium totam.
        </p>
      </div>

      <Image
        src={heroBanner}
        alt="Computer image"
        height={500}
        width={500}
        className={styles.heroBanner}
      />
    </section>
  );
}
