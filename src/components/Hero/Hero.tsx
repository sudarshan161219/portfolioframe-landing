import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          A local-first studio for screenshots &amp; code
        </p>
        <h1 className={styles.headline}>
          Develop your screenshots
          <br />
          like prints.
        </h1>
        <p className={styles.sub}>
          Portfolio Frame turns a raw screenshot or a slab of code into
          something worth sharing, windowed, lit, annotated, and sized for
          wherever it's going. No account, no upload, no server in between.
        </p>

        <div className={styles.actions}>
          <a href="#pricing" className={styles.primaryCta}>
            Add to Chrome, it's free
          </a>
          <a href="#code" className={styles.secondaryCta}>
            See it on code ↓
          </a>
        </div>

        <dl className={styles.trustRow}>
          <div>
            <dt>Setup</dt>
            <dd>Zero. Open the extension and start.</dd>
          </div>
          <div>
            <dt>Storage</dt>
            <dd>100% on your device, local storage &amp; IndexedDB.</dd>
          </div>
          <div>
            <dt>Servers</dt>
            <dd>None. Your work never leaves your browser.</dd>
          </div>
        </dl>
      </div>

      <div
        className={styles.stage}
        role="img"
        aria-label="A code snippet card and a browser screenshot card, arranged like proof prints on a darkroom light table"
      >
        <div className={styles.sheet}>
          <span className={styles.tick} data-corner="tl" />
          <span className={styles.tick} data-corner="tr" />
          <span className={styles.tick} data-corner="bl" />
          <span className={styles.tick} data-corner="br" />
          <div className={styles.cardBrowser}>
            <div className={styles.browserChrome}>
              <span />
              <span />
              <span />
              <div className={styles.browserUrl}>portfolio.dev</div>
            </div>
            <div className={styles.browserBody}>
              <div className={styles.badge}>Shipped v2.4</div>
              <div className={styles.blockLg} />
              <div className={styles.blockRow}>
                <div className={styles.blockSm} />
                <div className={styles.blockSm} />
              </div>
            </div>
          </div>
          <div className={styles.cardCode}>
            <div className={styles.codeChrome}>
              <span data-dot="red" />
              <span data-dot="mint" />
              <span data-dot="sage" />
              <span className={styles.codeTitle}>use-export-pipeline.ts</span>
            </div>
            <div className={styles.codeBody}>
              <div className={styles.line}>
                <span className={styles.gutter}>08</span>
                <span className={styles.kw}>const</span> ratio = clamp(scale,
                min)
              </div>
              <div className={`${styles.line} ${styles.lineActive}`}>
                <span className={styles.gutter}>09</span>
                <span className={styles.kw}>export</span> compositeLayers(a, b,
                c)
              </div>
              <div className={styles.line}>
                <span className={styles.gutter}>10</span>
                &nbsp;&nbsp;return canvas.toBlob(
                <span className={styles.str}>'image/png'</span>)
              </div>
            </div>
          </div>
          <p className={styles.sheetCaption}>
            Proof 03: background / screenshot / chrome
          </p>
        </div>
      </div>
    </section>
  );
}
