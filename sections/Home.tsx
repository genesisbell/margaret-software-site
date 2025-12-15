/**
 * Created by genesisbell on 15/12/25
 */
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section id="home" className={ styles.hero }>
      <h1>Building Reliable Software Solutions</h1>
      <p>
        We design and develop scalable, maintainable software that helps
        businesses grow with confidence.
      </p>
      <a href="#contact" className={ styles.cta }>Get in touch</a>
    </section>
  );
}
