import React from "react";

const Main = ({ children }) => {
  return (
    <div className="container m-auto h-[680px] gap-5 overflow-auto pt-4 text-white lg:flex">
      {children}
    </div>
  );
};

export default Main;
