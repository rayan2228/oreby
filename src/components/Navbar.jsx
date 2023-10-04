import Container from "./layouts/Container";
import React, { useEffect, useState } from "react";
import Img from "./layouts/Img";
import logo from "../assets/logo.png";
import Flex from "./layouts/Flex";
import List from "./layouts/List";
import ListItem from "./layouts/ListItem";
import { FaBarsStaggered } from "react-icons/fa6";
const Navbar = () => {
  const [menuShow, setMenuShow] = useState(true);
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 415) {
        setMenuShow(false);
      }
    };
    window.addEventListener("resize", resize);
    resize();
  }, []);
  return (
    <nav className="px-2 py-8 ">
      <Container>
        <Flex className={"items-center relative"}>
          <Img src={logo} className={"w-[10%]"} />
          {menuShow && (
            <List
              className={
                "sm:w-[90%] flex justify-center gap-x-10 font-dm text-sm capitalize sm:text-textColor flex-col sm:flex-row sm:relative absolute top-8 bg-black w-full sm:bg-transparent text-white sm:py-0 sm:px-0 py-4 pl-5 sm:top-0"
              }
            >
              <ListItem
                listItemName={"home"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors  sm:py-0 sm:px-0 py-4 pl-5  block"
                }
                link={"/"}
              />
              <ListItem
                listItemName={"shop"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors  sm:py-0 sm:px-0 py-4 pl-5  block"
                }
                link={"/shop"}
              />
              <ListItem
                listItemName={"about"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors  sm:py-0 sm:px-0 py-4 pl-5  block"
                }
              />
              <ListItem
                listItemName={"contacts"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors  sm:py-0 sm:px-0 py-4 pl-5  block"
                }
              />
              <ListItem
                listItemName={"journal"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors  sm:py-0 sm:px-0 py-4 pl-5  block"
                }
              />
            </List>
          )}
          <FaBarsStaggered
            className="absolute top-0 right-0 cursor-pointer sm:hidden"
            onClick={() => setMenuShow(!menuShow)}
          />
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
