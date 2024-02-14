import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { NavbarTop } from "./components/header";
import LoadingSpinner from "./components/loadingSpiner";
// Lazily load components
const Home = lazy(() => import("./pages/Home/Home"));
const SignIn = lazy(() => import("./pages/Account/logIn"));
const SignUp = lazy(() => import("./pages/Account/signUp"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Payment = lazy(() => import("./pages/payment"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Error = lazy(() => import("./pages/errorPage"));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarTop />
        <Suspense fallback={<LoadingSpinner/>}>
          <Routes>
            {/* Define routes */}
            <Route path="/" element={<Home />} />
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
