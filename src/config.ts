const dayjs = require("dayjs");
const objectSupport = require("dayjs/plugin/objectSupport");
const isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(objectSupport);
dayjs.extend(isBetween);

// month is 0-indexed

const globals = {
  registration: {
    start: dayjs({
      year: 2021,
      month: 1,
      day: 22,
      hour: 20,
      minute: 0,
      second: 0,
      millisecond: 0,
      zone: "America/New_York",
    }),
    end: dayjs({
      year: 2021,
      month: 2,
      day: 26,
      hour: 20,
      minute: 0,
      second: 0,
      millisecond: 0,
      zone: "America/New_York",
    }),
  },
  event: {
    start: dayjs({
      year: 2021,
      month: 3,
      day: 10,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      zone: "America/New_York",
    }),
    end: dayjs({
      year: 2021,
      month: 3,
      day: 11,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      zone: "America/New_York",
    }),
  },
};

Object.freeze(globals);

export default globals;
