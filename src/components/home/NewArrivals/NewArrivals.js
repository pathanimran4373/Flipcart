import React from "react";
import Slider from "react-slick";
// import component of product
import Heading from "../Products/Heading";
import Product from "../Products";
// newArrivals data from json file
import { newArrivals } from "../../../jsonFile";
// buttons for carousal
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
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
    <>
     <div className="bg-white md:shadow-lg w-11/12 mx-auto ">
     <Heading heading="New Products" />
      <div className="md:flex md:flex-row items-center justify-start">
        <div className="pb-5 md:w-9/12 my-6  ml-9">
          <Slider {...settings}>
            {newArrivals.map((e) => {
              return (
                <div className="md:mx-36" key={e.id}>
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
        <div className="md:shadow-lg mb-6 md:w-[200px] hidden bg-white md:block">
          <img
            className="w-full h-[250px] ml-8"
            src="https://rukminim1.flixcart.com/fk-p-flap/470/720/image/fc822dc700322fcd.jpg?q=20"
            alt="image"
            loading="lazy"
          />
        </div>
      </div>
     </div>
    </>
  );
};

export default NewArrivals;
