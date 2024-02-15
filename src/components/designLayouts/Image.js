import React from "react";

const Image = ({ imgSrc, className, productName }) => {
  return (
    <img
      className={className}
      src={imgSrc}
      alt={productName}
      loading="auto"
      style={{ width: "136px",backgroundColor:"blue", height: "107px" }}
    />
  );
};

export default Image;