import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

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
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
// Save to localStorage on every change
store.subscribe(() => {
  localStorage.setItem("redux-ex", JSON.stringify(store.getState()));
});

export default store;
