import { useState, useRef, useEffect } from "react";
import React from "react";
import { useStateValue } from "../Hook/StateProvider";
import data from "../../data/product.json";

import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineNotification,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [show, setShow] = useState(false);
  const handleFilter = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    return () => {
      setSearchResults([]);
    };
  }, [searchTerm]);

  return (
    <div className="sticky top-0 test w-full">
      <header className="flex justify-between h-[60px] bg-secondary items-center text-white relative">
        <Link to="/" className="">
          <img
            className="min-w-[40px] max-h-[40px] object-contain ml-8 mt-4"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon-logo"
          />
        </Link>
        <div className="items-center text-white relative lg:flex hidden">
          <input
            type="text"
            className="pl-4 w-[400px] rounded-l-xl bg-[#2D3C4C] border border-gray-400 ring-yellow-500 h-10 outline-light-300 outline-transparent"
            onChange={handleFilter}
          />
          <select
            name="country"
            id="country"
            className="h-10 w-auto bg-[#2D3C4C] outline-transparent flex"
          >
            <option defaultValue="All Category">All Category</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-r-xl">
            <AiOutlineSearch className="w-6 h-6 font-bold text-white" />
          </div>
          {/* Search */}
          {searchTerm && (
            <ul className="search ">
              {searchResults.map((item) => (
                <li
                  key={item.id}
                  className="p-2 rounded-lg hover:bg-yellow-200 hover:text-gray-700"
                >
                  <Link to="/checkout">{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <ul className="hidden lg:flex items-center justify-center space-x-4">
          <li className="icon-hover">
            <AiOutlineHeart className={`w-6 h-6 `} />
          </li>
          <li>
            <Link
              to="/checkout"
              className={`${basket.length > 0 ? "animate-bounce-slow" : ""}
              relative flex items-center justify-center w-10 h-10 bg-yellow-300 rounded-lg`}
            >
              <AiOutlineShoppingCart className={`w-6 h-6 text-slate-900`} />
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-center text-black bg-white rounded-full text-[10px] delay-150 font-bold">
                {basket?.length}
              </span>
            </Link>
          </li>
          <li className="icon-hover">
            <AiOutlineNotification className={`w-6 h-6 hover:bg-light-100`} />
          </li>
          <li
            className="relative flex items-center justify-center space-x-2 cursor-pointer"
            onClick={() => setShowProfile(!showProfile)}
          >
            <div className="w-10 h-10 rounded-full bg-white"></div>
            {showProfile && (
              <div className="absolute right-2 w-[200px] button top-12 animate-wiggle">
                <ul className="w-full px-8 py-4 text-white">
                  <li className="after:bg-black after:block after:w-full after:h-[1px] after:my-4 text-center text-[16px] ">
                    {!user
                      ? "Hi 🎉 ! Guest"
                      : `Hi ! 🎉 ${user.email.split("@")[0]}`}
                  </li>
                  <li>Help</li>
                  {user ? (
                    <li onClick={handleAuthentication}>Sign Out</li>
                  ) : (
                    <li>
                      <Link to="/login">Sign In</Link>
                    </li>
                  )}
                </ul>
                <span></span>
              </div>
            )}
          </li>
        </ul>
        <div className="lg:hidden block">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={() => setShow((prev) => !prev)}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile Nav</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
          {!show && (
            <div className="fixed left-0 bottom-0 overflow-hidden mobile-nav top-[60px] h-screen  bg-secondary md:w-[60%] w-full block lg:hidden">
              <ul>
                <li className="mb-1">
                  <div className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                    Pricing
                  </div>
                </li>
                <li className="mb-1">
                  <div className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                    Categories
                  </div>
                </li>
                <li className="mb-1">
                  <Link
                    to="/checkout"
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  >
                    Cart
                  </Link>
                </li>
                <li className="mb-1">
                  <div className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                    Contact
                  </div>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="pt-6 px-4">
                  <Link
                    to="/login"
                    className="block px-4 py-3 mb-3 button text-center px-4"
                  >
                    {user ? (
                      <div onClick={handleAuthentication}>Sign Out</div>
                    ) : (
                      <Link to="/login">Sign In</Link>
                    )}
                  </Link>
                  {!user && (
                    <Link
                      to="/login"
                      className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                    >
                      With Google
                    </Link>
                  )}
                </div>
                <p className="my-4 text-xs text-center text-gray-400">
                  <span>🚀🚀🚀</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
