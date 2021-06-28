import { Link } from "react-router-dom";

import Logo from "./Logo";

import "./index.css";

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
          {[
            {
              url: "https://eastbanctech.com",
              logo: "eastbanc.png",
              name: "EastBanc Technologies",
            },
          ].map((company) => (
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
          {[
            {
              url: "https://phone2action.com/",
              logo: "phone2action.png",
              name: "Phone2Action",
            },
            {
              url: "https://lunchclub.com/",
              logo: "lunchclub.png",
              name: "Lunchclub",
            },
            {
              url: "https://www.goarmy.com/rotc/ways-to-attend.html",
              logo: "armyrotc.png",
              name: "Army ROTC",
            },
            {
              url: "https://replit.com/",
              logo: "replit.png",
              name: "Replit",
            },
          ].map((company) => (
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
          {[
            {
              url: "https://www.yext.com/",
              logo: "yext.png",
              name: "Yext",
            },
          ].map((company) => (
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
          {[
            {
              url: "https://www.cvent.com",
              logo: "cvent.png",
              name: "Cvent",
            },
            {
              url: "https://tjptsa.com/",
              logo: "tjptsa.png",
              name: "TJ PTSA",
            },
          ].map((company) => (
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
          {[
            {
              url: "https://www.inspiritai.com/",
              logo: "inspiritai.png",
              name: "Inspirit AI",
            },
            {
              url: "https://www.hestia.academy/",
              logo: "hestiaacademy.png",
              name: "Hestia Academy",
            },
            {
              url: "https://www.echoar.xyz/",
              logo: "echoar.png",
              name: "EchoAR",
            },
            {
              url: "https://thecodex.me/",
              logo: "thecodex.png",
              name: "The Codex",
            },
            {
              url: "https://www.volarelabs.io/",
              logo: "volarelabs.png",
              name: "Volare Labs",
            },
            {
              url: "https://hackp.ac/mlh-stickermule-hackathons",
              logo: "stickermule.png",
              name: "Sticker Mule",
            },
          ].map((company) => (
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
          {[
            {
              url: "https://mlh.io",
              logo: "mlh.png",
              name: "Major League Hacking",
            },
            {
              url: "https://www.tjpartnershipfund.org",
              logo: "tjpartnershipfund.png",
              name: "TJ Partnership Fund",
            },
            {
              url: "https://www.brandmakers.com/",
              logo: "brandmakers.png",
              name: "Brand Makers",
            },
          ].map((partner) => (
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
          <Link
            to="sponsorship7.5.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            7.5 sponsorship packet
          </Link>{" "}
          and{" "}
          <Link
            to="sponsorship8.0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            8.0 sponsorship packet
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
