import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { BadgeSlider } from "../BadgeSlider/BadgeSlider";
import { useLocale } from "../../i18n/LocaleContext";
import { withLocale } from "../../i18n/paths";
import { COMPARISON_SLUGS } from "../../data/comparisons";

export default function Footer() {
  const { locale, dict } = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <a href={withLocale("/#top", locale)} className={styles.wordmark}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
              width="35px"
              height="35px"
            >
              <defs>
                <filter
                  id="tilt-shadow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="6"
                    stdDeviation="4"
                    flood-color="#000000"
                    flood-opacity="0.12"
                  />
                </filter>
              </defs>

              <g transform="translate(36, 33)">
                <rect
                  x="-24"
                  y="-24"
                  width="48"
                  height="48"
                  rx="6"
                  transform="rotate(-12)"
                  fill="var(--bg-app, #e8eaed)"
                  stroke="var(--text-muted, #7c828b)"
                  stroke-width="1.5"
                  stroke-dasharray="4 4"
                />

                <g filter="url(#tilt-shadow)">
                  <rect
                    x="-22"
                    y="-22"
                    width="44"
                    height="44"
                    rx="6"
                    fill="var(--bg-sidebar, #f5f6f7)"
                    stroke="var(--border-medium, #c7cbd0)"
                    stroke-width="2"
                  />

                  <circle
                    cx="-10"
                    cy="-10"
                    r="4"
                    fill="var(--accent-main, #4ea8de)"
                  />
                  <line
                    x1="-2"
                    y1="-12"
                    x2="14"
                    y2="-12"
                    stroke="var(--text-main, #18191b)"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <line
                    x1="-2"
                    y1="-7"
                    x2="8"
                    y2="-7"
                    stroke="var(--text-muted, #7c828b)"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <line
                    x1="-10"
                    y1="4"
                    x2="14"
                    y2="4"
                    stroke="var(--text-main, #18191b)"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <line
                    x1="-10"
                    y1="11"
                    x2="6"
                    y2="11"
                    stroke="var(--text-main, #18191b)"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </g>
              </g>
            </svg>
            Portfolio Frame
          </a>
          <p className={styles.tagline}>{dict.footer.tagline}</p>
        </div>

        <div className={styles.linkGroup}>
          <p className={styles.groupLabel}>{dict.footer.productLabel}</p>
          <a href={withLocale("/#editor", locale)}>{dict.nav.links.editor}</a>
          <a href={withLocale("/#code", locale)}>{dict.nav.links.code}</a>
          <a href={withLocale("/#mockups", locale)}>{dict.nav.links.mockups}</a>
          <a href={withLocale("/#brand", locale)}>{dict.nav.links.brand}</a>
        </div>

        <div className={styles.linkGroup}>
          <p className={styles.groupLabel}>{dict.footer.getItLabel}</p>
          <a href={withLocale("/#pricing", locale)}>{dict.nav.links.pricing}</a>
          <a
            href="https://chromewebstore.google.com/detail/kgpdfalcolcdidglbdnfnelgihlocmkf?utm_source=item-share-cb"
            target="_blank"
            rel="noreferrer"
          >
            {dict.nav.cta}
          </a>
          <a
            href="https://checkout.dodopayments.com/buy/pdt_0NmQH2p48Kq2fePwLLuKX?quantity=1"
            target="_blank"
            rel="noreferrer"
          >
            {dict.footer.proLicenseLink}
          </a>
        </div>

        <div className={styles.linkGroup}>
          <p className={styles.groupLabel}>{dict.footer.compareLabel}</p>
          {COMPARISON_SLUGS.map((slug) => (
            <Link key={slug} to={withLocale(`/vs/${slug}`, locale)}>
              {dict.footer.compareLinkTemplate(dict.comparisons[slug].name)}
            </Link>
          ))}
        </div>
      </div>

      <BadgeSlider />

      <div className={styles.baseline}>
        <span>© {new Date().getFullYear()} Portfolio Frame</span>
        <span>{dict.footer.noAccountLine}</span>
        <Link to={withLocale("/privacy", locale)}>
          {dict.footer.privacyLink}
        </Link>
      </div>
    </footer>
  );
}
