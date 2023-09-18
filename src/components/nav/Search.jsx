const Search = ({ query, onQuery, isSearch, onIsSearch }) => {
  return (
    <>
      {
        <input
          type="text"
          placeholder="Search Movie"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          className={` w-10/12 px-2 py-1 outline-none md:w-8/12 md:max-w-[700px] ${
            isSearch
              ? "block bg-transparent text-white"
              : "hidden rounded-md bg-white sm:block "
          }`}
        />
      }
      <button
        onClick={() => onIsSearch((isSearch) => !isSearch)}
        className="absolute right-5 top-5 sm:hidden"
      >
        {isSearch ? (
          <i className="fa-solid fa-xmark text-xl text-white"></i>
        ) : (
          <i className="fa-solid fa-magnifying-glass text-xl text-white"></i>
        )}
      </button>
    </>
  );
};

export default Search;
