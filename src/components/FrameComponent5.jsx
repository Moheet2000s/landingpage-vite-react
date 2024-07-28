import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={[styles.landingPageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.sectionTitleParent}>
            <h1 className={styles.sectionTitle}>Our Clients</h1>
            <div className={styles.description}>
              We have been working with some Fortune 500+ clients
            </div>
          </div>
        </div>
        <div className={styles.clientsLogos}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
          <img className={styles.logoIcon1} alt="" src="/logo-1.svg" />
          <img className={styles.logoIcon2} alt="" src="/logo-2.svg" />
          <img className={styles.logoIcon3} alt="" src="/logo-3.svg" />
          <img className={styles.logoIcon4} alt="" src="/logo-4.svg" />
          <img className={styles.logoIcon5} alt="" src="/logo-5.svg" />
          <img className={styles.logoIcon6} alt="" src="/logo-2.svg" />
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
