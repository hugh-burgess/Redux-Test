import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ACTION } from "./actions";

const initialState = {
  count: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default createStore(rootReducer, applyMiddleware(thunk));
