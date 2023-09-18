import { useEffect, useState } from "react";
import Main from "./components/main/Main";
import NavBar from "./components/nav/NavBar";
import Logo from "./components/nav/Logo";
import Search from "./components/nav/Search";
import NumResult from "./components/nav/NumResult";
import Loader from "./components/Loader";
import Box from "./components/main/Box";
import MovieList from "./components/main/MovieList";
import Error from "./components/Error";
import MovieDetails from "./components/main/MovieDetails";
import WatchedMovie from "./components/main/WatchedMovie";
import WatchedSummary from "./components/main/WatchedSummary";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState("");
  const [watched, setWatched] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState("");
  const [selectedID, setSelectedID] = useState("");

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

    setSelectedID("");
    fetching();
  }, [query]);

  function handleSelectedID(id) {
    setSelectedID(selectedID !== id && id);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbId !== id));
  }

  function handleClose() {
    setSelectedID("");
  }

  return (
    <div className="w-screen bg-primary-300 pb-10">
      <NavBar>
        {!isSearch && <Logo />}
        <Search
          query={query}
          onQuery={setQuery}
          onIsSearch={setIsSearch}
          isSearch={isSearch}
        />
        <NumResult movies={movies} />
      </NavBar>
      <Main>
        <Box query={query}>
          {error && <Error message={error} />}
          {isLoader && <Loader />}
          {!isLoader && !error && (
            <MovieList movies={movies} onSelectedID={handleSelectedID} />
          )}
        </Box>
        <Box query={query}>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              onClose={handleClose}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary movies={watched} />
              <WatchedMovie
                movies={watched}
                onDeleteMovie={handleDeleteMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
