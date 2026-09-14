import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { usePageMeta } from "../hooks/usePageMeta";
import { useLocale } from "../i18n/LocaleContext";
import styles from "./Privacy.module.css";

export default function Privacy() {
  const { locale, dict } = useLocale();
  const t = dict.privacy;

  usePageMeta({
    title: dict.meta.privacy.title,
    description: dict.meta.privacy.description,
    path: "/privacy",
    locale,
  });

  return (
    <div>
      <Nav />
      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.updated}>
            {t.updatedLabel} {t.updatedDate}
          </p>
          <p className={styles.intro}>{t.intro}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{t.sections.localData.heading}</h2>
          <p className={styles.p}>{t.sections.localData.body}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{t.sections.storedData.heading}</h2>
          <p className={styles.p}>{t.sections.storedData.intro}</p>
          <ul className={styles.list}>
            {t.sections.storedData.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.p}>{t.sections.storedData.outro}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{t.sections.licenseActivation.heading}</h2>
          <p className={styles.p}>{t.sections.licenseActivation.body}</p>
          <p className={styles.p}>
            {t.sections.licenseActivation.linkIntro}{" "}
            <a
              href="https://dodopayments.com/legal/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              dodopayments.com/legal/privacy-policy
            </a>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{t.sections.whatWeDontDo.heading}</h2>
          <ul className={styles.list}>
            {t.sections.whatWeDontDo.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{t.sections.permissions.heading}</h2>
          <p className={styles.p}>{t.sections.permissions.intro}</p>
          <ul className={styles.list}>
            {t.sections.permissions.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>: {item.desc}
              </li>
            ))}
          </ul>
          <p className={styles.p}>{t.sections.permissions.outro}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{t.sections.changes.heading}</h2>
          <p className={styles.p}>{t.sections.changes.body}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{t.sections.contact.heading}</h2>
          <p className={styles.p}>
            {t.sections.contact.body}{" "}
            <a
              href="mailto:portfolioframe@portfolioframe.com"
              className={styles.link}
            >
              portfolioframe@portfolioframe.com
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
