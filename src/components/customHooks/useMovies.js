import { useEffect, useState } from "react";

export function useMovies(query, action) {
  const [movies, setMovies] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetching() {
      try {
        setIsLoader(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=36cd245a&s=${query}`,
        );
        if (!res.ok)
          throw new Error("Somthing went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found!");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoader(false);
      }
    }

    if (query.length < 3) {
      setError("");
      setMovies([]);
      return;
    }

    action("");
    fetching();
  }, [query]);
  return { movies, isLoader, error };
}
