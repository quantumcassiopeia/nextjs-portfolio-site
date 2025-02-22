import Hero from "@/Sections/Hero/Hero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
    </main>
  );
}
