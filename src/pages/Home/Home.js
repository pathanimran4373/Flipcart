// slider banner
import Banner from "../../components/Banner";
// home components
import {
  NewArrivals,
  BestSellers,
  YearProduct,
  SpecialOffers,
} from "../../components/home/index";
import NavbarBottom from "../../components/header/navbarBottom";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <>
    <div className="w-full mx-auto">
      <NavbarBottom />
      <Banner />
      <NewArrivals />
      <BestSellers />
      <YearProduct />
      <SpecialOffers />
      <Footer />
    </div>
    </>
  );
};

export default Home;
