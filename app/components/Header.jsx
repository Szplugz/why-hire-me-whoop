import React from "react";

const Header = () => {
  return (
    <div className="bg-black w-full py-4 px-[4rem] flex justify-between">
      <h1 className="text-white text-4xl">NEEL KHARE</h1>
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
  );
};

export default Header;
