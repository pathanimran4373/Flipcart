import React from "react";

const Image = ({ imgSrc, className, productName }) => {
  return (
    <img
      className={className}
      src={imgSrc}
      alt={productName}
      loading="lazy"
      style={{ width: "136px", height: "107px" }}
    />
  );
};

export default Image;
