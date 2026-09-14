import styles from "./FeatureRail.module.css";
import DeviceShowcase from "./DeviceShowcase";
import TweetSnapShowcase from "./TweetSnapShowcase";
import CodeGlassShowcase from "./CodeGlassShowcase";
import AnnotateShowcase from "./AnnotateShowcase";
import BrandShowcase from "./BrandShowcase";
import { useLocale } from "../../i18n/LocaleContext";
import type { FeatureRailSectionId } from "../../i18n/types";

const SECTION_IDS: FeatureRailSectionId[] = [
  "editor",
  "code",
  "twitter-snap",
  "mockups",
  "annotate",
  "brand",
];

const ACCENTS: Record<FeatureRailSectionId, "mint" | "sage" | "red"> = {
  editor: "mint",
  code: "sage",
  "twitter-snap": "red",
  mockups: "mint",
  annotate: "red",
  brand: "sage",
};

export default function FeatureRail() {
  const { dict } = useLocale();
  const sections = dict.featureRail.sections;

  return (
    <>
      {SECTION_IDS.map((id, i) => {
        const section = sections[id];
        const accent = ACCENTS[id];
        return (
          <section
            key={id}
            id={id}
            className={styles.section}
            data-alt={i % 2 === 1}
          >
            <div className={styles.grid}>
              <div className={styles.intro}>
                <p className={styles.tag} data-accent={accent}>
                  {section.tag}
                </p>
                <h2 className={styles.title}>{section.title}</h2>
                <p className={styles.description}>{section.description}</p>
              </div>

              <div>
                {id === "mockups" && <DeviceShowcase />}
                {id === "twitter-snap" && <TweetSnapShowcase />}
                {id === "code" && <CodeGlassShowcase />}
                {id === "annotate" && <AnnotateShowcase />}
                {id === "brand" && <BrandShowcase />}
                <ul className={styles.cards}>
                  {section.features.map((f) => (
                    <li key={f.title} className={styles.card}>
                      <span className={styles.cardMark} data-accent={accent} />
                      <h3 className={styles.cardTitle}>{f.title}</h3>
                      <p className={styles.cardDesc}>{f.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
