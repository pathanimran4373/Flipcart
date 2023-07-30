import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import products from "./componant/ProductsJSON";
import Product from "../../components/home/Products/Product";
import SearchItem from "./componant/SearchFunction";
import ShopSideNav from "./componant/sideNav/ShopSideNav";
import Card from "./componant/Card";

const Shop = () => {

  // filtering product
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };


  // function for all filter

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    // function return that componant
    return filteredProducts.map(
      ({ _id: id, img, productName, badge, star, reviews, prevPrice, newPrice, price, color, des }) => (
        <Product
          _id={id}
          img={img}
          productName={productName}
          price={price}
          color={color}
          badge={badge}
          des={des}
        />
      )
    );
  }
  // call the filterddata function
  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs />
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <div className="w-full flex shadow p-4 flex-col gap-6">
            <SearchItem query={query} handleInputChange={handleInputChange} />

            <ShopSideNav handleChange={handleChange} handleClick={handleClick} />

          </div>
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">

          {/* <ProductBanner /> */}
          <div className="flex flex-row flex-wrap justify-start w-full h-100% gap-10">
            <Card result={result} />
          </div>


        </div>
      </div>
    </div>
  );
};

export default Shop;
