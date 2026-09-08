import { useState } from "react";
import styles from "./AnnotateShowcase.module.css";

type Tool = "box" | "arrow" | "redact" | "sticker";

const TOOLS: { id: Tool; label: string }[] = [
  { id: "box", label: "Box" },
  { id: "arrow", label: "Arrow" },
  { id: "redact", label: "Redact" },
  { id: "sticker", label: "Sticker" },
];

export default function AnnotateShowcase() {
  const [active, setActive] = useState<Set<Tool>>(new Set(["box"]));

  const toggle = (tool: Tool) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(tool)) next.delete(tool);
      else next.add(tool);
      return next;
    });
  };

  return (
    <div className={styles.panel}>
      <div className={styles.controls}>
        <div className={styles.toggleGroup} role="group" aria-label="Annotation tools">
          {TOOLS.map((tool) => (
            <button
              key={tool.id}
              type="button"
              className={styles.toggleBtn}
              data-active={active.has(tool.id)}
              onClick={() => toggle(tool.id)}
            >
              {tool.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.canvas}>
        <div className={styles.uiBar}>
          <span className={styles.uiPill}>Dashboard</span>
        </div>

        <div className={styles.uiButton} data-boxed={active.has("box")}>
          Deploy
        </div>

        <div className={styles.uiLine} style={{ width: "72%" }} />
        <div className={styles.uiLine} style={{ width: "48%" }} />

        <div className={styles.secretLine}>
          <span className={styles.secretText} data-hidden={active.has("redact")}>
            API_KEY=sk-live-83hf01kd
          </span>
          {active.has("redact") && <span className={styles.redactBar} />}
        </div>

        {active.has("arrow") && (
          <svg
            className={styles.arrow}
            viewBox="0 0 90 60"
            aria-hidden="true"
          >
            <path
              d="M4 4 C 30 4, 60 20, 82 50"
              fill="none"
              stroke="var(--red)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path d="M82 50 L74 40 M82 50 L69 52" stroke="var(--red)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        )}

        {active.has("sticker") && (
          <span className={styles.sticker} aria-hidden="true">
            🔥
          </span>
        )}
      </div>

      <p className={styles.caption}>
        Box, arrow, redact, and stickers, layered directly on the canvas,
        toggle a few together to see them stack.
      </p>
    </div>
  );
}
