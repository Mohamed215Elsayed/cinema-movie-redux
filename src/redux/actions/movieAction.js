import axios from "axios";
import {
  GET_ALL_MOVIES,
  SEARCH_MOVIES,
  GET_PAGE,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,
} from "../types/moviesType";

const API_KEY = "190e39986dab0938986d1ec4cc5a6c93";
const BASE = "https://api.themoviedb.org/3";

/**
 * Get popular movies
 */
export const getAllMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${BASE}/movie/popular?api_key=${API_KEY}&language=ar`
    );

    dispatch({
      type: GET_ALL_MOVIES,
      payload: {
        movies: data.results,
        pages: Math.min(data.total_pages, 500), //data is res.data
        currentPage: 1,
      },
    });
  } catch (err) {
    console.error("Error fetching movies:", err);
  }
};

/**
 * Search movies by keyword
 */
export const searchMovies = (word) => async (dispatch) => {
  try {
    if (!word.trim()) return dispatch(getAllMovies());

    const { data } = await axios.get(
      `${BASE}/search/movie?api_key=${API_KEY}&query=${word}&language=ar`
    );

    dispatch({
      type: SEARCH_MOVIES,
      payload: {
        movies: data.results,
        pages: Math.min(data.total_pages, 500),
        currentPage: 1,
      },
    });
  } catch (err) {
    console.error("Error searching movies:", err);
  }
};

/**
 * Get movies by page
 */
export const getPage = (page) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${BASE}/movie/popular?api_key=${API_KEY}&language=ar&page=${page}`
    );

    dispatch({
      type: GET_PAGE,
      payload: {
        movies: data.results,
        pages: Math.min(data.total_pages, 500),
        currentPage: page,
      },
    });
  } catch (err) {
    console.error("Pagination error:", err);
  }
};

/**
 * Get single movie details
 */
export const getMovieDetails = (id) => async (dispatch) => {
  dispatch({ type: MOVIE_DETAILS_REQUEST });

  try {
    const { data } = await axios.get(
      `${BASE}/movie/${id}?api_key=${API_KEY}&language=ar`
    );

    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAIL,
      payload: error.message || "Error loading movie details",
    });
  }
};
