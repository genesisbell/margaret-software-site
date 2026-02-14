import "./privacy-policy.css";
import { getDictionary } from "@/lib/i18n";

export default function PrivacyPolicy() {
  const i18n = getDictionary("en_US");
  const { title, lastUpdated, intro, sections } = i18n.privacy;

  return (
    <div className="privacy-policy">
      <h1>{title}</h1>
      <p className="last-updated">Last updated: {lastUpdated}</p>
      <p className="intro">{intro}</p>

      {sections.map((section, index) => (
        <div key={index} className="section">
          <h2>{section.heading}</h2>
          <p>{section.content}</p>

          {"items" in section && (
            <ul>
              {section.items?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {"email" in section && (
            <a href={`mailto:${section.email}`}>{section.email}</a>
          )}
        </div>
      ))}

      <a href="/" className="back-link">&larr; Back to home</a>
    </div>
  );
}
