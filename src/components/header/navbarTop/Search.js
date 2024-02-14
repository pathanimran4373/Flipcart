import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// react icon
import { FaSearch } from "react-icons/fa";

// import  data
import { SearchItems } from "../../../jsonFile";

const Search = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = SearchItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <>
      {/*  search box */}

      <div className="relative w-full h-full text-base text-primeColor flex items-center gap-2 justify-between bg-white ">
        <FaSearch className="w-5 h-5 p-1" />

        <input
          className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px] bg-white w-full"
          type="text"
          onChange={handleSearch}
          value={searchQuery}
          placeholder="Search For Products Brands and More"
        />
        {searchQuery && (
          <div
            className={`w-full mx-auto h-96 bg-white top-14 absolute left-0 z-50 overflow-y-scroll shadow-2xl cursor-pointer`}
          >
            {searchQuery &&
              filteredProducts.map((item) => (
                <div
                  onClick={() =>
                    navigate(
                      `/product/${item.productName
                        .toLowerCase()
                        .split(" ")
                        .join("")}`,
                      {
                        state: {
                          item: item,
                        },
                      }
                    ) &
                    setSearchQuery("")
                  }
                  key={item.id}
                  className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                >
                  <img className="w-24" src={item.img} alt="productImg" loading="lazy"/>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-xs">{item.description}</p>
                    <p className="text-sm">
                      Price:
                      <span className="text-primeColor font-semibold">
                        ${item.price}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      {/* search bar end */}
    </>
  );
};

export default Search;
