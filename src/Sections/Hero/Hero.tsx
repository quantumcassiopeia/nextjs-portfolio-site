import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className="lineUp">hey there, I&#39;m Robert Souza</h1>
      <div className={`${styles.background} lineUp`}>Developer</div>

      <p className="fadeIn">
        Full stack developer with 5 years of experience in React, JavaScript,
        and Next.js. Proficient in multiple languages (TypeScript, HTML, CSS, C,
        C++, C#, Java, Python), Node.js for backend, SQL databases, Kotlin, and
        Android Jetpack Compose.
      </p>
    </section>
  );
}
