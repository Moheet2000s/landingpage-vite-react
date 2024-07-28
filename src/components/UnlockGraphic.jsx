import PropTypes from "prop-types";
import styles from "./UnlockGraphic.module.css";

const UnlockGraphic = ({ className = "" }) => {
  return (
    <section className={[styles.unlockGraphic, className].join(" ")}>
      <div className={styles.unlock}>
        <div className={styles.graphicElements}>
          <img className={styles.floorIcon} alt="" src="/floor.svg" />
          <div className={styles.graphicDetails}>
            <img
              className={styles.backgroundCompleteIcon}
              alt=""
              src="/backgroundcomplete.svg"
            />
            <img
              className={styles.plantIcon}
              loading="lazy"
              alt=""
              src="/plant.svg"
            />
            <img
              className={styles.padlockIcon}
              loading="lazy"
              alt=""
              src="/padlock.svg"
            />
            <div className={styles.signUpIconParent}>
              <img
                className={styles.signUpIcon}
                alt=""
                src="/sign-up-icon.svg"
              />
              <div className={styles.signUpBubbles}>
                <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
                <div className={styles.signUpContainer}>
                  <img
                    className={styles.signUpIcon1}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <div className={styles.singUp}>SING UP</div>
                </div>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-3.svg"
                />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-4.svg"
                />
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-5.svg"
                  />
                  <div className={styles.vectorGroup}>
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className={styles.vectorIcon5}
                      alt=""
                      src="/vector-6.svg"
                    />
                  </div>
                </div>
                <div className={styles.bubbleIconListOneParent}>
                  <img
                    className={styles.bubbleIconListOne}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <img
                    className={styles.vectorIcon6}
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className={styles.unlockGraphicIcon}
                    alt=""
                    src="/vector-9.svg"
                  />
                </div>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon7}
                    alt=""
                    src="/vector-10.svg"
                  />
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.vectorIcon8}
                      alt=""
                      src="/vector-11.svg"
                    />
                    <img
                      className={styles.unlockGraphicIcon1}
                      alt=""
                      src="/vector-12.svg"
                    />
                    <img
                      className={styles.unlockGraphicIcon2}
                      alt=""
                      src="/vector-13.svg"
                    />
                    <img className={styles.groupIcon} alt="" src="/group.svg" />
                  </div>
                </div>
                <div className={styles.bottomDecorations}>
                  <img
                    className={styles.bottomDecorativeShape}
                    alt=""
                    src="/vector-14.svg"
                  />
                  <img
                    className={styles.bottomDecorativeShape1}
                    alt=""
                    src="/vector-15.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon9}
                  alt=""
                  src="/vector-16.svg"
                />
                <img
                  className={styles.vectorIcon10}
                  alt=""
                  src="/vector-17.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.backgroundSimpleParent}>
            <img
              className={styles.backgroundSimpleIcon}
              alt=""
              src="/backgroundsimple.svg"
            />
            <img
              className={styles.speechBubbleIcon}
              alt=""
              src="/speechbubble.svg"
            />
          </div>
          <div className={styles.characterDecorativeShapeParent}>
            <img
              className={styles.characterDecorativeShape}
              alt=""
              src="/vector-18.svg"
            />
            <img
              className={styles.characterDecorativeShape1}
              alt=""
              src="/vector-19.svg"
            />
            <img
              className={styles.characterDecorativeShape2}
              alt=""
              src="/vector-20.svg"
            />
            <img
              className={styles.characterDecorativeShape3}
              alt=""
              src="/vector-21.svg"
            />
            <img
              className={styles.characterDecorativeShape4}
              alt=""
              src="/vector-22.svg"
            />
            <img
              className={styles.characterDecorativeShape5}
              alt=""
              src="/vector-23.svg"
            />
            <img
              className={styles.characterDecorativeShape6}
              alt=""
              src="/vector-24.svg"
            />
            <img
              className={styles.characterDecorativeShape7}
              alt=""
              src="/vector-25.svg"
            />
            <img
              className={styles.characterDecorativeShape8}
              alt=""
              src="/vector-26.svg"
            />
            <img
              className={styles.characterDecorativeShape9}
              alt=""
              src="/vector-27.svg"
            />
            <img className={styles.characterIcon} alt="" src="/character.svg" />
          </div>
        </div>
        <div className={styles.footerDesignContentWrapper}>
          <div className={styles.footerDesignContent}>
            <div className={styles.howToDesignYourSiteFooterParent}>
              <h1 className={styles.howToDesign}>
                How to design your site footer like we did
              </h1>
              <div className={styles.oneEventCalendar}>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
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

UnlockGraphic.propTypes = {
  className: PropTypes.string,
};

export default UnlockGraphic;
