import { useParams, Navigate, Link } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import { COMPARISON_SLUGS } from '../data/comparisons'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLocale } from '../i18n/LocaleContext'
import { withLocale } from '../i18n/paths'
import type { ComparisonSlug } from '../i18n/types'
import styles from './Compare.module.css'

export default function Compare() {
  const { locale, dict } = useLocale()
  const { slug } = useParams()
  const isKnownSlug = COMPARISON_SLUGS.includes(slug as ComparisonSlug)

  if (!isKnownSlug) {
    return <Navigate to={withLocale('/', locale)} replace />
  }

  const comparisonSlug = slug as ComparisonSlug
  const comparison = dict.comparisons[comparisonSlug]
  const t = dict.compare

  usePageMeta({
    title: t.metaTitleTemplate(comparison.name),
    description: comparison.intro,
    path: `/vs/${comparisonSlug}`,
    locale,
    image: `https://portfolioframe.com/og/vs-${comparisonSlug}.png`,
  })

  return (
    <div>
      <Nav />
      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h1 className={styles.title}>{t.titleTemplate(comparison.name)}</h1>
          <p className={styles.intro}>{comparison.intro}</p>
        </section>

        <section className={styles.tableSection}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{t.tableHeaders.feature}</th>
                <th>{t.tableHeaders.frame}</th>
                <th>{comparison.name}</th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.feature}>
                  <td className={styles.featureCell}>{row.feature}</td>
                  <td>{row.frame}</td>
                  <td>{row.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className={styles.noteSection}>
          <p className={styles.noteLabel}>{t.honestLabel}</p>
          <p className={styles.note}>{comparison.honestNote}</p>
          <Link to={withLocale('/#pricing', locale)} className={styles.cta}>
            {t.ctaText}
          </Link>
        </section>

        <section className={styles.otherSection}>
          <p className={styles.otherLabel}>{t.otherLabel}</p>
          <div className={styles.otherLinks}>
            {COMPARISON_SLUGS.filter((s) => s !== comparisonSlug).map((s) => (
              <Link
                key={s}
                to={withLocale(`/vs/${s}`, locale)}
                className={styles.otherLink}
              >
                {t.otherLinkTemplate(dict.comparisons[s].name)}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
