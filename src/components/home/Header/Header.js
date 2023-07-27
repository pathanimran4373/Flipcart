import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart, FaStoreAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

// get data
import { paginationItems } from "../../../jsonFile";

const Header = () => {
  // for search bar
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
// for login popup
const [showUser, setShowUser] = useState(false);

  const navigate = useNavigate();

  // search box function
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // get product for search box
  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);
// for show cart count
  const products = useSelector((state) => state.orebiReducer.products);
 

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <div className="flex items-center justify-around  h-full">
          <Link to="/">
            <div>
              <h1 className="italic text-2xl text-blue-700 font-bold px-3">Flipcart</h1>
              <p className="italic">Explore <span className="text-yellow-500">Plus</span></p>
            </div>
          </Link>
          {/*  search box */}

          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor flex items-center gap-2 justify-between px-6 rounded-md bg-blue-50">
            <FaSearch className="w-5 h-5" />

            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px] bg-transparent"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search For Products Brands and More"
            />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
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
                        setShowSearchBar(true) &
                        setSearchQuery("")
                      }
                      key={item._id}
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img className="w-24" src={item.img} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">
                          {item.productName}
                        </p>
                        <p className="text-xs">{item.des}</p>
                        <p className="text-sm">
                          Price:{" "}
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
          <div className="flex flex-row justify-center items-center ">
            <FaStoreAlt className="text-lg text-blue-600"/>
            <h1 className="px-5 text-lg text-blue-600">Become a Seller</h1>
          </div>


          {/* login and signup */}
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div onClick={() => setShowUser(!showUser)} className="flex">
              <FaUser className="text-blue-600"/>
              <FaCaretDown  className="text-blue-600"/>
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
              >
                <Link onClick={() => setShowUser(false)} to="/signin">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Login
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/signup">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Sign Up
                  </li>
                </Link>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Profile
                </li>
                <Link onClick={() => setShowUser(false)} to="/contact">
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Contact
                </li>
                </Link>
              </motion.ul>
            )}


            {/* cart section */}
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart className="text-blue-600"/>
                <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-blue-600 text-white">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
