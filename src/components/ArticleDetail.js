import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArticleDetail = () => {
  const { url } = useParams();
  const decodedUrl = decodeURIComponent(url);
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(decodedUrl);
        setArticle(response.data);
      } catch (error) {
        setError("Network error. Please try again later.");
      }
    };

    fetchArticle();
  }, [decodedUrl]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} />
      )}
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read the full article
      </a>
    </div>
  );
};

export default ArticleDetail;
