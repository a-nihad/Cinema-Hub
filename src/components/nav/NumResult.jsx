import React from "react";

const NumResult = ({ movies }) => {
  return (
    <>
      <h1 className="hidden text-white md:block">
        Fount {movies ? movies.length : 0} results
      </h1>
    </>
  );
};

export default NumResult;
