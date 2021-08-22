// TODO: https://testing-library.com/docs/example-react-router/

import { render, screen } from "@testing-library/react";
// import { createMemoryHistory } from 'history'
// import { MemoryRouter } from "react-router-dom";
import App from "../../App";

it("should render for incorrect routes", () => {
  // const history = createMemoryHistory();
  //
  // history.push("/notfound");

  render(<App />); // ,  { wrapper: MemoryRouter });

  expect(screen.getByText("404", { exact: false })).toBeInTheDocument();

  expect(document.title).stringContaining("404");
});
