import React from "react";
import { useSelector } from "react-redux";
import Articles from "./Articles";
import MainNavbar from "../smallcomponents/MainNavbar";

const Favorites = () => {
  const favorites = useSelector((state) => state.articles.favorites);

  return (
    <>
      <MainNavbar />
      <div className="container mx-auto px-4 py-2">
        <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 pb-2">
          Your Favorite Articles
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {favorites ? (
            favorites.map((article) => (
              <Articles key={article.url} article={article} />
            ))
          ) : (
            <div> Please Add Some Content To Your Favorite List</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
