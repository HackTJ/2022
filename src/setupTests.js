// react-testing-library renders components to document.body;
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom";

// so that `Object.freeze(config)` doesn't actually do anything.
// this allows us to configure variables like the event start and end times,
// along with the registration start and end times. i.e., we can monkey-patch
// `config` by overriding `Object.freeze` and setting it to a no-op.
Object.freeze = function (a) {
  return;
};

// TODO: this doesn't work; the timezone remains at EST
beforeAll(() => {
  process.env.TZ = "PST";
});

// describe('timezone', () => {
//   it('should always be PST when testing', () => {
//     expect(new Date().getTimezoneOffset()).toBe(8 * 60);
//     // TODO: assert that dayjs uses LA time
//   });
// });
