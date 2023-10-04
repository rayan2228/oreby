import React, { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";
import DropDownItem from "./DropDownItem";
import List from "./List";
import ListItem from "./ListItem";
const UserDropDown = () => {
  let [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="relative flex cursor-pointer gap-x-2" onClick={handleShow}>
      <BiSolidUser /> <GoTriangleDown />
      {show && (
        <DropDownItem
          className={
            "absolute font-dm w-[200px] top-10 right-0 rounded-md text-center z-10"
          }
        >
          <List>
            <ListItem
              linkClassName={"py-4 pl-5 block bg-black text-white	capitalize"}
              listItemName={"my account"}
            />
            <ListItem
              linkClassName={
                "py-4 pl-4 block capitalize border border-[#F0F0F0] bg-white"
              }
              listItemName={"Log Out"}
            />
          </List>
        </DropDownItem>
      )}
    </div>
  );
};

export default UserDropDown;
