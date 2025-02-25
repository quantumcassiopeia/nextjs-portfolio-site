import styles from "./page.module.scss";
import BackgroundDev from "@/components/Backgrounds/BackgroundDev/BackgroundDev";

export default function Home() {
  return (
    <main>
      <BackgroundDev>
        <section className={styles.section1}>
          <h1 className="lineUp">hey there, I&#39;m Robert Souza</h1>

          <p className="fadeIn">
            Full stack developer with 5 years of experience in React,
            JavaScript, and Next.js. Proficient in multiple languages
            (TypeScript, HTML, CSS, C, C++, C#, Java, Python), Node.js for
            backend, SQL databases, Kotlin, and Android Jetpack Compose.
          </p>
        </section>
      </BackgroundDev>
    </main>
  );
}
