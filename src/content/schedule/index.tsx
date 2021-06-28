import { useState } from "react";
import type { FunctionComponent } from "react";

import type { Dayjs } from "dayjs";

import config from "../../config";

import styles from "./schedule.module.css";

interface ScheduleEvent {
  time: Dayjs;
  description: string;
}

const scheduleEvents: ScheduleEvent[] = [
  {
    time: config.event.start.set({ hour: 10 }), // 10:00 a.m.
    description: "Opening Ceremony",
  },
  {
    time: config.event.start.set({ hour: 11 }), // 11:00 a.m.
    description: "Hacking Begins",
  },
  {
    time: config.event.start.set({ hour: 11, minutes: 15 }), // 11:15 a.m.
    description: "Team Building",
  },
  {
    time: config.event.start.set({ hour: 12 }), // 12:00 p.m.
    description: "Check-in Form Due",
  },
  {
    time: config.event.start.set({ hour: 13 }), // 1:00 p.m.
    description: "Sponsorship Fair",
  },
  {
    time: config.event.start.set({ hour: 14 }), // 2:00 p.m.
    description: "Workshops Begin",
  },
  {
    time: config.event.start.set({ hour: 14, minute: 30 }), // 2:30 p.m.
    description: "TypeRacer Tournament",
  },
  {
    time: config.event.start.set({ hour: 16, minute: 30 }), // 4:30 p.m.
    description: "Among Us",
  },
  {
    time: config.event.start.set({ hour: 18 }), // 6:00 p.m.
    description: "Women in Tech Panel",
  },
  {
    time: config.event.start.set({ hour: 20 }), // 8:00 p.m.
    description: "MLH Event (Bob Ross MS Paint)",
  },
  {
    time: config.event.start.set({ hour: 21 }), // 9:00 p.m.
    description: "Chess Blitz Tournament",
  },
  {
    time: config.event.end.set({ hour: 11 }), // 11:00 a.m.
    description: "CSXBio Panel",
  },
  {
    time: config.event.end.set({ hour: 13 }), // 1:00 p.m.
    description: "CSXFinance Panel",
  },
  {
    time: config.event.end.set({ hour: 14 }), // 2:00 p.m.
    description: "Pictionary",
  },
  {
    time: config.event.end.set({ hour: 16 }), // 4:00 p.m.
    description: "Hacking Ends",
  },
  {
    time: config.event.end.set({ hour: 16, minute: 30 }), // 4:30 p.m.
    description: "Judging Starts",
  },
  {
    time: config.event.end.set({ hour: 21 }), // 9:00 p.m.
    description: "Keynote Speaker",
  },
  {
    time: config.event.end.set({ hour: 21, minute: 30 }), // 9:30 p.m.
    description: "Closing Ceremony",
  },
  {
    time: config.event.end.set({ hour: 22, minute: 30 }), // 10:30 p.m.
    description: "Hackathon Ends",
  },
].sort(
  (firstEl: ScheduleEvent, secondEl: ScheduleEvent) =>
    firstEl.time.valueOf() - secondEl.time.valueOf()
);
Object.freeze(scheduleEvents);

const scheduleData: {
  [day: string]: ScheduleEvent[];
} = {};
scheduleEvents.forEach((event: ScheduleEvent) => {
  // DateTime objects can't be used as indices
  const date = event.time.format("dddd, MMMM D");
  if (scheduleData[date]) {
    scheduleData[date].push(event);
  } else {
    scheduleData[date] = [event];
  }
});
Object.freeze(scheduleData);

const Schedule: FunctionComponent<{}> = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  return (
    <>
      <a className="anchor" id="schedule" href="#schedule">
        Schedule
      </a>
      <section id="schedule">
        <h1 className="section-title">Schedule</h1>
        <div className={styles.wrapper}>
          <ul className={styles.dates} role="tablist">
            {Object.keys(scheduleData).map((day, index) => (
              <li
                key={index}
                className={`${styles.categoryBubble} ${
                  selectedDayIndex === index ? styles.selected : ""
                }`}
                onClick={() => setSelectedDayIndex(index)}
                onKeyPress={() => setSelectedDayIndex(index)}
                role="tab"
                id={`schedule-tab-${index}`}
                tabIndex={0}
                aria-controls={`schedule-day-${index}`}
                aria-selected={selectedDayIndex === index}
              >
                {day}
              </li>
            ))}
          </ul>
          {Object.values(scheduleData).map((event, index) => (
            <table
              role="tabpanel"
              className={styles.scheduleArea}
              aria-labelledby={`schedule-tab-${index}`}
              id={`schedule-day-${index}`}
              hidden={index !== selectedDayIndex}
              aria-hidden={index !== selectedDayIndex}
              key={index}
            >
              <thead>
                <tr>Time</tr>
                <tr>Description</tr>
              </thead>
              <tbody>
                {event.map(({ time, description }, index) => (
                  <tr className={styles.event} key={index}>
                    <td className={styles.time}>{time.format("h:mm A")}</td>
                    <td>{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      </section>
    </>
  );
};

export default Schedule;
