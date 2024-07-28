import Cards from "./Cards";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.communityUpdatesWrapper, className].join(" ")}>
      <div className={styles.communityUpdates}>
        <div className={styles.community}>
          <h1 className={styles.sectionTitle}>Caring is the new marketing</h1>
          <div className={styles.description}>
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </div>
        </div>
        <div className={styles.updateCards}>
          <Cards
            image18="/image-18@2x.png"
            creatingStreamlinedSafegu="Creating Streamlined Safeguarding Processes with OneRen"
          />
          <Cards
            image18="/image-19@2x.png"
            creatingStreamlinedSafegu="What are your safeguarding responsibilities and how can you manage them?"
          />
          <Cards
            image18="/image-20@2x.png"
            creatingStreamlinedSafegu="Revamping the Membership Model with Triathlon Australia"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
