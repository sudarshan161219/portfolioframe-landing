import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <a href="#top" className={styles.wordmark}>
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
          <p className={styles.tagline}>
            A darkroom for screenshots and code. Everything stays on your
            device.
          </p>
        </div>

        <div className={styles.linkGroup}>
          <p className={styles.groupLabel}>Product</p>
          <a href="#editor">Editor</a>
          <a href="#code">Code</a>
          <a href="#mockups">Mockups</a>
          <a href="#brand">Brand</a>
        </div>

        <div className={styles.linkGroup}>
          <p className={styles.groupLabel}>Get it</p>
          <a href="#pricing">Pricing</a>
          <a href="#top">Add to Chrome</a>
          <a href="https://gumroad.com" target="_blank" rel="noreferrer">
            Pro license
          </a>
        </div>
      </div>

      <div className={styles.baseline}>
        <span>© {new Date().getFullYear()} Portfolio Frame</span>
        <span>No account. No upload. No server.</span>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
