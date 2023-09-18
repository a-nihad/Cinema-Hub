import React from "react";

const MovieList = ({ movies, onSelectedID }) => {
  return (
    <div>
      <ul className="space-y-4 text-lg">
        {movies &&
          movies.map((movie) => (
            <li
              className="flex list-none items-center gap-5 rounded-lg bg-primary-200 px-5 py-3 hover:bg-primary-100"
              onClick={() => onSelectedID(movie.imdbID)}
              key={movie.imdbID}
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="h-[100px] w-[75px]"
              />
              <div className="space-y-3">
                <h1> {movie.Title} </h1>
                <h1> {movie.Year} </h1>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieList;
