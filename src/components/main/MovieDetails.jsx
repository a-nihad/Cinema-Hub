import React, { useEffect, useState } from "react";
import Star from "../Star";
import Loader from "../Loader";
import { useKey } from "../customHooks/useKey";

const MovieDetails = ({ selectedID, onClose, onAddWatched, watched }) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [rating, setRating] = useState("");
  const isWatched = watched.map((movie) => movie.imdbId).includes(selectedID);
  const watchedRating = watched.find(
    (movie) => movie.imdbId === selectedID,
  )?.userRating;

  useEffect(() => {
    async function movieDetails() {
      setLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=36cd245a&i=${selectedID}`,
      );
      const data = await res.json();
      setMovie(data);
      setLoading(false);
    }
    movieDetails();
  }, [selectedID]);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useKey("Escape", onClose);

  function handleShareDetails() {
    const newWatchedMovie = {
      imdbId: selectedID,
      title,
      poster,
      year,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating: rating,
    };
    onAddWatched(newWatchedMovie);
    onClose();
  }

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
  }, [title]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="rounded-xl bg-primary-200 ">
          <div className="flex gap-5 rounded-t-xl bg-primary-100 ">
            <img
              src={poster}
              alt={title}
              className="w-[200px] rounded-tl-xl  "
            />
            <div className="space-y-6 py-8 text-lg">
              <h1 className="pr-5 text-2xl font-bold"> {title} </h1>
              <h1>
                {released} . <span> {runtime} </span>
              </h1>
              <h1> {genre} </h1>
              <h1> ⭐️ {imdbRating} IMDB reting </h1>
            </div>
          </div>

          <div className="space-y-5 p-7">
            <div className="space-y-2 rounded-xl bg-primary-100 p-5 text-center text-lg">
              {!isWatched ? (
                <Star rating={rating} onRating={setRating} />
              ) : (
                <p> You rated with movie {watchedRating} ⭐️ </p>
              )}
              {rating && (
                <button
                  className="rounded-full bg-blue px-5 py-1"
                  onClick={handleShareDetails}
                >
                  Add to List
                </button>
              )}
            </div>

            <p>
              {" "}
              <em> {plot} </em>{" "}
            </p>
            <h1> Staring {actors} </h1>
            <h1> Directed by {director} </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
