import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { useLocale } from "../../i18n/LocaleContext";
import { withLocale } from "../../i18n/paths";

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
      </div>

      <div className={styles.badges}>
        <a
          href="https://www.producthunt.com/products/portfolio-frame?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-portfolio-frame"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Portfolio Frame - Frame, annotate, and export screenshots that look designed | Product Hunt"
            width="250"
            height="54"
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1250975&theme=dark&t=1789453556854"
          />
        </a>
        <a
          href="https://forg.to/projects/portfolio-frame"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://forg.to/api/badges/featured/portfolio-frame?theme=dark&shape=square"
            alt="Portfolio Frame - Featured on Forg on forg."
            height="48"
          />
        </a>

        <a
          href="https://www.indieneed.com/api/badge/click/1f9c1fc0-74e5-4d89-be46-a791894e34f3?to=review"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.indieneed.com/api/badge/1f9c1fc0-74e5-4d89-be46-a791894e34f3?variant=review"
            width="250"
            height="54"
            alt="Leave a review for Portfolio Frame on Indie Need"
            style={{
              // width: "250px",
              height: "48px",
            }}
          />
        </a>

        <a
          href="https://www.shipnlaunch.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.shipnlaunch.com/badges/featured-light.svg"
            alt="Featured on ShipNLaunch"
            height="48"
          />
        </a>
      </div>

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
