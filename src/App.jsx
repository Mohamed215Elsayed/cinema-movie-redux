import "./App.css";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMovies,
  searchMovies,
  getPage,
} from "./redux/actions/movieAction";

function App() {
  const dispatch = useDispatch();
  const { movies, pageCount, currentPage } = useSelector(
    (state) => state.movies
  );
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);
  return (
    <div className="font color-body App">
      <NavBar search={(word) => dispatch(searchMovies(word))} />
      <Container className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                movies={movies}
                getPage={(p) => dispatch(getPage(p))}
                pageCount={pageCount}
                currentPage={currentPage}
              />
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
