import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Flex from "./layouts/Flex";
const Breadcrumb = ({ title, linkVal, currentPage, currentPageLink, link }) => {
  return (
    <div className="capitalize font-dm">
      <h1 className="text-[49px] font-bold ">{title}</h1>
      <Flex className={"gap-x-2 items-center text-xs font-normal mt-3"}>
        <Link to={link}>{linkVal}</Link>
        <FaAngleRight />
        <Link to={currentPageLink}>{currentPage}</Link>
      </Flex>
    </div>
  );
};

export default Breadcrumb;
