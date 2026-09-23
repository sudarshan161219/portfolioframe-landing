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

        {comparison.sections && comparison.sections.length > 0 && (
          <section className={styles.prose}>
            {comparison.sections.map((section) => (
              <div key={section.heading} className={styles.proseSection}>
                <h2 className={styles.proseHeading}>{section.heading}</h2>
                {section.body.map((para, i) => (
                  <p key={i} className={styles.proseBody}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </section>
        )}

        {comparison.verdict && (
          <section className={styles.verdictSection}>
            <div className={styles.verdictCard}>
              <h2 className={styles.verdictHeading}>{comparison.verdict.competitorHeading}</h2>
              <p className={styles.verdictBody}>{comparison.verdict.competitorBody}</p>
            </div>
            <div className={styles.verdictCard}>
              <h2 className={styles.verdictHeading}>{comparison.verdict.frameHeading}</h2>
              <p className={styles.verdictBody}>{comparison.verdict.frameBody}</p>
            </div>
          </section>
        )}

        <section className={styles.noteSection}>
          <p className={styles.noteLabel}>{t.honestLabel}</p>
          <p className={styles.note}>{comparison.honestNote}</p>
          <Link to={withLocale('/#pricing', locale)} className={styles.cta}>
            {t.ctaText}
          </Link>
        </section>

        {comparison.faq && comparison.faq.length > 0 && (
          <section className={styles.faqSection}>
            <h2 className={styles.faqHeading}>{comparison.faqHeading ?? 'Questions'}</h2>
            {comparison.faq.map((item) => (
              <div key={item.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{item.q}</h3>
                <p className={styles.faqA}>{item.a}</p>
              </div>
            ))}
          </section>
        )}

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
