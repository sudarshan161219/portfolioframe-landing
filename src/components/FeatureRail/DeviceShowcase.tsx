import { useState } from 'react'
import iphone from '../../assets/devices/iphone.webp'
import watch from '../../assets/devices/watch.webp'
import macbook from '../../assets/devices/macbook.webp'
import styles from './DeviceShowcase.module.css'
import { useLocale } from '../../i18n/LocaleContext'

type Frame = 'device' | 'browser' | 'terminal'
type Device = 'macbook' | 'iphone' | 'watch'
type Tilt = 'flat' | 'angled' | 'deep'

const DEVICE_IMAGES: Record<Device, string> = {
  macbook,
  iphone,
  watch,
}

// Every device render is 1200x800 with transparent padding around the hardware.
// Declaring it lets the browser reserve the box before the bytes land.
const DEVICE_WIDTH = 1200
const DEVICE_HEIGHT = 800

const TILT_TRANSFORM: Record<Tilt, string> = {
  flat: 'none',
  angled: 'perspective(900px) rotateX(6deg) rotateY(-10deg)',
  deep: 'perspective(900px) rotateX(10deg) rotateY(-20deg)',
}

const TILT_DEG: Record<Tilt, string> = {
  flat: '0deg',
  angled: '10deg',
  deep: '20deg',
}

export default function DeviceShowcase() {
  const { dict } = useLocale()
  const t = dict.showcases.device
  const common = dict.showcases.common
  const [frame, setFrame] = useState<Frame>('device')
  const [device, setDevice] = useState<Device>('macbook')
  const [tilt, setTilt] = useState<Tilt>('flat')

  return (
    <div className={styles.panel}>
      <div className={styles.controls}>
        <div className={styles.toggleGroup} role="group" aria-label={t.ariaFrameType}>
          {(['device', 'browser', 'terminal'] as const).map((f) => (
            <button
              key={f}
              type="button"
              className={styles.toggleBtn}
              data-active={frame === f}
              onClick={() => setFrame(f)}
            >
              {t.frameTypeLabels[f]}
            </button>
          ))}
        </div>

        {frame === 'device' && (
          <div className={styles.toggleGroup} role="group" aria-label={t.ariaDevice}>
            {(['macbook', 'iphone', 'watch'] as const).map((d) => (
              <button
                key={d}
                type="button"
                className={styles.toggleBtn}
                data-active={device === d}
                onClick={() => setDevice(d)}
              >
                {t.deviceLabels[d]}
              </button>
            ))}
          </div>
        )}

        <div className={styles.toggleGroup} role="group" aria-label={common.ariaTilt}>
          {(['flat', 'angled', 'deep'] as const).map((tt) => (
            <button
              key={tt}
              type="button"
              className={styles.toggleBtn}
              data-active={tilt === tt}
              onClick={() => setTilt(tt)}
            >
              {common.tiltLabels[tt]}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.stage}>
        {frame === 'device' && (
          // This image is the page's LCP element in field data, so it must stay
          // eagerly loaded and high priority. It was previously loading="lazy",
          // which hid it from the preload scanner and pushed LCP past 35s on
          // slow connections.
          <img
            key={device}
            src={DEVICE_IMAGES[device]}
            alt=""
            className={styles.deviceImg}
            data-device={device}
            style={{ transform: TILT_TRANSFORM[tilt] }}
            width={DEVICE_WIDTH}
            height={DEVICE_HEIGHT}
            fetchPriority="high"
          />
        )}

        {frame === 'browser' && (
          <div className={styles.frameCard} style={{ transform: TILT_TRANSFORM[tilt] }}>
            <div className={styles.chipChrome}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.chipBody}>
              <div className={styles.chipBlock} />
              <div className={styles.chipBlock} data-short="true" />
              <div className={styles.chipBlock} data-short="true" />
            </div>
          </div>
        )}

        {frame === 'terminal' && (
          <div className={styles.frameCard} style={{ transform: TILT_TRANSFORM[tilt] }}>
            <div className={styles.chipChrome}>
              <span />
              <span />
              <span />
              <span className={styles.chipPath}>~/export</span>
            </div>
            <div className={styles.terminalBody}>
              <p>
                <span className={styles.prompt}>❯</span> export --tilt {TILT_DEG[tilt]}
              </p>
              <p className={styles.cursorLine}>
                <span className={styles.prompt}>❯</span>
                <span className={styles.cursor} />
              </p>
            </div>
          </div>
        )}
      </div>

      <p className={styles.caption}>
        {frame === 'device'
          ? `${t.deviceFullNames[device]}${t.deviceCaptionSuffix}`
          : frame === 'browser'
          ? t.browserCaption
          : t.terminalCaption}
      </p>
    </div>
  )
}
