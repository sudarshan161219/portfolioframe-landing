import styles from "./Hero.module.css";
import { useLocale } from "../../i18n/LocaleContext";

export default function Hero() {
  const { dict } = useLocale();
  const t = dict.hero;

  return (
    <section className={styles.hero} id="top">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h1 className={styles.headline}>
          {t.headlineLine1}
          <br />
          {t.headlineLine2}
        </h1>
        <p className={styles.subhead}>{t.subhead}</p>
        <p className={styles.sub}>{t.sub}</p>

        <div className={styles.actions}>
          <a
            href="https://chromewebstore.google.com/detail/kgpdfalcolcdidglbdnfnelgihlocmkf?utm_source=item-share-cb"
            target="_blank"
            rel="noreferrer"
            className={styles.primaryCta}
          >
            {t.primaryCta}
          </a>
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/portfolio-frame-screenshots/"
            target="_blank"
            rel="noreferrer"
            className={styles.webCta}
          >
            {t.firefoxCta}
          </a>
          <a
            href="https://app.portfolioframe.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.webCta}
          >
            {t.webCta}
          </a>
          <a href="#code" className={styles.secondaryCta}>
            {t.secondaryCta}
          </a>
        </div>

        <dl className={styles.trustRow}>
          <div>
            <dt>{t.trust.setupLabel}</dt>
            <dd>{t.trust.setupValue}</dd>
          </div>
          <div>
            <dt>{t.trust.storageLabel}</dt>
            <dd>{t.trust.storageValue}</dd>
          </div>
          <div>
            <dt>{t.trust.serversLabel}</dt>
            <dd>{t.trust.serversValue}</dd>
          </div>
        </dl>
      </div>

      <div
        className={styles.stage}
        role="img"
        aria-label={t.stageAriaLabel}
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
              <div className={styles.badge}>{t.shippedBadge}</div>
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
              <div>
                <span className={styles.codeTitle}>use-export-pipeline.ts</span>
              </div>
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
          <p className={styles.sheetCaption}>{t.sheetCaption}</p>
        </div>
      </div>
    </section>
  );
}
