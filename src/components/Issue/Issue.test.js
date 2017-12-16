import React from "react";
import { shallow } from "enzyme";
import Issue from "./Issue";

it("renders without crashing", () => {
  shallow(<Issue issue={{ title: "qq", description: "qq" }} />);
});
