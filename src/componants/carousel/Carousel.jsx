import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import { NextArrow, PrevArrow } from "./Arrows";

function Carousel() {
  const images = [
    { src: "/toy-images/back1.jpg", alt: "Image 1" },
    { src: "/toy-images/back2.jpg", alt: "Image 2" },
    { src: "/toy-images/back3.jpg", alt: "Image 3" },
    { src: "/toy-images/back4.jpg", alt: "Image 4" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          bottom: "30px",

        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

  };

  return (
    <Slider
      {...settings}
    >
      {images.map(function (value, index) {
        return <Slide key={index} src={value.src} alt={value.alt} />;
      })}

    </Slider>
  );
}

export default Carousel;
