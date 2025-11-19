import { Row } from "react-bootstrap";
import CardMovie from "../components/CardMovie";
import PaginationComponent from "../components/PaginationComponent";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/actions/movieAction";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <Row className="mt-3">
      {movies?.length > 0 ? (
        movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)
      ) : (
        <h3 className="text-center w-100 mt-4">لا يوجد أفلام</h3>
      )}

      <PaginationComponent />
    </Row>
  );
}

export default Home;
