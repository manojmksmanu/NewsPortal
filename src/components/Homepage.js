import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticles,
  setCategory,
  setPage,
  setSearchQuery,
} from "../features/articles/articlesSlice";
import Articles from "./Articles";
import Pagination from "./Pagination";
import Navbar from "../smallcomponents/Navbar";

const Homepage = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, page, totalResults, searchQuery } =
    useSelector((state) => state.articles);
    console.log(articles)
  return (
    <div className="">
      {/* <Navbar title={"NewsPortal"} /> */}
      <Navbar />
      {/* <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search for articles..."
        />
        <button type="submit">Search</button>
      </form>  */}
      {status === "loading" && (
        <div className="flex items-center justify-center h-screen">
          <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
            loading...
          </div>
        </div>
      )}
      {status === "failed" && <p>Error: {error}</p>}
      <div className="articles container mx-auto px-4 py-2 ">
        <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 pb-2">
          Current Page-{page}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Articles key={article.url} article={article} />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(totalResults / 20)}
        onPageChange={(newPage) => dispatch(setPage(newPage))}
      />
    </div>
  );
};

export default Homepage;
