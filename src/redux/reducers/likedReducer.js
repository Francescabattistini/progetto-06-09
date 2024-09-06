import { DISLIKE, LIKE } from "../actions";

const initialState = {
  content: [],
};

const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case DISLIKE:
      return {
        ...state,
        content: state.content.filter(song => song.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default likedReducer;
