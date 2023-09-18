import React from "react";

const WatchedMovie = ({ movies, onDeleteMovie }) => {
  return (
    <div>
      <ul className="space-y-4 text-lg">
        {movies &&
          movies?.map((movie) => (
            <li
              className="flex list-none items-center justify-between rounded-lg bg-primary-200 px-5 py-3 hover:bg-primary-100"
              key={movie.imdbId}
            >
              <div className="flex items-center gap-5">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="h-[100px] w-[75px]"
                />
                <div className="space-y-3">
                  <h1> {movie.title} </h1>
                  <div className="flex gap-8">
                    <h1> ⭐️ {movie.imdbRating} </h1>
                    <h1> 🌟 {movie.userRating} </h1>
                    <h1> ⏳ {movie.runtime} min </h1>
                  </div>
                </div>
              </div>
              <button onClick={() => onDeleteMovie(movie.imdbId)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WatchedMovie;
