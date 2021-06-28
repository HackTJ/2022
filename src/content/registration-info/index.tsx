import "./index.css";

import config from "../../config";

import type { Dayjs } from "dayjs";

const dateFormat = (date: Dayjs) => date.format("dddd, MMMM D");

const timeFormat = (date: Dayjs) => date.format("h:mm A");
const dateTimeFormat = (date: Dayjs) =>
  `${dateFormat(date)} at ${timeFormat(date)}`;
const registrationStartDate = dateTimeFormat(config.registration.start);
const registrationEndDate = dateTimeFormat(config.registration.end);

const RegistrationInfo = () => (
  <>
    <a className="anchor" id="registration" href="#registration">
      Registration Info
    </a>
    <section className="registration-info">
      <div className="container">
        {/* <div className="vertical-segment colored"></div> */}
        <h1 className="section-title">Registration Info</h1>
        <p className="large centered">
          Registration for participants opens on {registrationStartDate} and
          closes on {registrationEndDate}.
        </p>
        <p className="large centered">
          When you register you&apos;ll be asked for the{" "}
          <a href={`${process.env.PUBLIC_URL || ""}/forms/field_trip.pdf`}>
            FCPS field trip form
          </a>
          . If you want to be able to submit your registration quickly, fill it
          out in advance. Remember, HackTJ is only open to current high school
          students in the United States!
        </p>
        <div className="register-button-block-old top">
          {/* TODO: change from <a> to <Link> */}
          <a
            className="flatbutton register-button"
            href={`${process.env.PUBLIC_URL || ""}/forms/field_trip.pdf`}
          >
            Field Trip Form
          </a>
        </div>
        <p className="large centered">
          When registering you&#39;ll also have the option to upload a
          r&eacute;sum&eacute;, which will be given to certain sponsors looking
          to recruit hackers. You will also have a chance to submit your
          r&eacute;sum&eacute; after you register if you are not ready to upload
          it now.
        </p>
        <p className="large centered">
          Please note that registering alone does not guarantee you will receive
          a ticket. Tickets decisions will be made based on a variety of factors
          including the date/time you register, so make sure to sign up quickly!
          {/* Tickets decisions will be sent out on March 2. */}
        </p>
      </div>
    </section>
  </>
);

export default RegistrationInfo;
