import { useState } from "react";
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
import { useMovies } from "./components/customHooks/useMovies";
import { useLocalStorageState } from "./components/customHooks/useLocalStorageState";

function App() {
  const [query, setQuery] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [selectedID, setSelectedID] = useState("");

  // Custom Hooks
  const { movies, isLoader, error } = useMovies(query, handleClose);
  const [watched, setWatched] = useLocalStorageState([], "watched");

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
        <Box>
          {error && <Error message={error} />}
          {isLoader && <Loader />}
          {!isLoader && !error && (
            <MovieList movies={movies} onSelectedID={handleSelectedID} />
          )}
        </Box>
        <Box>
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
