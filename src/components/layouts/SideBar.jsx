import React from "react";
import SideBarTitle from "./SideBarTitle";
import { category, colors, brands, price } from "../../fakeData/Data";
const SideBar = () => {
  return (
    <aside className="w-[372px] ">
      <SideBarTitle
        showDrop={false}
        title={"Shop by Category"}
        data={category}
      />
      <SideBarTitle showDrop={true} title={"Shop by Color"} data={colors} />
      <SideBarTitle showDrop={true} title={"Shop by Brand"} data={brands} />
      <SideBarTitle showDrop={false} title={"Shop by Price"} data={price} />
    </aside>
  );
};

export default SideBar;
