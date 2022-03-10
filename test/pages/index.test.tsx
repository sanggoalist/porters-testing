/**
 * @jest-environment jsdom
*/

import {render} from "@testing-library/react";
import Home from "../../src/pages/index";
import React from "react";


test("snapshot testing", () => {
  const renderResult = render(<Home />);
  expect(renderResult.asFragment()).toMatchSnapshot();
});