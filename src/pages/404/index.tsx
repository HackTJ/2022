import { Helmet } from "react-helmet-async";
import NavigationBar from "../../NavigationBar";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>{document.title} - Error 404</title>
      </Helmet>
      <NavigationBar />
      <a className="anchor" id="notfound" href="#notfound">
        Page Not Found
      </a>
      <section id="notfound">
        <div className="container">
          <div className="animation-container vertical top right extra-right extra-height">
            <div className="animated" />
          </div>
          <h1 className="section-title" style={{ marginTop: "20vh" }}>
            Error 404
          </h1>
          <p className="large" style={{ textAlign: "center" }}>
            We couldn&#39;t find that page, sorry.
          </p>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
