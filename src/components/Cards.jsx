import PropTypes from "prop-types";
import styles from "./Cards.module.css";

const Cards = ({ className = "", image18, creatingStreamlinedSafegu }) => {
  return (
    <div className={[styles.cards, className].join(" ")}>
      <img className={styles.image18Icon} loading="lazy" alt="" src={image18} />
      <div className={styles.content}>
        <h3 className={styles.creatingStreamlinedSafeguard}>
          {creatingStreamlinedSafegu}
        </h3>
        <div className={styles.cardLinks}>
          <h3 className={styles.readmore}>Readmore</h3>
          <img
            className={styles.arrowsDirectionsright}
            alt=""
            src="/24arrows--directionsright-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  className: PropTypes.string,
  image18: PropTypes.string,
  creatingStreamlinedSafegu: PropTypes.string,
};

export default Cards;
