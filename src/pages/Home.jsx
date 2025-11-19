import { Row } from "react-bootstrap";
import CardMovie from "../components/CardMovie";
import PaginationComponent from "../components/PaginationComponent";

function Home({ movies, getPage, pageCount, currentPage }) {
  return (
    <Row className="mt-3">
      {movies.length ? (
        movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)
      ) : (
        <h3 className="text-center w-100 mt-4">لا يوجد أفلام</h3>
      )}
      {movies.length ? (
        <PaginationComponent
          getPage={getPage}
          pageCount={pageCount}
          currentPage={currentPage}
        />
      ) : null}
    </Row>
  );
}

export default Home;
