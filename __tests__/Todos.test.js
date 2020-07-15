import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import Todos from "../src/Todos";

const mockStore = configureStore();

const initialState = {
  todos: [
    { id: 0, text: "Fazer café" },
    { id: 1, text: "Acessar o slack" },
    { id: 2, text: "Beber água" },
  ],
};

const store = mockStore(initialState);

describe("My Connected React-Redux Component", () => {
  const wrapper = renderer
    .create(
      <Provider store={store}>
        <Todos />
      </Provider>
    )
    .toJSON();

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
