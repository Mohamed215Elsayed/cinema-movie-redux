import { useRef, useCallback } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/actions/movieAction";

function NavBar() {
  const dispatch = useDispatch();
  const timerRef = useRef(null);

  const onSearch = useCallback((word) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      dispatch(searchMovies(word));
    }, 300);
  }, [dispatch]);

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <Link to="/">
              <img className="logo" src="/images/logo.png" alt="logo" />
            </Link>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <FaSearch className="search-icon" size={20} />
              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
                id="search"
                name="search"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;
