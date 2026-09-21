import styles from "./index.module.css";

export const BadgeSlider = () => {
  const badgeContent = (
    <>
      <a
        href="https://www.producthunt.com/products/portfolio-frame?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-portfolio-frame"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="Portfolio Frame - Frame, annotate, and export screenshots that look designed | Product Hunt"
          width="250"
          height="54"
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1250975&theme=dark&t=1789453556854"
        />
      </a>
      <a
        href="https://forg.to/projects/portfolio-frame"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://forg.to/api/badges/featured/portfolio-frame?theme=dark&shape=square"
          alt="Portfolio Frame - Featured on Forg on forg."
          height="48"
        />
      </a>
      <a
        href="https://www.indieneed.com/api/badge/click/1f9c1fc0-74e5-4d89-be46-a791894e34f3?to=review"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.indieneed.com/api/badge/1f9c1fc0-74e5-4d89-be46-a791894e34f3?variant=review"
          width="250"
          height="54"
          alt="Leave a review for Portfolio Frame on Indie Need"
          style={{ height: "48px" }}
        />
      </a>
      <a href="https://www.betterlaunch.co/product/portfolio-frame">
        <img
          src="https://www.betterlaunch.co/badge-live-dark.svg"
          alt="Better Launch"
          height="48"
        />
      </a>
      <a
        href="https://www.shipnlaunch.com/products/portfolio-frame-screenshot-beautifier-mo-yed8m"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.shipnlaunch.com/badges/featured-dark.svg"
          alt="Featured on ShipNLaunch"
          height="48"
        />
      </a>
      <a
        href="https://launch01.com/projects/portfolio-frame?utm_source=badge"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://r2.direasy-multi-tenant.focusapps.app/uploads/616d0b1a-3979-4b8c-94d1-b4f1fedd3ead/1782997259567/w4wbn1tx1uj/featured-on-dark.svg"
          alt="Featured on Launch01"
          height="48"
        />
      </a>
      <a
        href="https://linksalad.me/projects/portfolio-frame?utm_source=badge"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://linksalad.me/images/badges/featured-on-dark.svg"
          alt="Featured on LinkSalad"
          height="48"
        />
      </a>
    </>
  );

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderTrack}>
        {/* Original Set */}
        <div className={styles.badges}>{badgeContent}</div>
        {/* Duplicated Set for Seamless Looping */}
        <div className={styles.badges} aria-hidden="true">
          {badgeContent}
        </div>
      </div>
    </div>
  );
};
