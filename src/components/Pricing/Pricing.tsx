import styles from "./Pricing.module.css";
import { useLocale } from "../../i18n/LocaleContext";

export default function Pricing() {
  const { dict } = useLocale();
  const t = dict.pricing;

  const handleProCheckout = () => {
    window.location.href =
      "https://checkout.dodopayments.com/buy/pdt_0NmQH2p48Kq2fePwLLuKX?quantity=1";
  };

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.tag}>{t.tag}</p>
        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.description}>{t.description}</p>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>{t.free.title}</h3>
          <p className={styles.cardPrice}>{t.free.price}</p>
          <p className={styles.cardCaption}>{t.free.caption}</p>
          <ul className={styles.list}>
            {t.free.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <a
            href="https://chromewebstore.google.com/detail/kgpdfalcolcdidglbdnfnelgihlocmkf?utm_source=item-share-cb"
            target="_blank"
            rel="noreferrer"
            className={styles.ctaGhost}
          >
            {t.free.cta}
          </a>
        </div>

        <div className={`${styles.card} ${styles.cardPro}`}>
          <span className={styles.proTag}>{t.pro.badge}</span>
          <h3 className={styles.cardTitle}>{t.pro.title}</h3>
          <p className={styles.cardPrice}>{t.pro.price}</p>
          <p className={styles.cardPrice}>{t.pro.billing}</p>
          <p className={styles.cardCaption}>{t.pro.caption}</p>
          <ul className={styles.list}>
            {t.pro.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <div className={styles.licenseBox}>
            <span className={styles.licenseDot} />
            <span className={styles.licensePlaceholder}>
              {t.pro.licensePlaceholder}
            </span>
            <span className={styles.licenseVerified}>{t.pro.licenseVerified}</span>
          </div>

          <button
            type="button"
            className={styles.ctaSolid}
            onClick={handleProCheckout}
          >
            {t.pro.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
