/**
 * Created by genesisbell on 15/12/25
 */
import "./Contact.css";
import { getDictionary } from "@/lib/i18n";

export default function Contact() {

  const i18n = getDictionary("en_US");

  return (
    <section id="contact">
      <h2>{ i18n.contact.title }</h2>
      <p>{ i18n.contact.subtitle }</p>
      <a href="mailto:contact@margaretsoftware.com" className="email">
        contact@margaretsoftware.com
      </a>
    </section>
  );
}
