import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { newArrivals } from "../../../jsonFile";
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
          slidesToShow: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-11/12 mx-auto pb-5 my-10 px-5 shadow-lg">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        {
          newArrivals.map((e) => {
            return (
              <div className="px-2" key={e.id}>
                <Product
                _id={e._id}
                  img={e.img}
                  productName={e.productName}
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

export default NewArrivals;
