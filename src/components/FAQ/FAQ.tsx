import { useState } from "react";
import styles from "./FAQ.module.css";
import { useLocale } from "../../i18n/LocaleContext";

export default function FAQ() {
  const { dict } = useLocale();
  const t = dict.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className={styles.section}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {item.question}
                  <span className={styles.icon} data-open={isOpen}>
                    +
                  </span>
                </button>
                {isOpen && <p className={styles.answer}>{item.answer}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
