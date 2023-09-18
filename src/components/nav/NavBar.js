import React from "react";

const NavBar = ({ children }) => {
  return (
    <div className={` bg-primary-200 px-5 py-1 `}>
      <div className="container relative m-auto flex h-[60px] w-full items-center justify-between gap-5">
        {children}
      </div>
    </div>
  );
};

export default NavBar;
