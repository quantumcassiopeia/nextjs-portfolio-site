"use client";

import Footer from "../components/footer/footer";
import NavBar from "../components/common/navBar/navBar";
import Hero from "../components/Hero/hero";
import Projects from "../components/projects/projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
