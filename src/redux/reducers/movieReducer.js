import { GET_ALL_MOVIES, SEARCH_MOVIES, GET_PAGE } from "../types/moviesType";
const initialState = {
  movies: [],
  pageCount: 0,
  currentPage: 1,
};
export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVIES:
    case SEARCH_MOVIES:
    case GET_PAGE:
      return {
        ...state,
        movies: action.payload.movies,//payload is an object{type,pages,[currentPage]}
        pageCount: action.payload.pages,
        currentPage: action.payload.currentPage || 1,
      };

    default:
      return state;
  }
};
