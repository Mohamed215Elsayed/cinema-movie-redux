import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../reducers/movieReducer";
// Load state from localStorage
function loadState() {
  try {
    const state = localStorage.getItem("redux-ex");
    return state ? JSON.parse(state) : undefined;
  } catch (err) {
    return undefined;
  }
}

const persistedState = loadState();

const store = configureStore({
  moviesReducer: moviesReducer,
  preloadedState: persistedState,
});

// Save to localStorage on every change
store.subscribe(() => {
  localStorage.setItem("redux-ex", JSON.stringify(store.getState()));
});

export default store;
