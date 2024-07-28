import PropTypes from "prop-types";
import styles from "./Hero.module.css";

const Hero = ({ className = "" }) => {
  return (
    <section className={[styles.hero, className].join(" ")}>
      <div className={styles.heroSection}>
        <div className={styles.textParent}>
          <div className={styles.text}>
            <h1 className={styles.lessonsAndInsightsContainer}>
              <span>{`Lessons and insights `}</span>
              <span className={styles.from8Years}>from 8 years</span>
            </h1>
            <div className={styles.whereToGrow}>
              Where to grow your business as a photographer: site or social
              media?
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.label}>Register</div>
          </div>
        </div>
        <img
          className={styles.illustrationIcon}
          loading="lazy"
          alt=""
          src="/illustration.svg"
        />
        <div className={styles.dot}>
          <div className={styles.dotList} />
          <div className={styles.dotList1} />
          <div className={styles.dotList2} />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
