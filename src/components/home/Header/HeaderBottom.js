import { navBarBottomList } from "../../../jsonFile";
import {Link} from "react-router-dom"
const HeaderBottom = () => {

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-around content-center w-11/12 px-4 pb-4 lg:pb-0 h-full lg:h-24 shadow-md mx-auto mt-5 mb-8 box-border">

      {
        navBarBottomList.map((item) => {
          return (
            <div
              className="flex flex-col cursor-pointer "
              key={item} >
              <Link to="/shop">
                <img src={item.image} alt="product" className="w-12 h-12" />
                <h2>{item.name}</h2>

              </Link>
            </div>

          )
        })
      }

    </div>
  );
};

export default HeaderBottom;
