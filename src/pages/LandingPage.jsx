import FrameComponent6 from "../components/FrameComponent6";
import Hero from "../components/Hero";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import UnlockGraphic from "../components/UnlockGraphic";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterBig from "../components/FooterBig";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <FrameComponent6 />
      <Hero />
      <FrameComponent5 />
      <section className={styles.frameParent}>
        <div className={styles.sectionTitleWrapper}>
          <h1 className={styles.sectionTitle}>
            Manage your entire community in a single system
          </h1>
        </div>
        <div className={styles.description}>Who is Nextcent suitable for?</div>
      </section>
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <UnlockGraphic />
      <FrameComponent1 />
      <FrameComponent />
      <section className={styles.workDelegation}>
        <h1 className={styles.letNextcentDo}>
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <div className={styles.delegationButtonContainer}>
          <div className={styles.button}>
            <div className={styles.label}>Get a Demo</div>
            <div className={styles.arrowsDirectionsrightWrapper}>
              <img
                className={styles.arrowsDirectionsright}
                alt=""
                src="/16arrows--directionsright@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <FooterBig />
    </div>
  );
};

export default LandingPage;
