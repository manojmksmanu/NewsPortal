import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../features/articles/articlesSlice";

const Articles = ({ article }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.articles.favorites);
  const status = useDispatch((state) => state.articles.status);
  console.log(status);
  const isFavorite = favorites.some((fav) => fav.url === article.url);
  console.log(article.content);
  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(article));
    } else {
      dispatch(addFavorite(article));
    }
  };
  console.log(article.url);
  return (
    <>
      {article.title === "[Removed]" ? (
        " "
      ) : (
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="contain-content ">
            {article.urlToImage ? (
              <img
                className="rounded-t-lg"
                src={article.urlToImage}
                alt={article.title}
              />
            ) : (
              <img src="./nf.jpg" />
            )}
          </div>

          <div className="p-5">
            <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
              {article.title}
            </h5>
            <p className="mb-3 text-sm  text-gray-700 dark:text-gray-400">
              {article.description}
            </p>{" "}
            <a
              href={article.url}
              className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-1"
              target="blank"
            >
              Read more
            </a>
            <button className="mt-3" onClick={handleFavorite}>
              {isFavorite ? (
                <span className="inline-flex items-center px-1 py-2 mx-1 text-xs font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600">
                  Remove From Favorites
                </span>
              ) : (
                <span
                  href="#"
                  className="inline-flex items-center px-3 py-2 mx-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to favorites
                </span>
              )}{" "}
            </button>
          </div>
        </div>
      )}
      {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={article.urlToImage}
            alt={article.title}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {article.description}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div> */}
    </>
  );
};

export default Articles;
