import React, { useState } from "react";
// import carousal library
import Slider from "react-slick";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
// image url
const slider1 = "https://rukminim1.flixcart.com/fk-p-flap/2000/300/image/3959ad9f670aeeeb.jpg?q=20" 
const slider2 = "https://rukminim1.flixcart.com/fk-p-flap/2000/300/image/81518fdc857c741b.png?q=20" 
const slider3 = "https://rukminim1.flixcart.com/fk-p-flap/2000/300/image/440d280fc5515e1c.png?q=20" 

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
      setDocActive(next);
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
    <div className="w-full sm:w-full bg-white">
      <Slider {...settings}>
        <div>
          <img
            style={{
              hight: "100%",
              width: "100%",
              backgroundColor: "blue",
              objectFit: "cover",
            }}
            src={slider3}
            alt="banner"
            loading="lazy"
          />
        </div>
        <div>
          <img
            style={{
              hight: "100%",
              width: "100%",
              backgroundColor: "blue",
              objectFit: "cover",
            }}
            src={slider1}
            alt="product"
            loading="lazy"
          />
        </div>
        <div>
          <img
            style={{
              hight: "100%",
              width: "100%",
              backgroundColor: "blue",
              objectFit: "cover",
            }}
            src={slider2}
            alt="product"
            loading="lazy"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
