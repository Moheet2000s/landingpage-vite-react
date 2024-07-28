import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.unlockWrapper, className].join(" ")}>
      <div className={styles.unlock}>
        <div className={styles.unlock1}>
          <img
            className={styles.unlockLeftIcon}
            loading="lazy"
            alt=""
            src="/frame-35.svg"
          />
          <div className={styles.unlockRight}>
            <div className={styles.unlockParagraphs}>
              <h1 className={styles.theUnseenOf}>
                The unseen of spending three years at Pixelgrade
              </h1>
              <div className={styles.whenJoiningThe}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </div>
            </div>
            <div className={styles.button}>
              <a className={styles.label}>Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
