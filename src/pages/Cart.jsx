import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import Breadcrumb from "../components/Breadcrumb";
import Flex from "../components/layouts/Flex";
import { ImCross } from "react-icons/im";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Img from "../components/layouts/Img";
import Buttons from "../components/layouts/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { quantityUpdate, removeToCart } from "../app/slices/addtocart";
const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.addtocart.cartData);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let totalTem = total;
    cartData.map((product) => {
      totalTem +=
        product.qun *
        Math.ceil(
          product.price - (product.price * product.discountPercentage) / 100
        );
    });
    setTotal(totalTem);
  }, [cartData]);
  return (
    <section className="py-32">
      <Container>
        <Breadcrumb
          title={window.location.pathname.split("/")[1]}
          linkVal={"home"}
          link={"/"}
          currentPage={window.location.pathname.split("/")[1]}
          currentPageLink={window.location.pathname}
        />

        <Flex className={"mt-10 flex-col"}>
          <Flex className={"bg-[#F5F5F3] w-full justify-around py-5"}>
            <div className="w-[30%]">Product</div>
            <div className="w-[20%]">Price</div>
            <div className="w-[20%]">Quantity</div>
            <div className="w-[20%]">Total</div>
          </Flex>
          {cartData.map((product, index) => (
            <Flex className={"flex-col border border-red-[#F0F0F0] border-t-0"}>
              <Flex className={"py-8 w-full justify-around items-center "}>
                <Flex className={"items-center gap-x-6 w-[30%]"}>
                  <ImCross
                    className="cursor-pointer"
                    onClick={() => dispatch(removeToCart(index))}
                  />
                  <Img
                    src={product.thumbnail}
                    className={"w-[100px] h-[100px]"}
                    imgClassName={"w-full object-cover h-full"}
                  />
                  <h6>{product.title}</h6>
                </Flex>
                <div className="w-[20%] font-bold">
                  $
                  {Math.ceil(
                    product.price -
                      (product.price * product.discountPercentage) / 100
                  )}
                </div>
                <div className="w-[20%] ">
                  <Flex className="w-[150px] py-3 items-center border border-[#F0F0F0]">
                    <button
                      className="px-5"
                      onClick={() => dispatch(quantityUpdate(index))}
                      disabled={product.qun === 1 && true}
                    >
                      <AiOutlineMinus />
                    </button>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="w-[40px] pl-3 outline-transparent"
                      value={product.qun}
                    />
                    <button
                      className="px-5"
                      onClick={() => dispatch(quantityUpdate([index, "plus"]))}
                    >
                      <AiOutlinePlus />
                    </button>
                  </Flex>
                </div>
                <div className="w-[20%] font-bold">
                  $
                  {Math.ceil(
                    product.price -
                      (product.price * product.discountPercentage) / 100
                  ) * product.qun}
                </div>
              </Flex>
              <Flex
                className={
                  "py-5 w-full px-4  items-center justify-around border-y"
                }
              >
                <Flex className="w-[100%] items-center gap-x-4">
                  <select
                    name=""
                    id=""
                    className="w-[255px] py-2 px-5 outline-none border border-[#F0F0F0]"
                  >
                    <option value="" selected>
                      SIZE
                    </option>
                  </select>
                  <input
                    type="text"
                    className="w-[255px] py-2 px-5 outline-none border border-[#F0F0F0]"
                    hidden
                  />
                  <button className="font-bold">apply now</button>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
        <div className="text-right mt-12">
          <h6 className="font-bold">Cart totals</h6>
          <Flex
            className={
              "w-[644px] ml-auto mt-6 border border-[#F0F0F0] text-left flex-wrap"
            }
          >
            <h6 className="w-1/2 py-4 px-5 border-r border-b border-[#F0F0F0]">
              Subtotal
            </h6>
            <h6 className="w-1/2 py-4 px-5 border-b border-[#F0F0F0]">
              {total} $
            </h6>
            <h6 className="w-1/2 py-4 px-5 border-r  border-[#F0F0F0]">
              Total
            </h6>
            <h6 className="w-1/2 py-4 px-5"> {total} $</h6>
          </Flex>
          <Buttons
            title={"Proceed to Checkout"}
            link={"/checkout"}
            className={
              "bg-black text-white font-bold inline-block py-4 px-6 mt-8 rounded-md"
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default Cart;
