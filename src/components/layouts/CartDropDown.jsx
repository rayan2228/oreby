import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Flex from "./Flex";
import DropDownItem from "./DropDownItem";
import Img from "./Img";
import CartImg from "../../assets/cartimg.png";
import { ImCross } from "react-icons/im";
import Buttons from "./Buttons";

const CartDropDown = () => {
  let [cartShow, setCartShow] = useState(false);

  let cart = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (cart.current.contains(e.target)) {
        setCartShow(!cartShow);
      } else {
        setCartShow(false);
      }
    });
  });
  return (
    <div className="relative cursor-pointer" ref={cart}>
      <FaShoppingCart />
      {cartShow && (
        <DropDownItem
          className={
            "absolute font-dm top-10 right-0 rounded-md w-[358px] text-sm font-bold border border-[#F0F0F0] z-10"
          }
        >
          <div className="bg-[#F5F5F3] p-5">
            <Flex className={"justify-between"}>
              <Img src={CartImg} />
              <div className="self-center">
                <h5 className="mb-3">Black Smart Watch</h5>
                <h6>$44.00</h6>
              </div>
              <ImCross className="flex self-center " />
            </Flex>
          </div>
          <div className="p-5 bg-white">
            <h6 className="text-base font-light text-[#767676] ">
              Subtotal: <span className="font-bold">$44.00</span>
            </h6>
            <Flex className={"gap-x-5 mt-5"}>
              <Buttons
                link={"/cart"}
                title={"View Cart"}
                linkClassName={
                  "px-10 py-4 border border-[#2B2B2B] font-dm text-sm font-bold"
                }
              />
              <Buttons
                title={"Checkout"}
                linkClassName={
                  "px-10 py-4 bg-black text-white font-dm text-sm font-bold"
                }
              />
            </Flex>
          </div>
        </DropDownItem>
      )}
    </div>
  );
};

export default CartDropDown;
