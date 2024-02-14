import { Link } from "react-router-dom";
//  import react icons
import { FaShoppingCart, FaStoreAlt } from "react-icons/fa";

// import redux hook for get cart count
import { useSelector } from "react-redux";

// import component
import Search from "./Search";
import UserLogin from "./Userlogin";

const Header = () => {
  // state of cart count
  const products = useSelector((state) => state.orebiReducer.products);

  return (
    <>
      <div className="w-full md:h-16 h-24 bg-blue-600 sticky top-0 z-50">
        <nav className="h-full px-4 mx-auto relative">
          <div className="flex flex-row justify-between md:justify-center">
            <Link className=" " to="/">
              <h1 className="italic text-lg md:text-2xl text-white font-bold px-3">
                Flipcart
              </h1>
              <p className="italic text-white text-sm">
                Explore <span className="text-yellow-500 text-sm">Plus</span>
              </p>
            </Link>

            {/* search component */}
            <div className="absolute top-12 h-9 w-11/12 mt-1 md:static md:mx-8 md:w-5/12 md:mt-3">
              <Search />
            </div>

            <div className="flex items-center justify-center relative">
              {/* login and sign Up component */}
              <div className=" mr-4">
                <UserLogin />
              </div>
              {/* cart button */}
              <Link to="/cart">
                <div className="relative">
                  <FaShoppingCart className="text-white" />
                  <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-blue-600 text-white">
                    {products.length > 0 ? products.length : 0}
                  </span>
                </div>
              </Link>
              {/* seller button*/}
              <div className="flex justify-center items-center ml-9">
                <FaStoreAlt className="text-lg text-white hidden md:block " />
                <h1 className="px-5 text-lg text-white hidden md:block">
                  Become a Seller
                </h1>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
