import { StrictMode } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import reportWebVitals from "./reportWebVitals";

import openGraphImage from "./images/opengraph.png";
import twitterImage from "./images/twitter.png";
import preval from "preval.macro";

// Redirect to /2022:
// window.location.href = "https://hacktj.org/2022";

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <HelmetProvider>
      <Helmet>
        {/*
          openGraphImage and twitterImage are big, so we know Webpack/CRA won't
          inline them; instead, URLs to the assets will be injected.
         */}
        <meta property="og:image" content={openGraphImage} />
        <meta property="twitter:image" content={twitterImage} />

        <meta
          http-equiv="last-modified"
          content={preval`module.exports = new Date().toLocaleString();`}
        />
      </Helmet>
      <App />
    </HelmetProvider>
  </StrictMode>
);
if (rootElement?.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
