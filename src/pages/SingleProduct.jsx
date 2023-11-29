import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/layouts/Container";
import Breadcrumb from "../components/Breadcrumb";
import Flex from "../components/layouts/Flex";
import Img from "../components/layouts/Img";
import { useDispatch } from "react-redux";
import { addToCartFun } from "../app/slices/addtocart";

const SingleProduct = () => {
  const dispatch = useDispatch();
  let { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [accordion, setAccordion] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      await fetch(`https://dummyjson.com/products/${productId}`)
        .then((result) => result.json())
        .then((data) => setProduct(data))
        .finally(() => setLoading(false));
    };
    getProduct();
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCartFun({ ...product, qun: 1 }));
  };

  return (
    <section>
      <Container>
        <Breadcrumb
          title={"products"}
          linkVal={"home"}
          link={"/"}
          currentPage={"products"}
          currentPageLink={window.location.pathname}
        />
        {loading ? (
          "loading..."
        ) : (
          <>
            <Flex className={"flex-wrap gap-10"}>
              {product.images.length &&
                product.images.map((value, index) => (
                  <Img
                    key={index}
                    src={value}
                    className={"w-[48%]"}
                    imgClassName={"w-full h-[382px] object-cover "}
                  />
                ))}
            </Flex>
            <h2>{product.title}</h2>
            <Flex>
              <h5>
                <strike>
                  {Math.ceil(
                    product.price -
                      (product.price * product.discountPercentage) / 100
                  )}
                </strike>
              </h5>
              <h5>{product.price}</h5>
            </Flex>
            <Flex>
              <h5>STATUS:</h5>
              <h5>{product.stock == 0 ? "out of stock" : "In stock"}</h5>
            </Flex>
            <Flex className={"my-4 gap-x-4"}>
              <button>Add to Wish List</button>
              <button
                onClick={handleAddToCart}
                className="py-4 px-5 bg-black text-white"
              >
                Add to Cart
              </button>
            </Flex>
            <Flex className={"flex-col"}>
              <div
                onClick={() => setAccordion(!accordion)}
                className="relative   "
              >
                <h6
                  className={`after:content-['']  after:absolute after:w-1 after:h-4  after:top-0 after:right-4  relative after:bg-red-500 before:content-[''] after:transition-all after:duration-1000 before:transition-all before:duration-1000 before:absolute ${
                    accordion
                      ? " before:w-0 after:rotate-[90deg]"
                      : " before:w-4 "
                  } before:h-1  before:top-[6px] before:right-[10px]   before:bg-red-500`}
                >
                  FEATURES & DETAILS
                </h6>

                <div
                  className={`bg-red-400  transition-all duration-1000 ${
                    accordion
                      ? " visible "
                      : " absolute opacity-0 translate-y-[-50px] w-full"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>

              <input type="text" placeholder="" />
            </Flex>
          </>
        )}
      </Container>
    </section>
  );
};

export default SingleProduct;
