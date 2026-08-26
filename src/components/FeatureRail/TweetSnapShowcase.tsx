import styles from "./TweetSnapShowcase.module.css";

export default function TweetSnapShowcase() {
  return (
    <div className={styles.panel}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.avatar} />
          <div className={styles.identity}>
            <span className={styles.name}>
              Sud <span className={styles.badge}>✓</span>
            </span>
            <span className={styles.handle}>@buildwithsud</span>
          </div>
        </div>
        <p className={styles.body}>
          shipped Twitter Snap today, turn any tweet into a clean, styled card.
          no screenshot, no cropping, no ugly UI chrome.
        </p>
        <span className={styles.timestamp}>9:41 AM · Aug 21, 2026</span>
        <div className={styles.stats}>
          <span>128 Replies</span>
          <span>842 Reposts</span>
          <span>3.4K Likes</span>
        </div>
      </div>

      <div className={`${styles.card} ${styles.cardDark}`}>
        <div className={styles.header}>
          <span className={styles.avatar} data-dark="true" />
          <div className={styles.identity}>
            <span className={styles.nameDark}>indie hacker</span>
            <span className={styles.handleDark}>@buildinpublic</span>
          </div>
        </div>
        <p className={styles.bodyDark}>
          dark mode tweet cards look this clean out of the box
        </p>
        <span className={styles.timestampDark}>Dark theme</span>
      </div>

      <p className={styles.caption}>
        Twitter Snap: light &amp; dark tweet card themes
      </p>
    </div>
  );
}
