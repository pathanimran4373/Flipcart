import React from "react";
import Slider from "react-slick";
// component of product
import Heading from "../Products/Heading";
import Product from "../Products";
// json data
import { SpecialOffersData } from "../../../jsonFile";
// buttons of carousal
import SampleNextArrow from "../NewArrivals/SampleNextArrow";
import SamplePrevArrow from "../NewArrivals/SamplePrevArrow";

const SpecialOffers = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-11/12 md:pb-5 mb-7 mx-auto bg-white shadow-lg">
      <Heading heading="Cloths,Shoes & more" />
      <Slider {...settings}>
        {SpecialOffersData.map((e) => {
          return (
            <div className="px-2" key={e.id}>
              <Product
                id={e.id}
                img={e.img}
                productName={e.name}
                price={e.price}
                color={e.color}
                des={e.des}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SpecialOffers;
