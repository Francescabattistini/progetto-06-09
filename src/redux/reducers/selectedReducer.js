import { SELECTED } from "../actions";

const initialState = {
  content: null,
};

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default selectedReducer;
