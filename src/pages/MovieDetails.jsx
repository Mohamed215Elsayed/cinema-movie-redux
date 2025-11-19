import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../redux/actions/movieAction";
import { Col, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { movieDetails, loading, error } = useSelector(
    (state) => state.movieDetails
  );

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [id]);

  if (loading) return <h3 className="text-center my-5">جاري التحميل...</h3>;
  if (error) return <h3 className="text-center my-5">{error}</h3>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Row className="justify-content-center">
        <Col md="12" className="mt-4">
          <div className="card-detalis d-flex flex-column flex-md-row align-items-center">
            {movieDetails?.poster_path && (
              <motion.img
                src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`}
                alt={movieDetails?.title}
                className="img-movie"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              />
            )}

            <motion.div
              className="text-center mx-auto mt-3 mt-md-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="card-text-details border-bottom">
                اسم الفيلم: {movieDetails?.title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم: {movieDetails?.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين: {movieDetails?.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم: {movieDetails?.vote_average}
              </p>
            </motion.div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" className="mt-3">
          <motion.div
            className="card-story px-3 py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="card-text-title border-bottom">القصة:</p>
            <p className="card-text-story">
              {movieDetails?.overview || "لا توجد قصة متاحة."}
            </p>
          </motion.div>
        </Col>
      </Row>

      <Row className="justify-content-center mb-3 mt-3">
        <Col md="10" className="d-flex justify-content-center gap-2 flex-wrap">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn btn-primary"
              style={{ backgroundColor: "#b45b35", border: "none" }}
            >
              العودة للرئيسية
            </motion.button>
          </Link>

          {movieDetails?.homepage && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={movieDetails?.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="btn btn-primary"
                style={{ backgroundColor: "#b45b35", border: "none" }}
              >
                مشاهدة الفيلم
              </motion.button>
            </motion.a>
          )}
        </Col>
      </Row>
    </motion.div>
  );
};

export default MovieDetails;
