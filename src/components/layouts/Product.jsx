import React from "react";
import Img from "./Img";
import Flex from "./Flex";
import { AiFillHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
const Product = ({
  className,
  labelShow,
  label,
  productImg,
  productTitle,
  productPrice,
}) => {
  let setLabelShow = labelShow;
  return (
    <div className={`${className} relative font-dm group overflow-hidden`}>
      {setLabelShow && (
        <div className="absolute top-5 left-[26px] bg-black text-white text-sm font-bold py-2 px-8 capitalize">
          {label}
        </div>
      )}
      <div className="relative">
        <Img src={productImg} imgClassName={" w-[382px] h-[382px]"} />
        <div className="absolute w-full bg-white bottom-[-250px] left-0 text-right font-dm text-base text-[#767676] py-[25px] px-[30px] group-hover:bottom-[0] transition-all">
          <h6>
            Add to Wish List{" "}
            <AiFillHeart className="inline-block ml-4 text-black" />
          </h6>
          <h6 className="my-5">
            Compare <BiGitCompare className="inline-block ml-4 text-black" />
          </h6>
          <h6>
            Add to Cart{" "}
            <FaShoppingCart className="inline-block ml-4 text-black" />
          </h6>
        </div>
      </div>
      <Flex className={"justify-between  mt-[18px]"}>
        <h1 className="text-xl font-bold text-[#262626]">{productTitle}</h1>
        <p className="text-base text-[#767676]">{productPrice}</p>
      </Flex>
    </div>
  );
};

export default Product;
