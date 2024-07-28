import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.customersWrapper, className].join(" ")}>
      <div className={styles.customers}>
        <div className={styles.wrapperImage9}>
          <img
            className={styles.image9Icon}
            loading="lazy"
            alt=""
            src="/image-9@2x.png"
          />
        </div>
        <div className={styles.customerTestimonial}>
          <div className={styles.content}>
            <div className={styles.weHaveEnjoyed}>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </div>
            <div className={styles.customerInfo}>
              <h3 className={styles.timSmith}>Tim Smith</h3>
              <div className={styles.britishDragonBoat}>
                British Dragon Boat Racing Association
              </div>
            </div>
          </div>
          <div className={styles.logoSlider}>
            <div className={styles.logoContainer}>
              <img className={styles.logoIcon} alt="" src="/logo-7.svg" />
              <img className={styles.logoIcon1} alt="" src="/logo-8.svg" />
              <img className={styles.logoIcon2} alt="" src="/logo-9.svg" />
              <img className={styles.logoIcon3} alt="" src="/logo-10.svg" />
              <img className={styles.logoIcon4} alt="" src="/logo-11.svg" />
              <img className={styles.logoIcon5} alt="" src="/logo-12.svg" />
            </div>
            <div className={styles.viewCustomers}>
              <h3 className={styles.meetAllCustomers}>Meet all customers</h3>
              <img
                className={styles.arrowsDirectionsright}
                alt=""
                src="/24arrows--directionsright@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
