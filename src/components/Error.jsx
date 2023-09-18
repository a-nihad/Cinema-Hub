import React from "react";

const Error = ({ message }) => {
  return (
    <>
      <h1 className="mt-[50px] text-center text-xl font-semibold">
        ⛔️ File to Fetching
      </h1>
      {console.log(message)}
    </>
  );
};

export default Error;
