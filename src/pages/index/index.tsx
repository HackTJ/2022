import Landing from "../../content/landing";
import NavigationBar from "../../NavigationBar";
import Intro from "../../content/intro";
import RegistrationInfo from "../../content/registration-info";
import RegistrationChoice from "../../content/registration";
import Questions from "../../content/questions";
import Sponsors from "../../content/sponsors";
// import Statistics from "../../content/statistics";
import Schedule from "../../content/schedule";
// import Team from "../../content/team";
// import VenueMap from "../../content/venue-map";

import config from "../../config";

import dayjs from "dayjs";

const MainPage = () => {
  const today = dayjs();
  const oneWeekAfter = today.add(7, "day");

  const showRegistrationInfo = oneWeekAfter >= config.registration.start;
  return (
    <>
      <Landing />
      <NavigationBar />
      <Intro />
      {showRegistrationInfo && (
        <>
          <RegistrationInfo />
          <RegistrationChoice />
        </>
      )}
      <Questions />
      <Sponsors />
      {/* <Statistics /> */}
      <Schedule />
      {/* <Team /> */}
      {/* <VenueMap /> */}
    </>
  );
};

export default MainPage;
