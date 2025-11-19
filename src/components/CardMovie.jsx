import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CardMovie({ movie }) {
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="my-2">
      <Link to={`/movie/${movie.id}`}>
        <motion.div
          className="card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="card__image"
            alt={movie.title}
          />
          <div className="card__overlay">
            <div className="overlay__text">
              <p>اسم الفيلم: {movie.title}</p>
              <p>تاريخ الإصدار: {movie.release_date}</p>
              <p>عدد المقيمين: {movie.vote_count}</p>
              <p>التقييم: {movie.vote_average}</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </Col>
  );
}

export default CardMovie;
