// const rootReducer=
import { combineReducers } from "redux";
import { moviesReducer } from "./movieReducer";
import { movieDetailReducer } from "./movieDetailReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  movieDetails: movieDetailReducer,
});

export default rootReducer;
