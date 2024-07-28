import CountListOne from "./CountListOne";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.achievementsWrapper, className].join(" ")}>
      <div className={styles.achievements}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionHeading1}>
            <h1 className={styles.sectionTitle}>
              <span>{`Helping a local `}</span>
              <span className={styles.businessReinventItself}>
                business reinvent itself
              </span>
            </h1>
          </div>
          <div className={styles.description}>
            We reached here with our hard work and dedication
          </div>
        </div>
        <div className={styles.counts}>
          <div className={styles.row1}>
            <CountListOne
              icon="/icon-4.svg"
              number="2,245,341"
              label="Members"
            />
            <CountListOne icon="/icon-5.svg" number="46,328" label="Clubs" />
          </div>
          <div className={styles.row2}>
            <CountListOne
              icon="/icon-6.svg"
              number="828,867"
              label="Event Bookings"
            />
            <CountListOne
              icon="/icon-7.svg"
              number="1,926,436"
              label="Payments"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
