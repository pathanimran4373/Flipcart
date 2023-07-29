import React, { useState } from "react";
import Slider from "react-slick";
const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
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
          dots: true,
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
    <div className="w-full bg-white">
      <Slider {...settings}>

      {/* <img style="width: 100%; margin: auto; display: block; position: absolute; inset: 0px; padding: inherit; object-fit: cover; opacity: 0; aspect-ratio: 211 / 35;" src="https://rukminim1.flixcart.com/fk-p-flap/480/80/image/440d280fc5515e1c.png?q=20" loading="auto" alt="Image"></img> */}

        <div><img style={{ hight: "100%",width:"100%", backgroundColor: "blue", objectFit: "cover" }} src="https://rukminim1.flixcart.com/fk-p-flap/2000/300/image/3959ad9f670aeeeb.jpg?q=20" alt="banner" /></div>
        <div><img style={{ hight: "100%",width:"100%", backgroundColor: "blue", objectFit: "cover" }} src="https://rukminim1.flixcart.com/fk-p-flap/2000/300/image/81518fdc857c741b.png?q=20" alt="product" /></div>
        <div><img style={{ hight: "100%",width:"100%", backgroundColor: "blue", objectFit: "cover" }} src="https://rukminim1.flixcart.com/fk-p-flap/2000/300/image/440d280fc5515e1c.png?q=20" alt="product" /></div>
      </Slider>
    </div>
  );
};

export default Banner;
