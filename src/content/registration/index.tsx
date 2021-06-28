import "./index.css";
import config from "../../config";

// import dayjs from "dayjs";
const dayjs = require("dayjs");

const RegistrationChoice = () => {
  // TODO: not real-time; to update the page, the user must refresh.
  // this can easily be solved using a state variable and an effect to create
  // an interval timer, but this will decrease performance. this will also
  // make it easier for page viewers to access links before registration opens
  // since they can override the `Date` constructor to trick the browser into
  // thinking registration has opened.

  const currentTime = dayjs();

  const studentRegistrationIsOpen = currentTime.isBetween(
    config.registration.start,
    config.registration.end
  );
  let studentRegistrationLabel: string;
  if (studentRegistrationIsOpen) {
    studentRegistrationLabel = "is open";
  } else {
    if (config.registration.start > currentTime) {
      studentRegistrationLabel = "has not opened yet";
    } else if (currentTime >= config.registration.end) {
      studentRegistrationLabel = "has closed";
    } else {
      // unreachable code
      studentRegistrationLabel = "is currently unavailable";
    }
  }

  const volunteerRegistrationIsOpen = currentTime.isBetween(
    config.registration.start,
    config.event.start
  );

  return (
    <>
      <a className="anchor" id="register" href="#register">
        Register
      </a>
      <section id="register">
        <div className="container">
          {/* <div
         className="vertical-segment colored"
         style={{ left: "-15%", top: "-14%", height: "123%" }}
        ></div> */}
          <h1 className="section-title">Register</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {studentRegistrationIsOpen && (
              <a
                className="flatbutton"
                href="https://forms.gle/9a9S9f5ppA7KHMzf8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text">Participants</span>
              </a>
            )}
            {volunteerRegistrationIsOpen && (
              <a
                className="flatbutton long-label"
                href="https://forms.gle/e4KZ6px1vRN24YEy5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text">Judges/Mentors</span>
              </a>
            )}
          </div>
          <p className="large centered">
            Registration for participants {studentRegistrationLabel}!
            Participants must be current high school students. Computer science
            and engineering experience is not necessary, as we&#39;ll have
            workshops and mentors so you can learn. Please note that registering
            alone does not guarantee you will receive a ticket. Admission
            decisions will be made based on a variety of factors including the
            date/time you register.
          </p>
          <p className="large centered">
            Judges must be present during the entire judging process (5:00 p.m.
            to 7:30 p.m. on Sunday), but not necessarily during the entire
            hackathon. Computer science and engineering experience is preferred
            but not required.
          </p>
          <p className="large centered">
            Mentors help students if they have any technical questions, and
            don&#39;t have to be present online the entire time. Computer
            science and engineering experience is required.
          </p>
        </div>
      </section>
    </>
  );
};

export default RegistrationChoice;
