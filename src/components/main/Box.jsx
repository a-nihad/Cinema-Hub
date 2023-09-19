import React, { useState } from "react";

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="py- relative h-[680px] basis-1/2 overflow-auto rounded-xl">
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="absolute right-2 top-2"
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark px-5 py-2"></i>
          ) : (
            <i className="fa-solid fa-plus px-5 py-2"></i>
          )}
        </button>
        {isOpen && children}
      </div>
    </>
  );
};

export default Box;
