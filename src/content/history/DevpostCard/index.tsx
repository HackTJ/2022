import { memo } from "react";
import type { FunctionComponent } from "react";

import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import "./index.css";

type Props = {
  logo: string;
  iteration: string;
  year: string;
  url: string;
  disabled?: boolean;
};
const DevpostCard: FunctionComponent<Props> = ({
  logo,
  iteration,
  year,
  url,
  disabled = false,
}: Props) => (
  <Card className="history-section">
    <CardImg
      src={logo}
      style={{
        width: "200px",
        height: "200px",
      }}
      alt={`HackTJ ${iteration}`}
      decoding="async"
    />
    <CardBody className="info-container">
      <CardTitle tag="h2" className="section-title">
        HackTJ {iteration}
      </CardTitle>
      <CardSubtitle tag="h3" className="section-year">
        {year}
      </CardSubtitle>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a
        className="altbutton"
        style={{ width: "100%" }}
        href={disabled ? undefined : url}
        target="_blank"
        rel="noopener noreferrer"
      >
        DevPost
      </a>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
    </CardBody>
  </Card>
);

export default memo<Props>(DevpostCard);
