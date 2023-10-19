import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
const SideBarContent = ({ title, showSubDrop, color, children }) => {
  const [show, setShow] = useState(false);
  return (
    <section className="mt-9">
      {showSubDrop ? (
        <div
          className="flex items-center justify-between font-dm font-normal text-base capitalize border-b  border-[#7676763a] pb-5 text-[#767676]"
          onClick={() => setShow(!show)}
        >
          <h6>{title}</h6>
          {show ? <BiMinus /> : <BiPlus />}
        </div>
      ) : (
        <div className="flex items-center font-dm font-normal text-base capitalize border-b  border-[#7676763a] pb-5 text-[#767676]">
          {color && (
            <span
              className="w-3 h-3 rounded-full  mr-3"
              style={{ backgroundColor: `${color}` }}
            ></span>
          )}
          <h6>{title}</h6>
        </div>
      )}
      {show && children}
    </section>
  );
};

export default SideBarContent;
