/**
 * Created by genesisbell on 15/12/25
 */
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={ styles.section }>
      <h2>Contact</h2>
      <p>Let’s talk about your next project.</p>
      <a href="mailto:contact@margaretsoftware.com" className={ styles.email }>
        contact@margaretsoftware.com
      </a>
    </section>
  );
}
