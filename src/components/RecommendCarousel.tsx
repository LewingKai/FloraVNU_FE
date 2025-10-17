"use client";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FlowerItem from "./flower_item";
import { Flower } from "@/types/home";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

// Custom Previous Arrow
const PrevArrow: React.FC<ArrowProps> = ({ className, onClick, style }) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        left: "-45px",
        zIndex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        padding: "20px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ArrowBackIos style={{ color: "white", fontSize: "30px" }} />
    </div>
  );
};

const NextArrow: React.FC<ArrowProps> = ({ className, onClick, style }) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        right: "-45px",
        zIndex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        padding: "20px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ArrowForwardIos style={{ color: "white", fontSize: "30px" }} />
    </div>
  );
};

const RecommendCarousel = React.memo(({ flowers }: { flowers: Flower[] }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Previous Arrow
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-[1190px] relative">
      <Slider {...settings}>
        {flowers.map((item, index) => (
          <div className="px-2" key={index}>
            <FlowerItem
              _id={item._id}
              key={index}
              image={item.image}
              name={item.name || "Bó hoa xinh"}
              price={item.price}
              description={item.description}
              alt={item.name || "Bó hoa xinh"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default RecommendCarousel;
