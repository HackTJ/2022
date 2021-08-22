import type { FunctionComponent } from "react";

import "./index.css";

const SocialLinks: FunctionComponent<{}> = () => (
  <div className="social-links">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/HackTJOfficial"
      aria-label="Twitter"
    >
      <span className="social pe-so-twitter"></span>
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://facebook.com/HackTJOfficial"
      aria-label="Facebook"
    >
      <span className="social pe-so-facebook empty"></span>
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://instagram.com/hacktjofficial"
      aria-label="Instagram"
    >
      <span className="social pe-so-instagram empty"></span>
    </a>
  </div>
);

export default SocialLinks;
