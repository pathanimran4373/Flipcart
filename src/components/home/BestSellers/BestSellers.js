import React from "react";
import Slider from "react-slick";
// impor component of product
import Heading from "../Products/Heading";
import Product from "../Products";
// import data from json file
import { BestSellersData } from "../../../jsonFile";
//import buttons of bestSeller carousal
import SampleNextArrow from "../NewArrivals/SampleNextArrow";
import SamplePrevArrow from "../NewArrivals/SamplePrevArrow";

const BestSellers = () => {
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
    <div className="w-11/12 mx-auto md:pb-4 shadow-lg bg-white">
      <Heading heading="Mobile,Watch & more" />
      <Slider {...settings}>
        {
          BestSellersData.map((e) => {
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
            )
          })
        }
      </Slider>

    </div>

  );
};

export default BestSellers;
