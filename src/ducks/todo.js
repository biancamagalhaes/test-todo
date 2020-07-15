import { hen, Hen } from "../utility/createReducer";
import { createSelector } from "reselect";

const initialState = {
  loading: false,
  todos: [],
};

const mainSelector = (state) => state.todos;

export const getTodos = createSelector(mainSelector, (state) => {
  return {
    loading: state.loading,
    todos: state.todos,
  };
});

class EditorReactions extends Hen {
  setLoading(a) {
    this.state.loading = a;
  }

  addTodo(todo) {
    this.state.todos = [...this.state.todos, todo];
  }
}

//Reducers
export const [menuReducer, actions] = hen(new EditorReactions(initialState));
export default menuReducer;

export function addTodo(todo) {
  return async (dispatch) => {
    dispatch(actions.addTodo(todo));
  };
}
