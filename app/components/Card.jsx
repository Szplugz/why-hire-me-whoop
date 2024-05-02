import React from "react";

const Card = ({ children, additionalStyles }) => {
  return (
    <div
      className={`${additionalStyles} flex flex-col gap-4 justify-center items-center text-center bg-[#f3f5f9] rounded-3xl p-12 min-h-[300px] min-w-[300px]`}
    >
      {children}
    </div>
  );
};

export default Card;
