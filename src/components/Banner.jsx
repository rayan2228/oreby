import React, { useState } from "react";
import Slider from "react-slick";
import BannerImg from "../assets/banner.png";
import Img from "./layouts/Img";
import { Link } from "react-router-dom";
const Banner = () => {
  const [activeDot, setActiveDot] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setActiveDot(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === activeDot
            ? {
                color: "#262626",
                width: "10px",
                borderRight: "2px solid #262626",
                paddingRight: "30px",
                cursor: "pointer",
              }
            : {
                color: "transparent",
                width: "10px",
                borderRight: "2px solid transparent",
                paddingRight: "30px",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 415,
        settings: {
          dots: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <Link to={"/shop"}>
        <div>
          <Img src={BannerImg} />
        </div>
      </Link>
      <Link to={"/shop"}>
        <div>
          <Img src={BannerImg} />
        </div>
      </Link>
      <Link to={"/shop"}>
        <div>
          <Img src={BannerImg} />
        </div>
      </Link>
      <Link to={"/shop"}>
        <div>
          <Img src={BannerImg} />
        </div>
      </Link>
    </Slider>
  );
};

export default Banner;
