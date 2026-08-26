import styles from "./FeatureRail.module.css";
import DeviceShowcase from "./DeviceShowcase";
import TweetSnapShowcase from "./TweetSnapShowcase";

type Feature = {
  title: string;
  desc: string;
};

type Section = {
  id: string;
  tag: string;
  title: string;
  description: string;
  accent: "mint" | "sage" | "red";
  features: Feature[];
};

const SECTIONS: Section[] = [
  {
    id: "editor",
    tag: "Layout · Source",
    title: "One canvas, two ways in",
    description:
      "Drop in a screenshot or paste a block of code. The same canvas, export controls, and sizing presets carry across both.",
    accent: "mint",
    features: [
      {
        title: "Dual editor modes",
        desc: "Switch between an image-mockup editor and a code-snippet editor without losing your place.",
      },
      {
        title: "High-quality exports",
        desc: "Set export resolution and JPEG compression yourself, so nothing gets soft on the way out.",
      },
      {
        title: "Social-ready sizing",
        desc: "Auto, Custom, Square, Portrait, Story, Landscape, and Presentation, one click each.",
      },
    ],
  },
  {
    id: "code",
    tag: "Frame",
    title: "Code, printed properly",
    description:
      "Syntax highlighting and window chrome built for reading, not just decoration.",
    accent: "sage",
    features: [
      {
        title: "Premium syntax themes",
        desc: "Dracula, Synthwave '84, Monokai, GitHub Dark, and a Minimal Light theme, built on Prism.js.",
      },
      {
        title: "Multi-language badges",
        desc: "Automatic, designed language badges for JavaScript, TypeScript, Python, CSS, and Rust.",
      },
      {
        title: "Line highlighting & gutters",
        desc: "Call out the exact lines that matter, with toggleable line numbers.",
      },
      {
        title: "Window styles",
        desc: "Wrap snippets in macOS, Windows, or minimalist frames.",
      },
      {
        title: "Glassmorphism materials",
        desc: "Frosted-glass panels with tunable borders, shadow depth, and refraction.",
      },
    ],
  },
  {
    id: "twitter-snap",
    tag: "Social",
    title: "Tweets, without the screenshot",
    description:
      "Paste a tweet, get a clean styled card back. No cropped browser chrome, no cookie banner in the corner.",
    accent: "red",
    features: [
      {
        title: "Real tweet layout",
        desc: "Avatar, name, verified badge, handle, and timestamp, laid out the way it actually reads on X.",
      },
      {
        title: "Light & dark themes",
        desc: "Match the card to whatever you're dropping it into: a blog post, a deck, or a dark-mode thread.",
      },
      {
        title: "Editable stats",
        desc: "Replies, reposts, and likes are yours to set, useful for mockups before a post even goes live.",
      },
    ],
  },
  {
    id: "mockups",
    tag: "Background",
    title: "Set the scene",
    description:
      "Real device and browser frames, not flat rectangles, because context is half the story.",
    accent: "mint",
    features: [
      {
        title: "Device library",
        desc: "Pro Display XDR, Dell UltraSharp, MacBook, iPhone 14 Pro, Apple Watch, and more.",
      },
      {
        title: "Browser frames",
        desc: "Light and dark shells for Chrome on Windows and Mac, and Safari.",
      },
      {
        title: "Terminal mode",
        desc: "A customizable terminal frame with a configurable file path in the title bar.",
      },
      {
        title: "3D tilt",
        desc: "Adjustable X, Y, and Z-axis tilt plus zoom, for depth without gimmicks.",
      },
    ],
  },
  {
    id: "annotate",
    tag: "Annotate",
    title: "Point at what matters",
    description:
      "Text, shapes, and steps layered directly on the canvas, nothing that requires a second tool.",
    accent: "red",
    features: [
      {
        title: "Annotation tools",
        desc: "Text, boxes, arrows, numbered steps, highlights, and a redact tool for anything sensitive.",
      },
      {
        title: "Stickers",
        desc: "Drop in and rotate custom stickers anywhere on the canvas.",
      },
      {
        title: "Context badges",
        desc: 'Sleek badges on any edge, with a custom icon, emoji, or dot: "Shipped new feature" and the like.',
      },
    ],
  },
  {
    id: "brand",
    tag: "Brand",
    title: "Sign your work",
    description: "Mark it as yours, or make it hard to lift without credit.",
    accent: "sage",
    features: [
      {
        title: "Versatile watermarks",
        desc: "Text, a handle for X, GitHub, LinkedIn, or Instagram, a custom logo, or a scannable QR code.",
      },
      {
        title: "Tiled watermarks",
        desc: "Repeating, angled tiles in solid, outline, or overlay styles, for work you want protected.",
      },
    ],
  },
];

export default function FeatureRail() {
  return (
    <>
      {SECTIONS.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={styles.section}
          data-alt={i % 2 === 1}
        >
          <div className={styles.grid}>
            <div className={styles.intro}>
              <p className={styles.tag} data-accent={section.accent}>
                {section.tag}
              </p>
              <h2 className={styles.title}>{section.title}</h2>
              <p className={styles.description}>{section.description}</p>
            </div>

            <div>
              {section.id === "mockups" && <DeviceShowcase />}
              {section.id === "twitter-snap" && <TweetSnapShowcase />}
              <ul className={styles.cards}>
                {section.features.map((f) => (
                  <li key={f.title} className={styles.card}>
                    <span
                      className={styles.cardMark}
                      data-accent={section.accent}
                    />
                    <h3 className={styles.cardTitle}>{f.title}</h3>
                    <p className={styles.cardDesc}>{f.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
