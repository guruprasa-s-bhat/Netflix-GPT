import React, { useState } from "react";
import "./SearchMovie.css"; // Ensure your CSS file is correctly imported

const SearchMovieCard = ({ posterPath, title, releaseDate, overview }) => {
  const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"; // Replace with your actual CDN URL
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`movie-card ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpand}
    >
      <img
        src={`${IMG_CDN_URL}${posterPath}`}
        alt={title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-release-date">Release Date: {releaseDate}</p>
        {isExpanded && <p className="movie-overview">{overview}</p>}
      </div>
    </div>
  );
};

export default SearchMovieCard;
