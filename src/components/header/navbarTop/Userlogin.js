import React, { useState } from "react";
import { Link } from "react-router-dom";

// import framer-motion library for show popup
import { motion } from "framer-motion";

//  import react icons
import { FaUser, FaCaretDown } from "react-icons/fa";

const UserLogin = () => {
  const [showUser, setShowUser] = useState(false);

  return (
    <>
      {/* login and signup */}

      <div
        onClick={() => setShowUser(!showUser)}
        className="flex items-center justify-center cursor-pointer"
      >
        <FaUser className="text-white hidden md:block" />
        <h2 className="mx-2 text-white">Login</h2>
        <FaCaretDown className="text-white hidden md:block" />
      </div>
      {showUser && (
        <motion.ul
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-11 rounded left-0 z-50 bg-white w-44 text-black h-auto p-4 pb-6 shadow-2xl"
        >
          <Link to="/signin">
            <li
              onClick={() => setShowUser(false)}
              className="text-black px-4 py-1 cursor-pointer"
            >
              Login
            </li>
          </Link>
          <Link to="/signup">
            <li
              onClick={() => setShowUser(false)}
              className="text-black px-4 py-1 cursor-pointer"
            >
              Sign Up
            </li>
          </Link>
          <Link to="profile">
            <li
              onClick={() => setShowUser(false)}
              className="text-black px-4 py-1 cursor-pointer"
            >
              Profile
            </li>
          </Link>
          <Link to="/contact">
            <li
              onClick={() => setShowUser(false)}
              className="text-black px-4 py-1 border-b-[1px] border-b-gray-400 cursor-pointer"
            >
              Contact
            </li>
          </Link>
        </motion.ul>
      )}
    </>
  );
};

export default UserLogin;
