import {
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,
} from "../types/moviesType";

const initialDetailsState = {
  movieDetails: {},
  loading: false,
  error: null,
};

export const movieDetailReducer = (state = initialDetailsState, action) => {
  switch (action.type) {
    case MOVIE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case MOVIE_DETAILS_SUCCESS:
      return { ...state, loading: false, movieDetails: action.payload };
    case MOVIE_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
