import { useState, memo } from "react";

import { Tooltip } from "reactstrap";

import styles from "./logo.module.css";

type Props = {
  url: string;
  name: string;
  logo: string;
};

const Logo = ({ url, name, logo }: Props) => {
  const sponsorID: string = logo.replace(/\.[^/.]+$/, ""); // remove extension

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        data-tip="data-tip"
        data-for={sponsorID}
        id={`img-${sponsorID}`}
        className={styles.link}
      >
        <img
          id={`img-normal-${sponsorID}`}
          className={`${styles.logo} ${styles.normal} ${
            showTooltip ? styles.showLogo : styles.hideLogo
          }`}
          src={require(`../../../images/sponsors/normal/${logo}`).default}
          alt={name}
          loading="lazy"
          decoding="async"
        />
        <img
          id={`img-tint-${sponsorID}`}
          className={`${styles.logo} ${
            showTooltip ? styles.hideLogo : styles.showLogo
          }`}
          src={require(`../../../images/sponsors/tint/${logo}`).default}
          alt={name}
          loading="lazy"
          decoding="async"
        />
      </a>
      <Tooltip
        id={sponsorID}
        placement="top"
        type="dark"
        effect="solid"
        isOpen={showTooltip}
        toggle={() => setShowTooltip(!showTooltip)}
        autohide={false}
        target={`img-${sponsorID}`}
        className={styles.tooltip}
      >
        {name}
      </Tooltip>
    </>
  );
};

export default memo<Props>(Logo);
