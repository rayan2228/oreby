import React from "react";
import Flex from "./Flex";

const Filter = ({ children, title, selectClass }) => {
  return (
    <Flex className={`font-dm text-base text-[#767676] gap-x-3`}>
      <h6 >{title}</h6>
      <select
        name=""
        id=""
        className={`${selectClass} py-1 outline-none border-[#767676] border px-5`}
      >
        {children}
      </select>
    </Flex>
  );
};

export default Filter;
