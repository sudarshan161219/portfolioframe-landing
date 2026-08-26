import { DodoPayments } from "dodopayments-checkout";
import styles from "./Pricing.module.css";

async function handleProCheckout() {
  try {
    const res = await fetch("/api/create-checkout", { method: "POST" });
    const data = await res.json();
    if (data.checkoutUrl) {
      DodoPayments.Checkout.open({ checkoutUrl: data.checkoutUrl });
    } else {
      console.error("No checkout URL returned", data);
    }
  } catch (err) {
    console.error("Could not start checkout", err);
  }
}

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.tag}>Pricing</p>
        <h2 className={styles.title}>Pay once. Keep the darkroom.</h2>
        <p className={styles.description}>
          Frame is free to install and use. Pro unlocks the full material set, a
          single purchase, verified with a license key, no recurring charge.
        </p>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Free</h3>
          <p className={styles.cardPrice}>$0</p>
          <p className={styles.cardCaption}>
            Everything you need to ship a clean shot
          </p>
          <ul className={styles.list}>
            <li>Dual editor: images and code</li>
            <li>Core syntax themes and window styles</li>
            <li>Standard device and browser frames</li>
            <li>Text, box, and arrow annotations</li>
            <li>Local storage, no account</li>
          </ul>
          <a href="#top" className={styles.ctaGhost}>
            Add to Chrome
          </a>
        </div>

        <div className={`${styles.card} ${styles.cardPro}`}>
          <span className={styles.proTag}>Pro</span>
          <h3 className={styles.cardTitle}>Pro license</h3>
          <p className={styles.cardPrice}>One-time payment</p>
          <p className={styles.cardCaption}>
            Everything in Free, plus the full studio
          </p>
          <ul className={styles.list}>
            <li>Full theme &amp; device library</li>
            <li>Glassmorphism materials and 3D tilt</li>
            <li>Stickers, badges, and the redact tool</li>
            <li>Custom logo, handle, and QR watermarks</li>
            <li>Tiled watermark protection</li>
          </ul>

          <div className={styles.licenseBox}>
            <span className={styles.licenseDot} />
            <span className={styles.licensePlaceholder}>
              XXXX-XXXX-XXXX-XXXX
            </span>
            <span className={styles.licenseVerified}>Verified via Gumroad</span>
          </div>

          <button
            type="button"
            className={styles.ctaSolid}
            onClick={handleProCheckout}
          >
            Get a Pro license
          </button>
        </div>
      </div>
    </section>
  );
}
