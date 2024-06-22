import React from "react";

import { Link, useLocation } from "react-router-dom";
const MainNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NewsPortal
          </span>
        </Link>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <form class="max-w-sm mx-auto flex">
            <Link to="/">
              <span
                className={`${
                  currentPath === "/"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white"
                } border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer ml-2`}
              >
                Home
              </span>
            </Link>
            <Link to="/favorites">
              <span
                className={`${
                  currentPath === "/favorites"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white"
                } border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer ml-2`}
              >
                Favorite
              </span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
