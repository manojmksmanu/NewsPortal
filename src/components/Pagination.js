import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../features/articles/articlesSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { page, totalResults, articles } = useSelector(
    (state) => state.articles
  );
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: animated scroll
    });
  };
  const totalPages = Math.min(totalResults / 20); // Assuming 20 articles per page

  // const [removedCount, setRemovedCount] = useState(0);

  // const filteredArticles = articles.filter((article) => {
  //   if (article.title === "[Removed]") {
  //     setRemovedCount(removedCount + 1);
  //     return false;
  //   }
  // });
  //   const removedCount = articles.filter((item) => item.title === "[Removed]").length;
  // console.log(removedCount)
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      dispatch(setPage(newPage));
       scrollToTop();
    }
   
  };

  const renderPageNumbers = () => {
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, page + 2);
    console.log(totalResults);
    console.log(totalPages);
    // let start = 1;
    // let end = totalPages;
    const pageNumbers = [];
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
    console.log("page number", pageNumbers);
    return pageNumbers.map((num) => (
      <button
        key={num}
        onClick={() => handlePageChange(num)}
        className={`mx-1 px-3 py-1 rounded ${
          num === page
            ? "bg-blue-600 text-white"
            : "text-white bg-blue-400 border border-blue-500"
        }`}
      >
        {num}
      </button>
    ));
  };

  return (
    <div>
      {totalPages < 1 ? (
        ""
      ) : (
        <div className="flex items-center justify-center mt-4 mb-4">
          <button
            onClick={() => handlePageChange(page - 1)}
            className="mx-1 px-3 py-1 rounded bg-blue-400 text-white border border-blue-500"
            disabled={page === 1}
          >
            Prev
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => handlePageChange(page + 1)}
            className="mx-1 px-3 py-1 rounded bg-blue-400 text-white  border border-blue-500"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
