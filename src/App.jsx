import "./App.css";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import Footer from "./components/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // get all movies from https://www.themoviedb.org
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=190e39986dab0938986d1ec4cc5a6c93&language=ar"
    );
    setMovies(res.data.results);
    setPageCount(Math.min(res.data.total_pages, 500));
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  const search = async (word) => {
    if (!word) {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=190e39986dab0938986d1ec4cc5a6c93&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setPageCount(Math.min(res.data.total_pages, 500));
    }
  };

  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=190e39986dab0938986d1ec4cc5a6c93&language=ar&page=${page}`
    );
    setMovies(res.data.results);
    setPageCount(Math.min(res.data.total_pages, 500));
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font color-body App">
      <NavBar search={search} />
      <Container className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <MoviesList
                movies={movies}
                getPage={getPage}
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
