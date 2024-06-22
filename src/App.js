import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ArticleDetail from "./components/ArticleDetail";
import Favorites from "./components/Favorites";
import Homepage from "./components/Homepage"; // Case should match the file name exactly
import Navbar from "./smallcomponents/Navbar";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/article/:url" element={<ArticleDetail />} /> */}
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
