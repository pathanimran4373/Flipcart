// import { Route, BrowserRouter, Routes, } from "react-router-dom";
// import Header from "./components/home/Header/Header";
// import HeaderBottom from "./components/home/Header/HeaderBottom";
// import Home from "./pages/Home/Home";
// import SignIn from "./pages/Account/SignIn";
// import SignUp from "./pages/Account/SignUp";
// import Cart from "./pages/Cart/Cart";
// import Journal from "./pages/Journal/Journal";
// import Offer from "./pages/Offer/Offer";
// import Payment from "./pages/payment/Payment";
// import ProductDetails from "./pages/ProductDetails/ProductDetails";
// import Shop from "./pages/Shop/Shop";
// import Error from "./pages/errorPage/ErrorPage";

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Header />
//         <HeaderBottom />
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/shop" element={<Shop />}></Route>
//           <Route path="/journal" element={<Journal />}></Route>
//           <Route path="/offer" element={<Offer />}></Route>
//           <Route path="/product/:_id" element={<ProductDetails />}></Route>
//           <Route path="/cart" element={<Cart />}></Route>
//           <Route path="/paymentgateway" element={<Payment />}></Route>
//           <Route path="/signup" element={<SignUp />}></Route>
//           <Route path="*" element={<Error />}></Route>

//           <Route path="/signin" element={<SignIn />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";

// Lazily load components
const Home = lazy(() => import("./pages/Home/Home"));
const SignIn = lazy(() => import("./pages/Account/SignIn"));
const SignUp = lazy(() => import("./pages/Account/SignUp"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Journal = lazy(() => import("./pages/Journal/Journal"));
const Offer = lazy(() => import("./pages/Offer/Offer"));
const Payment = lazy(() => import("./pages/payment/Payment"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetails/ProductDetails")
);
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Error = lazy(() => import("./pages/errorPage/ErrorPage"));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <HeaderBottom />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Define routes */}
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/product/:_id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/paymentgateway" element={<Payment />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
