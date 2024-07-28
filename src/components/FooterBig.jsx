import PropTypes from "prop-types";
import styles from "./FooterBig.module.css";

const FooterBig = ({ className = "" }) => {
  return (
    <footer className={[styles.footerBig4, className].join(" ")}>
      <div className={styles.companyInfo}>
        <div className={styles.logo}>
          <img className={styles.icon} alt="" src="/icon-8.svg" />
          <div className={styles.brandNameContainer}>
            <img className={styles.nexcentIcon} alt="" src="/nexcent-1.svg" />
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.copyright2020}>
            Copyright © 2020 Nexcent ltd.
          </div>
          <div className={styles.allRightsReserved}>All rights reserved</div>
        </div>
        <div className={styles.socialLinks}>
          <img
            className={styles.socialIcons}
            loading="lazy"
            alt=""
            src="/social-icons.svg"
          />
          <img
            className={styles.socialIcons1}
            alt=""
            src="/social-icons-1.svg"
          />
          <img
            className={styles.socialIcons2}
            alt=""
            src="/social-icons-2.svg"
          />
          <img
            className={styles.socialIcons3}
            alt=""
            src="/social-icons-3.svg"
          />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.linkColumns}>
          <div className={styles.col1}>
            <h3 className={styles.company}>Company</h3>
            <div className={styles.listItems}>
              <a className={styles.aboutUs}>About us</a>
              <a className={styles.blog}>Blog</a>
              <div className={styles.contactUs}>Contact us</div>
              <a className={styles.pricing}>Pricing</a>
              <div className={styles.testimonials}>Testimonials</div>
            </div>
          </div>
          <div className={styles.col2}>
            <h3 className={styles.support}>Support</h3>
            <div className={styles.listItems1}>
              <div className={styles.helpCenter}>Help center</div>
              <div className={styles.termsOfService}>Terms of service</div>
              <a className={styles.legal}>Legal</a>
              <a className={styles.privacyPolicy}>Privacy policy</a>
              <div className={styles.status}>Status</div>
            </div>
          </div>
        </div>
        <div className={styles.col3}>
          <h3 className={styles.stayUpTo}>Stay up to date</h3>
          <div className={styles.emailInputField}>
            <div className={styles.inputFieldBg} />
            <div className={styles.yourEmailAddress}>Your email address</div>
            <div className={styles.sendButtonContainer}>
              <img
                className={styles.essentialIconsSend}
                alt=""
                src="/essential-icons--send.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterBig.propTypes = {
  className: PropTypes.string,
};

export default FooterBig;
