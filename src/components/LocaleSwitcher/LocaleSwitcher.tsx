import { Link, useLocation } from "react-router-dom";
import { LOCALES, LOCALE_NAMES } from "../../i18n/config";
import { useLocale } from "../../i18n/LocaleContext";
import { localizePath } from "../../i18n/paths";
import styles from "./LocaleSwitcher.module.css";

export default function LocaleSwitcher() {
  const { locale, dict } = useLocale();
  const location = useLocation();

  return (
    <details className={styles.switcher}>
      <summary className={styles.trigger} aria-label={dict.localeSwitcher.label}>
        {locale.toUpperCase()}
      </summary>
      <ul className={styles.menu}>
        {LOCALES.map((l) => (
          <li key={l}>
            <Link
              to={localizePath(location.pathname, l)}
              className={styles.item}
              data-active={l === locale}
            >
              {LOCALE_NAMES[l]}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
