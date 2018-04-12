import React from "react";
import { render } from "enzyme";

import TestPropTypes from "./../../__helpers__/TestPropTypes.helper";

import Header from "./../Header";

describe("Components", () => {
  describe("Header", () => {
    test("should render", () => {
      const wrapper = render(<Header title="Hello" subTitle="world!" />);
      expect(wrapper).toMatchSnapshot();
    });

    test("should validate props", () => {
      TestPropTypes(<Header title="Hello" subTitle="world!" />, 0);
      TestPropTypes(<Header />, 2);
    });
  });
});
