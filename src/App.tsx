import PageScrollProgress from "./PageScrollProgress";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

import RegistrationPage from "./pages/registration";
import HistoryPage from "./pages/history";
import MainPage from "./pages/index";
import NotFoundPage from "./pages/404";

import styles from "./App.module.css";

// it would be nice to automagically enable the `/registration` route based
// on the time (i.e., open 1 week before registration opens and close when
// event starts).

// if we try to do this at client-side runtime, this results in a flash/flicker
// for the `/registration` route when showRegistrationPage is `true`. this is
// because React Router first returns <NotFoundPage /> because of the catch-all
// 404, and then replaces the webpage content with the contents of
// `RegistrationPage`. pre-rendering via react-snap also adds complications
// when using this method because react-snap may not detect the /registration
// route at build-time.

// trying to do this at build-time using `preval.macro` is non-trivial and
// we don't get the "magic" of automagically enabling/disabling the route.

// as such, we need to manually enable and disable the `/registration` route
// when needed.

const App = () => (
  <div className={styles.content}>
    <div>
      <PageScrollProgress />
      <BrowserRouter>
        <Routes basename="/2021">
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    <Footer />
  </div>
);

export default App;
