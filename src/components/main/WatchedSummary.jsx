import React from "react";

const WatchedSummary = ({ movies }) => {
  const aveLength = movies.length;
  const avgImdbRating =
    movies.reduce((rating, movie) => rating + movie.imdbRating, 0) / aveLength;
  const avgUserRating =
    movies.reduce((rating, movie) => rating + movie.userRating, 0) / aveLength;
  const avgRunTime =
    movies.reduce((rating, movie) => rating + movie.runtime, 0) / aveLength;

  return (
    <div className="mb-5 space-y-3 rounded-xl bg-primary-100 p-6">
      <h1> {movies.length} MOVIES YOU WATCHED </h1>
      <div className="flex gap-20">
        <h1> ⭐️ {aveLength ? avgImdbRating.toFixed(2) : 0} </h1>
        <h1> 🌟 {aveLength ? avgUserRating.toFixed(2) : 0} </h1>
        <h1> ⏳ {aveLength ? avgRunTime.toFixed(2) : 0} </h1>
      </div>
    </div>
  );
};

export default WatchedSummary;
