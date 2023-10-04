import React from "react";

const Title = ({ title, className }) => {
  return (
    <div
      className={`font-dm text-[39px] text-[#262626] font-bold capitalize ${className}`}
    >
      {title}
    </div>
  );
};

export default Title;
