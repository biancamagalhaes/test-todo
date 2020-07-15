import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Counter from "../src/Counter";

describe("Testing App Component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Counter count={10} />);

    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.setProps({ count: 5 });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
