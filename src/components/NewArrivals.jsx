import React from "react";
import Container from "./layouts/Container";
import Title from "./layouts/Title";
import Product from "./layouts/Product";
import Product1 from "../assets/product.png";
import Slider from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Flex from "./layouts/Flex";
const NewArrivals = () => {
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <span
        style={{ ...style }}
        onClick={onClick}
        className="!flex text-2xl items-center cursor-pointer  absolute top-[50%] translate-y-[-50%] translate-x-[-50%] right-2 justify-center w-16 h-16 text-white bg-gray-400 rounded-full"
      >
        <FaLongArrowAltRight />
      </span>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <span
        style={{ ...style }}
        onClick={onClick}
        className="!flex text-2xl items-center cursor-pointer  absolute top-[50%] translate-y-[-50%]  translate-x-[-50%] left-8 justify-center w-16 h-16 text-white bg-gray-400 rounded-full z-10"
      >
        <FaLongArrowAltLeft />
      </span>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 737,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="px-2 my-32">
      <Container>
        <Title title={"New Arrivals"} className={"mb-12"} />
        <Slider {...settings}>
          <div>
            <Product
              className={"sm:pr-10"}
              productImg={Product1}
              productPrice={"$44.00"}
              productTitle={"Basic Crew Neck Tee"}
              label={"new"}
              labelShow={true}
            />
          </div>
          <div>
            <Product
              className={"sm:pr-10"}
              productImg={Product1}
              productPrice={"$44.00"}
              productTitle={"Basic Crew Neck Tee"}
              label={"new"}
              labelShow={false}
            />
          </div>
          <div>
            <Product
              className={"sm:pr-10"}
              productImg={Product1}
              productPrice={"$44.00"}
              productTitle={"Basic Crew Neck Tee"}
              label={"new"}
              labelShow={false}
            />
          </div>
          <div>
            <Product
              className={"sm:pr-10"}
              productImg={Product1}
              productPrice={"$44.00"}
              productTitle={"Basic Crew Neck Tee"}
              label={"10%"}
              labelShow={true}
            />
          </div>
          <div>
            <Product
              className={"sm:pr-10"}
              productImg={Product1}
              productPrice={"$44.00"}
              productTitle={"Basic Crew Neck Tee"}
              label={"new"}
              labelShow={false}
            />
          </div>
          <div>
            <Product
              className={"sm:pr-10"}
              productImg={Product1}
              productPrice={"$44.00"}
              productTitle={"Basic Crew Neck Tee"}
              label={"new"}
              labelShow={false}
            />
          </div>
        </Slider>
        <Flex
          className={
            "gap-x-8 cs:gap-x-[50px] mt-32 flex-col sm:flex-row sm:gap-y-5 flex-wrap"
          }
        >
          <Product
            className={"lg:w-[22%] sm:w-[46%] w-full"}
            productImg={Product1}
            productPrice={"$44.00"}
            productTitle={"Basic Crew Neck Tee"}
            label={"new"}
            labelShow={false}
            


            
          />
          <Product
            className={"lg:w-[22%] sm:w-[46%] w-full"}
            productImg={Product1}
            productPrice={"$44.00"}
            productTitle={"Basic Crew Neck Tee"}
            label={"new"}
            labelShow={false}
          />
          <Product
            className={"lg:w-[22%] sm:w-[46%] w-full"}
            productImg={Product1}
            productPrice={"$44.00"}
            productTitle={"Basic Crew Neck Tee"}
            label={"new"}
            labelShow={false}
          />
          <Product
            className={"lg:w-[22%] sm:w-[46%] w-full"}
            productImg={Product1}
            productPrice={"$44.00"}
            productTitle={"Basic Crew Neck Tee"}
            label={"new"}
            labelShow={false}
          />
        </Flex>
      </Container>
    </section>
  );
};

export default NewArrivals;
