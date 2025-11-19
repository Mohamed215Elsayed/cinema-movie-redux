import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
        );
        setMovie(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) return <h3 className="text-center my-5">جاري التحميل...</h3>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Row className="justify-content-center">
        <Col md="12" className="mt-4">
          <div className="card-detalis d-flex flex-wrap align-items-center">
            {movie.poster_path && (
              <motion.img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="img-movie"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              />
            )}
            <motion.div
              className="text-center mx-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="card-text-details border-bottom">
                اسم الفيلم: {movie.title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم: {movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين: {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم: {movie.vote_average}
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
              {movie.overview || "لا توجد قصة متاحة."}
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
          {movie.homepage && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={movie.homepage}
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
