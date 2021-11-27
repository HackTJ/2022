import type { FunctionComponent } from "react";
import { useState, memo } from "react";

import { Card, CardTitle, CardImg, CardImgOverlay } from "reactstrap";

import "./index.css";

type Props = {
  name: string;
  image: string;
  about: string | JSX.Element;
};

const TeamPicture: FunctionComponent<Props> = ({
  name,
  image,
  about,
}: Props) => {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <li className={`question-group ${showAbout ? "is-open" : ""}`}>
      <Card
        className="figure fade question"
        onClick={() => setShowAbout(!showAbout)}
      >
        <CardImg
          src={require(`../../../images/team/${image}`).default}
          alt={name}
          loading="lazy"
          width="200"
          height="200"
          decoding="async"
        />
        <CardImgOverlay>
          <CardTitle className="figcaption">{name}</CardTitle>
        </CardImgOverlay>
      </Card>
      <div
        className="answer"
        style={{
          maxHeight: showAbout ? "500px" : 0,
        }}
      >
        <p>{about}</p>
      </div>
    </li>
  );
};

export default memo<Props>(TeamPicture);
