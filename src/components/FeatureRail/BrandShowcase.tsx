import { useState } from "react";
import styles from "./BrandShowcase.module.css";
import { useLocale } from "../../i18n/LocaleContext";

type WatermarkType = "text" | "logo" | "qr";

export default function BrandShowcase() {
  const { dict } = useLocale();
  const t = dict.showcases.brand;
  const [watermark, setWatermark] = useState<WatermarkType>("text");
  const [tiled, setTiled] = useState(false);

  return (
    <div className={styles.panel}>
      <div className={styles.controls}>
        <div className={styles.toggleGroup} role="group" aria-label={t.ariaWatermarkType}>
          {(["text", "logo", "qr"] as const).map((type) => (
            <button
              key={type}
              type="button"
              className={styles.toggleBtn}
              data-active={watermark === type}
              onClick={() => setWatermark(type)}
            >
              {t.types[type]}
            </button>
          ))}
        </div>

        <div className={styles.toggleGroup} role="group" aria-label={t.ariaTiled}>
          <button
            type="button"
            className={styles.toggleBtn}
            data-active={!tiled}
            onClick={() => setTiled(false)}
          >
            {t.tiledOff}
          </button>
          <button
            type="button"
            className={styles.toggleBtn}
            data-active={tiled}
            onClick={() => setTiled(true)}
          >
            {t.tiledOn}
          </button>
        </div>
      </div>

      <div className={styles.canvas}>
        <div className={styles.fakeChrome}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.fakeBody} />

        {tiled && (
          <div className={styles.tileOverlay} aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i}>PORTFOLIOFRAME.COM</span>
            ))}
          </div>
        )}

        <div className={styles.watermark} data-type={watermark}>
          {watermark === "text" && <span>@buildwithsud</span>}
          {watermark === "logo" && <span className={styles.logoMark}>PF</span>}
          {watermark === "qr" && (
            <span className={styles.qrGrid} aria-hidden="true">
              {[
                1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1,
                1, 0, 1, 1,
              ].map((on, i) => (
                <i key={i} data-on={on === 1} />
              ))}
            </span>
          )}
        </div>
      </div>

      <p className={styles.caption}>{t.caption}</p>
    </div>
  );
}
