/**
 * Created by genesisbell on 15/12/25
 */
import styles from "./About.module.css";
import { getDictionary } from "@/lib/i18n";

export default function About() {

  const i18n = getDictionary("en_US");

  return (
    <section id="about" className={ styles.section }>
      <h2>{ i18n.about.title }</h2>
      <p>{ i18n.about.description }</p>
    </section>
  );
}
