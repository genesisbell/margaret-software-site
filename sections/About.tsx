/**
 * Created by genesisbell on 15/12/25
 */
import "./About.css";
import { getDictionary } from "@/lib/i18n";

export default function About() {

  const i18n = getDictionary("en_US");

  return (
    <section id="about">
      <h2>{ i18n.about.title }</h2>
      <p>{ i18n.about.description }</p>
    </section>
  );
}
