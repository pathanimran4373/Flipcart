import React, { useReducer } from "react";
import { useNavigate, Link } from "react-router-dom";
import { initialState, reducer } from "./Reducer";

const SignUp = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", field: name, value });
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { clientName, email, phone, password, address, city, checked } =
      state;

    const errors = {};

    if (!clientName) errors.clientName = "Enter your name";
    if (!email) errors.email = "Enter your email";
    else if (!EmailValidation(email)) errors.email = "Enter a valid email";
    if (!phone) errors.phone = "Enter your phone number";
    if (!password) errors.password = "Create a password";
    else if (password.length < 6)
      errors.password = "Passwords must be at least 6 characters";
    if (!address) errors.address = "Enter your address";
    if (!city) errors.city = "Enter your city name";

    if (Object.keys(errors).length === 0 && checked) {
      dispatch({
        type: "SET_SUCCESS_MSG",
        message: "You registered successfully",
      });
      dispatch({ type: "RESET_FIELDS" });
      navigate("/signin");
    } else {
      Object.entries(errors).forEach(([field, message]) => {
        dispatch({ type: "SET_ERROR", field, message });
      });
    }
  };

  const {
    clientName,
    email,
    phone,
    password,
    address,
    city,
    checked,
    errors,
    successMsg,
  } = state;

  return (
    <div className="mx-auto md:w-3/5 md:h-3/4 shadow-lg flex items-center my-10 justify-center">
      <div className="flex md:flex-row  justify-center items-center flex-col w-full h-full  bg-blue-600">
        <div className="w-[50%] flex flex-col justify-center items-start md:h-full md:-mt-24 py-6 md:py-0 md:px-9">
          <h1 className="text-white font-semibold text-3xl">
            Looks like you're new here!
          </h1>
          <p className="md:text-base text-yellow-50 mt-20">
            Sign up with your mobile number to get started
          </p>
          <p className="text-sm text-center font-titleFont text-white font-medium mt-5">
            have an Account ?
            <Link to="/signin">
              <span className="cursor-pointer text-lg"> Login</span>
            </Link>
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center bg-white ">
          {successMsg ? (
            <div className="w-[500px]">
              <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
                {successMsg}
              </p>
              <Link to="/signin">
                <button
                  className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
                >
                  Sign in
                </button>
              </Link>
            </div>
          ) : (
            <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
              <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start">
                <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                  Create your account
                </h1>
                <div className="flex flex-col gap-3">
                  {/* client name */}
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      Full Name
                    </p>
                    <input
                      onChange={handleChange}
                      value={clientName}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="text"
                      name="clientName"
                      placeholder="eg. John Doe"
                    />
                    {errors.clientName && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errors.clientName}
                      </p>
                    )}
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      Work Email
                    </p>
                    <input
                      onChange={handleChange}
                      value={email}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="email"
                      name="email"
                      placeholder="john@workemail.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errors.email}
                      </p>
                    )}
                  </div>
                  {/* Phone Number */}
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      Phone Number
                    </p>
                    <input
                      onChange={handleChange}
                      value={phone}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="text"
                      name="phone"
                      placeholder="008801234567891"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  {/* Password */}
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      Password
                    </p>
                    <input
                      onChange={handleChange}
                      value={password}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="password"
                      name="password"
                      placeholder="Create password"
                    />
                    {errors.password && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errors.password}
                      </p>
                    )}
                  </div>
                  {/* Address */}
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      Address
                    </p>
                    <input
                      onChange={handleChange}
                      value={address}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="text"
                      name="address"
                      placeholder="road-001, house-115, example area"
                    />
                    {errors.address && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errors.address}
                      </p>
                    )}
                  </div>
                  {/* City */}
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      City
                    </p>
                    <input
                      onChange={handleChange}
                      value={city}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="text"
                      name="city"
                      placeholder="Your city"
                    />
                    {errors.city && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errors.city}
                      </p>
                    )}
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start mdl:items-center gap-2">
                    <input
                      onChange={() => dispatch({ type: "TOGGLE_CHECKED" })}
                      className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                      type="checkbox"
                    />
                    <p className="text-sm text-primeColor">
                      I agree
                      <span className="text-blue-500">Terms of Service </span>
                      and <span className="text-blue-500">Privacy Policy</span>.
                    </p>
                  </div>
                  <button
                    onClick={handleSignUp}
                    className={`${
                      checked
                        ? " bg-blue-600 hover:bg-blue-900 hover:text-white cursor-pointer"
                        : " bg-amber-600 hover:bg-blue-900 hover:text-gray-200 cursor-none"
                    } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
