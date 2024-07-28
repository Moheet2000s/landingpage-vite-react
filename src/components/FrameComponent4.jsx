import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.membershipContentWrapper, className].join(" ")}>
      <div className={styles.membershipContent}>
        <div className={styles.membershipTypes}>
          <div className={styles.membershipOrganizatios}>
            <div className={styles.membershipIcons}>
              <div className={styles.icon}>
                <div className={styles.iconBackground}>
                  <div className={styles.iconBackgroundChild} />
                  <img className={styles.icon1} alt="" src="/icon-1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.membershipDescriptions}>
              <h1 className={styles.membershipOrganisations}>
                Membership Organisations
              </h1>
              <div className={styles.softwareDescription}>
                <div className={styles.ourMembershipManagement}>
                  Our membership management software provides full automation of
                  membership renewals and payments
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.nationalAssociations}>
          <div className={styles.iconWrapper}>
            <img className={styles.icon2} alt="" src="/icon-2.svg" />
          </div>
          <div className={styles.nationalAssociationsParent}>
            <h1 className={styles.nationalAssociations1}>
              National Associations
            </h1>
            <div className={styles.ourMembershipManagementSoftWrapper}>
              <div className={styles.ourMembershipManagement1}>
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
        </div>
        <div className={styles.membershipTypes1}>
          <div className={styles.nationalAssociations2}>
            <div className={styles.iconContainer}>
              <img className={styles.icon3} alt="" src="/icon-3.svg" />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.clubsAndGroupsWrapper}>
                <h1 className={styles.clubsAndGroups}>Clubs And Groups</h1>
              </div>
              <div className={styles.ourMembershipManagement2}>
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
