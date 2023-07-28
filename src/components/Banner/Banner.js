import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Slider from "react-slick";
// import { carousalItem } from "../../jsonFile";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
// import Image from "../designLayouts/Image";

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
        {/* <Link to="/product" style={{hight:"25px",backgroundColor:"blue"}}>
          {
            carousalItem.map((e) => {
              return (
                <div key={e._id} style={{backgroundColor:"blue"}}>
                  <img style={{hight:"40px"}} src={e.image} alt="product" />

                </div>
              )
            })
          }
        </Link> */}
<div><img style={{hight:"25px",backgroundColor:"blue",objectFit:"cover"}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" alt="product"/></div>
<div><img style={{hight:"25px",backgroundColor:"blue",objectFit:"cover"}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" alt="product"/></div>
<div><img style={{hight:"25px",backgroundColor:"blue",objectFit:"cover"}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" alt="product"/></div>
      </Slider>
    </div>
  );
};

export default Banner;
