import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import RegistationChoice from "./index";
import config from "../../config";

const now = dayjs();

const fiveMinAgo = now.subtract({ minute: 5 });
const tenMinAgo = now.subtract({ minute: 10 });
const fiveMinLater = now.add({ minute: 5 });
const tenMinLater = now.add({ minute: 10 });

describe("registration", () => {
  it("has not opened for anyone", () => {
    Object.defineProperty(config, "registration", {
      // registration has not opened
      value: {
        start: fiveMinLater,
        end: tenMinLater,
      },
    });
    Object.defineProperty(config, "event", {
      // event hasn't started
      value: {
        start: tenMinLater,
        end: tenMinLater,
      },
    });

    render(<RegistationChoice />);

    expect(
      screen.getByText("Registration for participants has not opened yet", {
        exact: false,
      })
    ).toBeInTheDocument();

    // TODO: assert that there are no links to forms
  });

  it("is open for everyone", () => {
    Object.defineProperty(config, "registration", {
      // registration has opened but not closed
      value: {
        start: fiveMinAgo,
        end: fiveMinLater,
      },
    });
    Object.defineProperty(config, "event", {
      // event hasn't started yet
      value: {
        start: tenMinLater,
        end: tenMinLater,
      },
    });

    render(<RegistationChoice />);

    expect(
      screen.getByText("Registration for participants is open", {
        exact: false,
      })
    ).toBeInTheDocument();

    // TODO: assert that there are links to forms
  });

  it("has closed for students and is open for volunteers", () => {
    Object.defineProperty(config, "registration", {
      // registration for students has opened and closed
      value: {
        start: tenMinAgo,
        end: fiveMinAgo,
      },
    });
    Object.defineProperty(config, "event", {
      // event hasn't started yet
      value: {
        start: fiveMinLater,
        end: tenMinLater,
      },
    });

    render(<RegistationChoice />);

    expect(
      screen.getByText("Registration for participants has closed", {
        exact: false,
      })
    ).toBeInTheDocument();

    // TODO: assert that there is a link to a form for volunteers only
  });

  it("has closed for everyone", () => {
    Object.defineProperty(config, "registration", {
      // registration for students has opened and closed
      value: {
        start: tenMinAgo,
        end: fiveMinAgo,
      },
    });
    Object.defineProperty(config, "event", {
      // event has started but not ended
      value: {
        start: fiveMinAgo,
        end: fiveMinLater,
      },
    });

    render(<RegistationChoice />);

    expect(
      screen.getByText("Registration for participants has closed", {
        exact: false,
      })
    ).toBeInTheDocument();

    // TODO: assert that there are no links to forms
  });
});
