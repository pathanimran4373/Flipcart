import { Link } from "react-router-dom";
import { navBarBottomList } from "../../../jsonFile/index";

const NavBottom = () => {
  return (
    <>
      <div className="flex md:flex-row items-start bg-white md:items-center justify-around content-center w-11/12 px-4 pb-4 lg:pb-0 h-full lg:h-24 shadow-md mx-auto mt-5 mb-8  box-border overflow-x-auto">
        {navBarBottomList.map((item) => (
          <Link to="/" key={item.id} className="flex flex-col px-4 py-3 cursor-pointer">
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12"
              loading="eger"
            />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavBottom;
