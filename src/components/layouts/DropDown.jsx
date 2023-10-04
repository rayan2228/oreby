import React, { useEffect, useRef, useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import DropDownItem from "./DropDownItem";
import List from "./List";
import ListItem from "./ListItem";
const DropDown = () => {
  let [show, setShow] = useState(false);
  let category = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (category.current.contains(e.target)) {
        setShow(!show);
      } else {
        setShow(false);
      }
    });
  });
  return (
    <div
      className="w-[10%]  text-[#262626] font-dm capitalize sm:text-sm flex items-center cursor-pointer relative text-xl z-10"
      ref={category}
    >
      <HiMiniBars3BottomLeft className="mr-3" />
      <span className="hidden lg:inline-block">Shop by Category</span>
      {show && (
        <DropDownItem
          className={
            "absolute bg-[#262626] font-dm text-[#FFFFFFB2] w-[263px] top-10 left-0 rounded-md"
          }
        >
          <List>
            <ListItem
              linkClassName={
                "py-4 pl-5 block hover:text-white hover:pl-6 transition-all	"
              }
              listItemName={"Accesories"}
              link={"/accesories"}
            />
            <ListItem
              linkClassName={
                "py-4 pl-4 block hover:text-white hover:pl-6 transition-all	"
              }
              listItemName={"Furniture"}
            />
            <ListItem
              linkClassName={
                "py-4 pl-4 block hover:text-white hover:pl-6 transition-all	"
              }
              listItemName={"Electronics"}
            />
            <ListItem
              linkClassName={
                "py-4 pl-4 block hover:text-white hover:pl-6 transition-all	"
              }
              listItemName={"Clothes"}
            />
            <ListItem
              linkClassName={
                "py-4 pl-4 block hover:text-white hover:pl-6 transition-all	"
              }
              listItemName={"Bags"}
            />
            <ListItem
              linkClassName={
                "py-4 pl-4 block hover:text-white hover:pl-6 transition-all	"
              }
              listItemName={"Home appliances"}
            />
          </List>
        </DropDownItem>
      )}
    </div>
  );
};

export default DropDown;
