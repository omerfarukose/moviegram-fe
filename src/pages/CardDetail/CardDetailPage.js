import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./CardDetailPage.css";

import { useLocation } from "react-router-dom";

function CardDetailPage() {

  const location = useLocation();
  const { movieContent } = location.state;

  let author = movieContent.author;

  return (
    <div className="page-container">
      <Navbar home />
      <div className="author-info">
        <img className="author-img" src={author.imageUrl} alt="cardImage" />
        <div className="author-text">
          <div className="author-name">{author.name}</div>
          <div className="author-date">{author.date}</div>
        </div>
      </div>
      <div className="movie-container">
        <div className="movie-header">
          <div className="movie-info">
            <img className="movie-img" src={movieContent.imageUrl} alt="cardImage"/>
            <div className="movie-name">{movieContent.movieName}</div>
          </div>
          <div className="movie-title">{movieContent.title}</div>
        </div>
        <div className="movie-content">{movieContent.text}</div>
      </div>
    </div>
  );
}

export default CardDetailPage;
