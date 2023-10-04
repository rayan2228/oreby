import React from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import DropDown from "./layouts/DropDown";
import { FaSearch } from "react-icons/fa";
import CartDropDown from "./layouts/CartDropDown";
import UserDropDown from "./layouts/UserDropDown";
const NavHeader = () => {
  return (
    <section className="bg-[#F5F5F3] py-[25px] px-2">
      <Container>
        <Flex className={"sm:justify-between justify-around items-center "}>
          <DropDown />
          <div className="flex items-center ">
            <input
              type="search"
              name=""
              id=""
              className="lg:w-[601px] sm:w-[450px]  py-4 pl-5 outline-transparent placeholder:font-dm text-sm text-[#C4C4C4]"
              placeholder="Search Products"
            />
            <FaSearch className="ml-[-40px] cursor-pointer" />
          </div>
          <Flex className={"sm:gap-x-4  text-xl"}>
            <UserDropDown />
            <CartDropDown />
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default NavHeader;
