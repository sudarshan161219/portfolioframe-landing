import { useState } from 'react'
import iphone from '../../assets/devices/iphone.png'
import watch from '../../assets/devices/watch.png'
import macbook from '../../assets/devices/macbook.png'
import styles from './DeviceShowcase.module.css'

type Frame = 'device' | 'browser' | 'terminal'
type Device = 'macbook' | 'iphone' | 'watch'
type Tilt = 'flat' | 'angled' | 'deep'

const DEVICES: Record<Device, { src: string; label: string }> = {
  macbook: { src: macbook, label: 'MacBook Pro 16"' },
  iphone: { src: iphone, label: 'iPhone 14 Pro' },
  watch: { src: watch, label: 'Apple Watch' },
}

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
  const [frame, setFrame] = useState<Frame>('device')
  const [device, setDevice] = useState<Device>('macbook')
  const [tilt, setTilt] = useState<Tilt>('flat')

  return (
    <div className={styles.panel}>
      <div className={styles.controls}>
        <div className={styles.toggleGroup} role="group" aria-label="Frame type">
          {(['device', 'browser', 'terminal'] as const).map((f) => (
            <button
              key={f}
              type="button"
              className={styles.toggleBtn}
              data-active={frame === f}
              onClick={() => setFrame(f)}
            >
              {f === 'device' ? 'Device' : f === 'browser' ? 'Browser' : 'Terminal'}
            </button>
          ))}
        </div>

        {frame === 'device' && (
          <div className={styles.toggleGroup} role="group" aria-label="Device">
            {(['macbook', 'iphone', 'watch'] as const).map((d) => (
              <button
                key={d}
                type="button"
                className={styles.toggleBtn}
                data-active={device === d}
                onClick={() => setDevice(d)}
              >
                {d === 'macbook' ? 'MacBook' : d === 'iphone' ? 'iPhone' : 'Watch'}
              </button>
            ))}
          </div>
        )}

        <div className={styles.toggleGroup} role="group" aria-label="Tilt">
          {(['flat', 'angled', 'deep'] as const).map((t) => (
            <button
              key={t}
              type="button"
              className={styles.toggleBtn}
              data-active={tilt === t}
              onClick={() => setTilt(t)}
            >
              {t === 'flat' ? 'Flat' : t === 'angled' ? 'Angled' : 'Deep'}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.stage}>
        {frame === 'device' && (
          <img
            key={device}
            src={DEVICES[device].src}
            alt=""
            className={styles.deviceImg}
            data-device={device}
            style={{ transform: TILT_TRANSFORM[tilt] }}
            loading="lazy"
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
          ? `${DEVICES[device].label}, one of the full device library.`
          : frame === 'browser'
          ? 'Light & dark browser shells for Chrome and Safari.'
          : 'A customizable terminal frame with a configurable file path.'}
      </p>
    </div>
  )
}
