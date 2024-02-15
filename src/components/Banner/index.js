import React, { useState } from "react";
import Slider from "react-slick";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);

  const images = [
    {
      src: "https://rukminim1.flixcart.com/fk-p-flap/2000/300/image/3959ad9f670aeeeb.jpg?q=20",
      alt: "banner",
    },
    {
      src: "https://rukminim1.flixcart.com/fk-p-flap/2000/300/image/81518fdc857c741b.png?q=20",
      alt: "product",
    },
    {
      src: "https://rukminim1.flixcart.com/fk-p-flap/2000/300/image/440d280fc5515e1c.png?q=20",
      alt: "product",
    },
  ];

  const settings = {
    className: "",
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <>
    <div className="w-11/12 mx-auto bg-white">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-11/12">
            <img
              // style={{
              //   height: "100",
              //   width: "603",
              //   backgroundColor: "blue",
              //   objectFit: "cover",
              // }}
              className="w-full h-full inset-full aspect-auto object-fill"
              src={image.src}
              alt={image.alt}
              loading="eager"
            />
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default Banner;
