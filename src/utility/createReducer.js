import produce from "immer";

export default function createReducer(intialState, handlers) {
  return (state = intialState, action) => {
    const handler = handlers[action.type];

    if (!handler) {
      return state;
    }
    return produce(state, (draft) => handler(draft, action));
  };
}

export class Hen {
  state;

  constructor(initialState) {
    this.state = initialState;
  }
}

export function hen(cls) {
  const actionPrefix = cls.constructor.name;
  let reducers = {};
  let actions = {};

  // create reducers
  Reflect.ownKeys(Reflect.getPrototypeOf(cls))
    .concat(Reflect.ownKeys(cls))
    .forEach((key) => {
      if (key === "constructor") {
        return;
      }
      const actionType = `${actionPrefix}.${key}`;
      const p = cls[key];
      if (typeof p !== "function") {
        return;
      }

      reducers[actionType] = (state, action) => {
        let reducerClass = new cls.constructor(state);
        reducerClass[key](...action.payload);
        return state;
      };

      actions[key] = function () {
        const act = {
          type: actionType,
          payload: Array.from(arguments),
        };
        return act;
      };
    });

  const red = createReducer(cls.state, reducers);
  return [red, actions];
}
