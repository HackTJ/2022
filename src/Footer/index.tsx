import SocialLinks from "./SocialLinks";
// import MLHTrustBadge from "./MLHTrustBadge";

import styles from "./footer.module.css";

const Footer = () => (
  <>
    <footer className={styles.footer}>
      <div className="register-button-block-old bottom">
        <div className="register-text">
          Be sure to follow our Social Media pages for updates!
        </div>
        <SocialLinks />
      </div>
    </footer>
    {/* <MLHTrustBadge /> */}
  </>
);

export default Footer;
