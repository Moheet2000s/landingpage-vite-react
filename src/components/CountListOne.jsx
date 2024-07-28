import PropTypes from "prop-types";
import styles from "./CountListOne.module.css";

const CountListOne = ({ className = "", icon, number, label }) => {
  return (
    <div className={[styles.countListOne, className].join(" ")}>
      <img className={styles.icon} alt="" src={icon} />
      <div className={styles.details}>
        <b className={styles.number}>{number}</b>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
};

CountListOne.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  number: PropTypes.string,
  label: PropTypes.string,
};

export default CountListOne;
