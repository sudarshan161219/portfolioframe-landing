import styles from "./Reviews.module.css";
import { useLocale } from "../../i18n/LocaleContext";
import { STORE_REVIEWS_URL, storeRating, storeReviews } from "../../data/reviews";

export default function Reviews() {
  const { locale, dict } = useLocale();
  const t = dict.reviews;

  const average = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(storeRating.average);
  const formatDate = new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeZone: "UTC",
  });

  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.tag}>{t.tag}</p>
        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.description}>{t.description}</p>
        <p className={styles.summary}>
          <span className={styles.stars} aria-hidden="true">
            ★★★★★
          </span>
          {t.ratingSummary(average, storeRating.count)}
        </p>
      </div>

      <ul className={styles.grid}>
        {storeReviews.map((review) => (
          <li key={`${review.author}-${review.date}`} className={styles.card}>
            <p className={styles.cardStars} aria-label={t.starsLabel(review.rating)}>
              {"★".repeat(review.rating)}
            </p>
            <blockquote className={styles.quote} cite={STORE_REVIEWS_URL}>
              <p>{review.text}</p>
            </blockquote>
            <p className={styles.byline}>
              <span dir="auto">{review.author}</span>
              <time dateTime={review.date}>
                {formatDate.format(new Date(review.date))}
              </time>
            </p>
          </li>
        ))}
      </ul>

      <a
        href={STORE_REVIEWS_URL}
        target="_blank"
        rel="noreferrer"
        className={styles.storeLink}
      >
        {t.storeLink}
      </a>
    </section>
  );
}
