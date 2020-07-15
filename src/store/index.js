import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import { routerMiddleware } from "react-router-redux";
import { rootReducer /* history as histtory */ } from "../ducks";
import thunk from "redux-thunk";

//export const history = histtory;

export const logger = (store) => (next) => (action) => {
  return next(action);
};

export function configureStore(initialState) {
  let middleware = applyMiddleware(
    logger,
    thunk /* , routerMiddleware(history) */
  );

  if (process.env.NODE_ENV !== "production") {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, initialState, middleware);

  if (module.hot) {
    module.hot.accept("../ducks", () => {
      const nextReducer = require("../ducks");
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
