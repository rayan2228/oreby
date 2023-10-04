import React from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import List from "./layouts/List";
import ListItem from "./layouts/ListItem";
import Img from "./layouts/Img";
import logo from "../assets/logo.png";
import Icons from "./layouts/Icons";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#F5F5F3] py-14 px-2">
      <Container>
        <Flex className={"justify-between flex-wrap gap-y-5"}>
          <div className="sm:w-[8%]  w-1/2 font-dm order-1 ">
            <h4 className="mb-4 text-base font-bold capitalize">MENU</h4>
            <List className={" text-sm capitalize  "}>
              <ListItem
                listItemName={"home"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors   block"
                }
                link={"/"}
                className={"mb-2"}
              />
              <ListItem
                listItemName={"shop"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors    block"
                }
                link={"/shop"}
                className={"mb-2"}
              />
              <ListItem
                listItemName={"about"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors  block"
                }
                link={"/about"}
                className={"mb-2"}
              />
              <ListItem
                listItemName={"contacts"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors   block"
                }
                link={"/contacts"}
                className={"mb-2"}
              />
              <ListItem
                listItemName={"journal"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors   block"
                }
                link={"/journal"}
              />
            </List>
          </div>
          <div className="sm:w-[8%]  w-1/2 font-dm order-2  sm:order-1">
            <h4 className="mb-4 text-base font-bold capitalize">shop</h4>
            <List className={" text-sm capitalize "}>
              <ListItem
                listItemName={"Category 1"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors   block"
                }
                link={"/"}
                className={"mb-2"}
              />
              <ListItem
                listItemName={"Category 1"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors   block"
                }
                link={"/shop"}
                className={"mb-2"}
              />
              <ListItem
                listItemName={"Category 1"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors   block"
                }
                link={"/about"}
                className={"mb-2"}
              />
              <ListItem
                listItemName={"Category 1"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors   block"
                }
                link={"/contacts"}
                className={"mb-2"}
              />
              <ListItem
                listItemName={"Category 1"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors    block"
                }
                link={"/journal"}
              />
            </List>
          </div>
          <div className="sm:w-[8%]  w-1/2 font-dm order-3  sm:order-1">
            <h4 className="mb-4 text-base font-bold capitalize">help</h4>
            <List className={" text-sm capitalize "}>
              <ListItem
                listItemName={"Privacy Policy"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors   block"
                }
                link={"/"}
                className={"mb-2"}
              />
              <ListItem
                listItemName={"Terms & Conditions"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors   block"
                }
                link={"/shop"}
                className={"mb-2"}
              />
              <ListItem
                listItemName={"Special E-shop"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors block"
                }
                link={"/about"}
                className={"mb-2"}
              />
              <ListItem
                listItemName={"Shipping"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors  block"
                }
                link={"/contacts"}
                className={"mb-2"}
              />
              <ListItem
                listItemName={"Secure Payments"}
                linkClassName={
                  "sm:hover:text-[#262626] transition-colors    block"
                }
                link={"/journal"}
              />
            </List>
          </div>
          <div className="font-dm sm:w-[18%] w-1/2  order-4 sm:order-1">
            <h6>
              <a href="tel:(052) 611-5711" className="text-base font-bold">
                (052) 611-5711
              </a>
            </h6>
            <h6>
              <a
                href="mailto:company@domain.com"
                className="text-sm font-bold sm:text-base"
              >
                company@domain.com
              </a>
            </h6>
            <address className="text-sm font-normal text-[#6D6D6D] mt-4">
              575 Crescent Ave. Quakertown, PA 18951
            </address>
          </div>
          <Img src={logo} className={"sm:w-[15%] w-full sm:order-1"} />
        </Flex>
        <Flex className="items-center justify-between mt-16 ">
          <Icons className={"flex gap-x-6 w-1/2"}>
            <Link to={"#"}>
              <FaFacebookF />
            </Link>
            <Link to={"#"}>
              <FaLinkedinIn />
            </Link>
            <Link to={"#"}>
              <FaInstagram />
            </Link>
          </Icons>
          <h6 className="w-1/2 text-[11px] sm:text-right font-dm font-normal">2020 Orebi Minimal eCommerce Figma Template by Adveits</h6>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
