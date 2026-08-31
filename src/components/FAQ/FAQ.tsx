import { useState } from "react";
import styles from "./FAQ.module.css";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQS: FAQItem[] = [
  {
    question: "Is my code or screenshots ever uploaded anywhere?",
    answer:
      "No. Portfolio Frame runs entirely in your browser. Snippets, canvas history, and settings are saved locally using your browser's local storage and IndexedDB. Nothing is sent to a server, and there's no account to create.",
  },
  {
    question: "What's the difference between Free and Pro?",
    answer:
      "Free covers the core editor: dual image and code modes, a few syntax themes, standard device frames, and basic annotations. Pro adds the full theme and device library, glassmorphism and 3D tilt, stickers, the redact tool, custom watermarking, batch export of every aspect ratio as a zip, and SVG export.",
  },
  {
    question: "How do I get my Pro license key after I pay?",
    answer:
      "Checkout is handled by Dodo Payments. As soon as your payment goes through, your license key is generated automatically and emailed to you. Paste it into the extension's license screen to unlock Pro.",
  },
  {
    question: "Can I use my license on more than one device?",
    answer:
      "Yes. Your license isn't limited to a single device or browser profile, so you can activate it wherever you use Portfolio Frame.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "If you have a valid Pro license key, you're eligible for a full refund within 7 days of purchase, no questions asked. Reach out with the email you purchased with and I'll take care of it.",
  },
  {
    question: "Will future updates cost extra?",
    answer:
      "No. Your one-time purchase includes free updates and improvements to all current Pro features.",
  },
  {
    question: "Do you support payments from India, including UPI?",
    answer:
      "Yes. Checkout supports UPI alongside cards and other regional payment methods, and pricing automatically adjusts based on purchasing power parity, so you're charged a fair local price.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
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
        <p className={styles.tag}>FAQ</p>
        <h2 className={styles.title}>Questions, answered</h2>

        <ul className={styles.list}>
          {FAQS.map((item, i) => {
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
