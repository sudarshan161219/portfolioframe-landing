import styles from "./Pricing.module.css";

export default function Pricing() {
  const handleProCheckout = () => {
    window.location.href =
      "https://checkout.dodopayments.com/buy/pdt_0NmQH2p48Kq2fePwLLuKX?quantity=1";
  };

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
            <li>2 device &amp; browser frames per category</li>
            <li>Full background Scene library, 3D tilt &amp; perspective</li>
            <li>Stickers, plus text, box, and arrow annotations</li>
            <li>Local storage, no account</li>
          </ul>
          <a
            href="https://chromewebstore.google.com/detail/kgpdfalcolcdidglbdnfnelgihlocmkf?utm_source=item-share-cb"
            target="_blank"
            rel="noreferrer"
            className={styles.ctaGhost}
          >
            Add to Chrome
          </a>
        </div>

        <div className={`${styles.card} ${styles.cardPro}`}>
          <span className={styles.proTag}>Pro</span>
          <h3 className={styles.cardTitle}>Pro license</h3>
          <p className={styles.cardPrice}>$19</p>
          <p className={styles.cardPrice}>One-time payment</p>
          <p className={styles.cardCaption}>
            Everything in Free, plus the full studio
          </p>
          <ul className={styles.list}>
            <li>Rest of the device &amp; browser mockup library</li>
            <li>Glassmorphism materials</li>
            <li>Badges and the redact tool</li>
            <li>Save custom Scenes, upload custom fonts</li>
            <li>Custom logo, handle, and QR watermarks</li>
            <li>Tiled watermark protection</li>
            <li>Batch export of every aspect ratio, zipped</li>
            <li>SVG export</li>
          </ul>

          <div className={styles.licenseBox}>
            <span className={styles.licenseDot} />
            <span className={styles.licensePlaceholder}>
              XXXX-XXXX-XXXX-XXXX
            </span>
            <span className={styles.licenseVerified}>
              Verified via Dodo Payments
            </span>
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
