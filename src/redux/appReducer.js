import { ADD_POST } from './types';

const intitalState = {
  todos: [],
};
export const appReducer = (state = intitalState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    default:
      return state;
  }
};
