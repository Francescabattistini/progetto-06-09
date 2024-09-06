import { combineReducers, configureStore } from "@reduxjs/toolkit";
import queryReducer from "../reducers/queryReducer";
import selectedReducer from "../reducers/selectedReducer";
import likedReducer from "../reducers/likedReducer";

const rootReducer = combineReducers({
  query: queryReducer,
  selected: selectedReducer,
  liked: likedReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
