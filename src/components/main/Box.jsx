import React, { useState } from "react";

const Box = ({ query, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {query && (
        <div className="py- relative h-[650px] basis-1/2 overflow-auto rounded-xl">
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
      )}
    </>
  );
};

export default Box;
