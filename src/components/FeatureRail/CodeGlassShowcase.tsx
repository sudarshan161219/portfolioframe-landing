import { useState } from "react";
import styles from "./CodeGlassShowcase.module.css";

type Tilt = "flat" | "angled" | "deep";

const TILT_TRANSFORM: Record<Tilt, string> = {
  flat: "none",
  angled: "perspective(900px) rotateX(6deg) rotateY(-10deg)",
  deep: "perspective(900px) rotateX(10deg) rotateY(-20deg)",
};

export default function CodeGlassShowcase() {
  const [tilt, setTilt] = useState<Tilt>("angled");
  const [glass, setGlass] = useState(true);

  return (
    <div className={styles.panel}>
      <div className={styles.controls}>
        <div className={styles.toggleGroup} role="group" aria-label="Tilt">
          {(["flat", "angled", "deep"] as const).map((t) => (
            <button
              key={t}
              type="button"
              className={styles.toggleBtn}
              data-active={tilt === t}
              onClick={() => setTilt(t)}
            >
              {t === "flat" ? "Flat" : t === "angled" ? "Angled" : "Deep"}
            </button>
          ))}
        </div>

        <div className={styles.toggleGroup} role="group" aria-label="Glass material">
          <button
            type="button"
            className={styles.toggleBtn}
            data-active={!glass}
            onClick={() => setGlass(false)}
          >
            Glass off
          </button>
          <button
            type="button"
            className={styles.toggleBtn}
            data-active={glass}
            onClick={() => setGlass(true)}
          >
            Glass on
          </button>
        </div>
      </div>

      <div className={styles.stage}>
        <div
          className={styles.window}
          data-glass={glass}
          style={{ transform: TILT_TRANSFORM[tilt] }}
        >
          <div className={styles.chrome}>
            <span data-dot="red" />
            <span data-dot="yellow" />
            <span data-dot="green" />
          </div>
          <div className={styles.code}>
            <p>
              <span className={styles.kw}>export function</span>{" "}
              <span className={styles.fn}>captureFrame</span>() {"{"}
            </p>
            <p className={styles.indent}>
              <span className={styles.kw}>const</span> tilt = {" "}
              <span className={styles.num}>12</span>;
            </p>
            <p className={styles.indent}>
              <span className={styles.kw}>return</span>{" "}
              <span className={styles.str}>"shipped."</span>;
            </p>
            <p>{"}"}</p>
          </div>
          {glass && <div className={styles.glassSheen} />}
        </div>
      </div>

      <p className={styles.caption}>
        Frosted-glass panels with tunable borders, plus adjustable X/Y/Z tilt
        for depth without gimmicks.
      </p>
    </div>
  );
}
