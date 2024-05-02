import React from "react";

const FloatingButton = () => {
  return (
    <div
      id="presentation-button"
      className="button-container flex items-center justify-center p-8  bg-transparent fixed bottom-0 z-[1000]"
    >
      <button className="button flex items-center justify-center p-8 bg-black text-white hover:bg-[#696969] text-xl rounded-full">
        WATCH PRESENTATION
      </button>
    </div>
  );
};

export default FloatingButton;
