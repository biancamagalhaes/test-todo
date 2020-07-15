import { combineReducers } from "redux";
import todoReducer from "./todo";
//import { connectRouter } from "connected-react-router";
//import { createBrowserHistory } from "history";

//export const history = createBrowserHistory();

export const reducers = combineReducers({
  //router: connectRouter(history),
  todos: todoReducer,
});

export const rootReducer = (state, action) => {
  return reducers(state, action);
};
