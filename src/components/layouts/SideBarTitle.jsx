import React, { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import SideBarContent from "./SideBarContent";
const SideBarTitle = ({ showDrop, title, data }) => {
  const [show, setShow] = useState(true);
  return (
    <section className="font-dm">
      {showDrop ? (
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <h6 className="text-xl">{title}</h6>
          {show ? (
            <GoTriangleUp className="text-xl" />
          ) : (
            <GoTriangleDown className="text-xl" />
          )}
        </div>
      ) : (
        <div>
          <h6 className="text-xl">{title}</h6>
        </div>
      )}
      {show &&
        data.map((data) => (
          <SideBarContent
            title={data.name}
            color={data.hasOwnProperty("colorCode") && data.colorCode}
            showSubDrop={data.hasOwnProperty("subCategory") ? true : false}
          >
            {data.hasOwnProperty("subCategory") &&
              data.subCategory.map((subCategory) => <p>{subCategory.name}</p>)}
          </SideBarContent>
        ))}
    </section>
  );
};

export default SideBarTitle;
