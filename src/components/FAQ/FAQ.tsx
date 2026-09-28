import { useState } from "react";
import styles from "./FAQ.module.css";
import { useLocale } from "../../i18n/LocaleContext";

export default function FAQ() {
  const { dict } = useLocale();
  const t = dict.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.tag}>{t.tag}</p>
        <h2 className={styles.title}>{t.title}</h2>

        <ul className={styles.list}>
          {t.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={item.question} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {item.question}
                  <span className={styles.icon} data-open={isOpen}>
                    +
                  </span>
                </button>
                {/* Always in the DOM (just hidden when closed) so the answers
                    are in the prerendered HTML that FAQPage markup points at. */}
                <p id={`faq-answer-${i}`} className={styles.answer} hidden={!isOpen}>
                  {item.answer}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
