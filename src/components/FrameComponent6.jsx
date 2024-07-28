import PropTypes from "prop-types";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
          <div className={styles.nexcentWrapper}>
            <img
              className={styles.nexcentIcon}
              loading="lazy"
              alt=""
              src="/nexcent.svg"
            />
          </div>
        </div>
      </div>
      <nav className={styles.pageLabelsWrapper}>
        <nav className={styles.pageLabels}>
          <a className={styles.label}>Home</a>
          <a className={styles.label1}>Service</a>
          <a className={styles.label2}>Feature</a>
          <a className={styles.label3}>Product</a>
          <a className={styles.label4}>Testimonial</a>
          <a className={styles.label5}>FAQ</a>
        </nav>
      </nav>
      <div className={styles.headerActions}>
        <div className={styles.button}>
          <a className={styles.login}>Login</a>
        </div>
        <div className={styles.button1}>
          <a className={styles.signUp}>Sign up</a>
        </div>
      </div>
    </header>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
