import { Link } from "react-router-dom";

import Logo from "./Logo";

import "./index.css";

interface Organization {
  name: string;
  url: string;
  logo: string;
  key: string;
}

const Sponsors = () => (
  <>
    <a className="anchor" id="sponsor" href="#sponsor">
      Sponsors
    </a>
    <section id="sponsors">
      <div className="container">
        {/* <div
         className="vertical-segment colored"
         style={{
           borderLeft: "6px solid var(--theme-primary)",
           height: "3%",
           position: "absolute",
           left: "auto",
           right: "-14.3%",
           top: "-3.45%"
         }}
        ></div>
        <div
         className="horizontal-segment colored"
         style={{ width: "125%", top: "-0.7%", right: "-14.4%" }}
        ></div>
        <div
         className="vertical-segment colored"
         style={{
           borderLeft: "6px solid #64d861",
           left: "-10.6%",
           top: "-0.6%",
           height: "100.6"
         }}
        ></div> */}
        <h1 className="section-title">Sponsors</h1>

        {/* Platinum Tier */}
        <h2 className="tier-title">PLATINUM</h2>
        <div className="partner-container">
          {([] as Organization[]).map((company: Organization) => (
            <Logo
              name={company.name}
              url={company.url}
              logo={company.logo}
              key={company.name}
            />
          ))}
        </div>

        {/* Gold Tier */}
        <h2 className="tier-title">GOLD</h2>
        <div className="partner-container">
          {([] as Organization[]).map((company: Organization) => (
            <Logo
              name={company.name}
              url={company.url}
              logo={company.logo}
              key={company.name}
            />
          ))}
        </div>

        {/* Silver Tier */}
        <h2 className="tier-title">SILVER</h2>
        <div className="partner-container">
          {([] as Organization[]).map((company: Organization) => (
            <Logo
              name={company.name}
              url={company.url}
              logo={company.logo}
              key={company.name}
            />
          ))}
        </div>

        {/* Bronze Tier */}
        <h2 className="tier-title">BRONZE</h2>
        <div className="partner-container">
          {([] as Organization[]).map((company: Organization) => (
            <Logo
              name={company.name}
              url={company.url}
              logo={company.logo}
              key={company.name}
            />
          ))}
        </div>

        {/* Prize Tier */}
        <h2 className="tier-title">PRIZE</h2>
        <div className="partner-container">
          {([] as Organization[]).map((company: Organization) => (
            <Logo
              name={company.name}
              url={company.url}
              logo={company.logo}
              key={company.name}
            />
          ))}
        </div>
        <p className="large">
          Can&#39;t see our sponsors? Try disabling ad block for this page.
        </p>
        <h1 className="section-title">Partners</h1>
        <div className="partner-container">
          {([] as Organization[]).map((partner: Organization) => (
            <Logo
              name={partner.name}
              url={partner.url}
              logo={partner.logo}
              key={partner.name}
            />
          ))}
        </div>
        <p className="large">
          Interested in sponsoring? Check out our{" "}
          <Link to="sponsorship.pdf" target="_blank" rel="noopener noreferrer">
            9.0 sponsorship packet
          </Link>
          . Please email us at{" "}
          <a href="mailto:sponsor@hacktj.org">sponsor@hacktj.org</a> if
          you&#39;re interested or have any questions!
        </p>
      </div>
    </section>
  </>
);

export default Sponsors;
