import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { getPage } from "../redux/actions/movieAction";

const PaginationComponent = () => {
  const dispatch = useDispatch();
  const { pageCount, currentPage } = useSelector((state) => state.movies);
  const handlePageClick = (data) => {
    const pageNum = data.selected + 1;
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(getPage(pageNum));
  };
  if (pageCount === 0) return null;
  return (
    <motion.div
      className="pagination-wrapper"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {pageCount > 0 && currentPage > 0 && (
        <div className="page-info mb-2 text-center">
          الصفحة{" "}
          <strong style={{ color: "#b45b35", fontWeight: "bold" }}>
            {currentPage}
          </strong>{" "}
          من{" "}
          <strong style={{ color: "#b45b35", fontWeight: "bold" }}>
            {pageCount}
          </strong>
        </div>
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        previousLabel="السابق"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        forcePage={currentPage - 1}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
        breakClassName="page-item"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </motion.div>
  );
};

export default PaginationComponent;
