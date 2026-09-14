import { useState } from "react";
import styles from "./TweetSnapShowcase.module.css";
import { useLocale } from "../../i18n/LocaleContext";

function BirdIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.6 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 3H22l-7.2 8.3L23 21h-6.6l-5.2-6.6L5.2 21H2l7.7-8.8L1.5 3h6.8l4.7 6.1L18.9 3zm-1.1 16h1.8L7.3 4.9H5.4L17.8 19z" />
    </svg>
  );
}

export default function TweetSnapShowcase() {
  const { dict } = useLocale();
  const t = dict.showcases.tweetSnap;
  const [logoStyle, setLogoStyle] = useState<"bird" | "x">("x");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className={styles.panel}>
      <div className={styles.controls}>
        <div
          className={styles.toggleGroup}
          role="group"
          aria-label={t.ariaLogoStyle}
        >
          <button
            type="button"
            className={styles.toggleBtn}
            data-active={logoStyle === "bird"}
            onClick={() => setLogoStyle("bird")}
          >
            <BirdIcon /> {t.classic}
          </button>
          <button
            type="button"
            className={styles.toggleBtn}
            data-active={logoStyle === "x"}
            onClick={() => setLogoStyle("x")}
          >
            <XIcon /> {t.current}
          </button>
        </div>

        <div className={styles.toggleGroup} role="group" aria-label={t.ariaTheme}>
          <button
            type="button"
            className={styles.toggleBtn}
            data-active={theme === "light"}
            onClick={() => setTheme("light")}
          >
            {t.light}
          </button>
          <button
            type="button"
            className={styles.toggleBtn}
            data-active={theme === "dark"}
            onClick={() => setTheme("dark")}
          >
            {t.dark}
          </button>
        </div>
      </div>

      <div className={styles.card} data-theme={theme}>
        <span className={styles.platformIcon}>
          {logoStyle === "bird" ? <BirdIcon /> : <XIcon />}
        </span>

        <div className={styles.header}>
          <span className={styles.avatar} />
          <div className={styles.identity}>
            <span className={styles.name}>
              Sud <span className={styles.badge}>✓</span>
            </span>
            <span className={styles.handle}>@buildwithsud</span>
          </div>
        </div>
        <p className={styles.body}>{t.tweetBody}</p>
        <span className={styles.timestamp}>9:41 AM · Aug 21, 2026</span>

        <div className={styles.stats}>
          <span className={styles.statField}>
            128 {t.repliesLabel}
            <span className={styles.editDot} />
          </span>
          <span className={`${styles.statField} ${styles.statActive}`}>
            842 {t.repostsLabel}
            <span className={styles.cursor} />
          </span>
          <span className={styles.statField}>
            3.4K {t.likesLabel}
            <span className={styles.editDot} />
          </span>
        </div>
      </div>

      <p className={styles.caption}>{t.caption}</p>
    </div>
  );
}
