/**
 * Created by genesisbell on 15/12/25
 */
import styles from "./Home.module.css";
import { getDictionary } from "@/lib/i18n";

export default function Home() {

  const i18n = getDictionary("en_US");

  return (
    <section id="home" className={ styles.hero }>
      <h1>{ i18n.home.title }</h1>
      <p>{ i18n.home.subtitle }</p>
      <a href="#contact" className={ styles.cta }>{ i18n.home.cta }</a>
    </section>
  );
}
