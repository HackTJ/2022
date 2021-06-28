import config from "../../config";

import dayjs from "dayjs";

const dateFormat = (date: dayjs.Dayjs) => date.format("dddd, MMMM D");
const eventStartDate = dateFormat(config.event.start);
const eventEndDate = dateFormat(config.event.end);

const timeFormat = (date: dayjs.Dayjs) => date.format("h:mm A");
const dateTimeFormat = (date: dayjs.Dayjs) =>
  `${dateFormat(date)} at ${timeFormat(date)}`;
const registrationStartDate = dateTimeFormat(config.registration.start);
const registrationEndDate = dateTimeFormat(config.registration.end);

const data = [
  {
    question: "What is HackTJ?",
    answer: (
      <span>
        HackTJ is a student-run hackathon where you will have 24 hours to learn
        how to code and/or work with your friends to make your idea come to
        life.
      </span>
    ),
  },
  {
    question: "When is HackTJ?",
    answer: (
      <span>
        HackTJ will start on {eventStartDate} and run until {eventEndDate}.
      </span>
    ),
  },
  {
    question: "Who can attend?",
    answer: (
      <span>
        HackTJ is open to any and all current high school students. If
        you&apos;re not a high school student but would like to attend, consider
        coming as a judge, mentor, or volunteer.
      </span>
    ),
  },
  {
    question: "Is there any cost?",
    answer: (
      <span>Nope! Thanks to our sponsors, HackTJ is completely free!</span>
    ),
  },
  {
    question: "Is there a deadline?",
    answer: (
      <>
        <p>
          Registration for participants, judges, mentors, and volunteers opens
          on {registrationStartDate}.
        </p>
        <p>
          Registration for participants closes on <b>{registrationEndDate}</b>
          &mdash;this is a hard deadline; we do not accept submissions after
          this time.{" "}
        </p>
        <p>
          Judges, mentors, and volunteers will be able to register until the
          start of the event.
        </p>
      </>
    ),
  },
  {
    question: "Do you have a code of conduct?",
    answer: (
      <span>
        Yes, good question! We have adopted the{" "}
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          MLH code of conduct
        </a>
        , which all attendees will be required to adhere to.
      </span>
    ),
  },
  {
    question: "Isn't hacking illegal?",
    answer: (
      <span>
        In the context of a hackathon, &quot;hacking&quot; is to build a real
        application over the length of the event. It&apos;s important to not
        confuse this with illegal hacking, which is gaining unauthorized access
        to a computer.
      </span>
    ),
  },
  {
    question: "Do I need a team?",
    answer: (
      <span>
        If you already have a team of 2-4 people you want to work with,
        that&apos;s awesome! If not don&apos;t worry because we&apos;ll have an
        opportunity for people to join a team if they need one.
      </span>
    ),
  },
  {
    question: "What if I don't know how to code?",
    answer: (
      <span>
        Come to HackTJ! Coding is fun, creative, and an important skill, and
        HackTJ is the perfect way to learn. We&apos;ll have workshops and
        mentors to help guide you.
      </span>
    ),
  },
  {
    question: "What prizes can I win?",
    answer: (
      <p>
        HackTJ hosts prizes for the best projects in the following categories:
        <ul>
          <li>Overall Hack</li>
          <li>Web App</li>
          <li>Mobile App</li>
          <li>Machine Learning/Artificial Intelligence Hack</li>
          <li>Design</li>
          <li>Social Impact</li>
          <li>Beginner Hack (first-year coder teams)</li>
        </ul>
        Major League Hacking and some of our partners also host their own
        Sponsored Prizes, which you can explore when the 8.0 Devpost goes live.
      </p>
    ),
  },
  {
    question: "How do I register?",
    answer: (
      <ol>
        <li>
          On {registrationStartDate}, a button will appear at the top of this
          site. Click it.
        </li>
        <li>
          You will be redirected to a page where you can click the appropriate
          form.
        </li>
        <li>
          Fill out the questions. Near the end, there will be a few questions
          where you can upload your forms.
          <ul>
            <li>
              In order to speed up the registration process, print out these
              forms, fill them out, and scan them beforehand.
            </li>
          </ul>
        </li>
      </ol>
    ),
  },
  {
    question: "How are tickets decisions made?",
    answer: (
      <span>
        Tickets decisisons are made based on a variety of factors, including the
        registration time. Sign up quickly to increase the chance that you are
        given a HackTJ 8.0 ticket!
      </span>
    ),
  },
];
Object.freeze(data);

export default data;
