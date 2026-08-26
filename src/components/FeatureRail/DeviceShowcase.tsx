import iphone from '../../assets/devices/iphone.png'
import watch from '../../assets/devices/watch.png'
import macbook from '../../assets/devices/macbook.png'
import styles from './DeviceShowcase.module.css'

export default function DeviceShowcase() {
  return (
    <div className={styles.grid}>
      <div className={`${styles.tile} ${styles.tileMacbook}`}>
        <img src={macbook} alt="" className={styles.imgMacbook} loading="lazy" />
        <span className={styles.tileLabel}>MacBook Pro 16"</span>
      </div>

      <div className={`${styles.tile} ${styles.tileDark}`}>
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
        <span className={styles.tileLabel}>Browser frame</span>
      </div>

      <div className={`${styles.tile} ${styles.tileDark}`}>
        <div className={styles.chipChrome}>
          <span />
          <span />
          <span />
          <span className={styles.chipPath}>~/export</span>
        </div>
        <div className={styles.terminalBody}>
          <p>
            <span className={styles.prompt}>❯</span> export --tilt 12deg
          </p>
          <p className={styles.cursorLine}>
            <span className={styles.prompt}>❯</span>
            <span className={styles.cursor} />
          </p>
        </div>
        <span className={styles.tileLabel}>Terminal mode</span>
      </div>

      <div className={styles.tile}>
        <img src={iphone} alt="" className={styles.imgIphone} loading="lazy" />
        <span className={styles.tileLabel}>iPhone 14 Pro</span>
      </div>

      <div className={styles.tile}>
        <img src={watch} alt="" className={styles.imgWatch} loading="lazy" />
        <span className={styles.tileLabel}>Apple Watch</span>
      </div>
    </div>
  )
}
