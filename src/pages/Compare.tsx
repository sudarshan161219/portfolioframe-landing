import { useParams, Navigate, Link } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import { COMPARISONS } from '../data/comparisons'
import { usePageMeta } from '../hooks/usePageMeta'
import styles from './Compare.module.css'

export default function Compare() {
  const { slug } = useParams()
  const comparison = COMPARISONS.find((c) => c.slug === slug)

  if (!comparison) {
    return <Navigate to="/" replace />
  }

  usePageMeta({
    title: `Frame vs ${comparison.name} — code screenshot & mockup tools compared`,
    description: comparison.intro,
    path: `/vs/${comparison.slug}`,
    image: `https://portfolioframe.com/og/vs-${comparison.slug}.png`,
  })

  return (
    <div>
      <Nav />
      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Comparison</p>
          <h1 className={styles.title}>
            Frame vs {comparison.name}
          </h1>
          <p className={styles.intro}>{comparison.intro}</p>
        </section>

        <section className={styles.tableSection}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Frame</th>
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
          <p className={styles.noteLabel}>Being honest about it</p>
          <p className={styles.note}>{comparison.honestNote}</p>
          <Link to="/#pricing" className={styles.cta}>
            Try Frame — it's free
          </Link>
        </section>

        <section className={styles.otherSection}>
          <p className={styles.otherLabel}>Other comparisons</p>
          <div className={styles.otherLinks}>
            {COMPARISONS.filter((c) => c.slug !== comparison.slug).map((c) => (
              <Link key={c.slug} to={`/vs/${c.slug}`} className={styles.otherLink}>
                Frame vs {c.name}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
