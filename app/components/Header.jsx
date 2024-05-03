import React from "react";

const Header = () => {
  return (
    <div className="flex absolute flex-col justify-end bg-black w-full h-[300px] top-[-220px]">
      <div className="bg-black absolute w-full py-4 sm:px-[4rem] px-4 flex justify-between items-center">
        <h1 className="text-white sm:text-4xl text-lg">NEEL KHARE</h1>
        <button
          onClick={() => {
            const element = document.getElementById("contact");
            element.scrollIntoView({ behavior: "smooth" });
          }}
          className="rounded-full px-4 py-2 bg-white font-medium hover:bg-[#e2e2e2] transition-all"
        >
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default Header;
