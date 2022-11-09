import { useState, useRef, useEffect } from "react";
import React from "react";
import { useStateValue } from "../Hook/StateProvider";
import data from "../../data/product.json";

import {
  AiOutlineCaretDown,
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
    <main>
      <header className="flex h-[60px] w-full bg-secondary items-center text-white">
        <Link to="/" className="">
          <img
            className="min-w-[60px] h-[50px] object-contain ml-8 mt-4"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon-logo"
          />
        </Link>
        <div className="ml-[200px] flex items-center text-white relative">
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
        <ul className="flex items-center justify-center ml-[400px] space-x-10 ">
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
            <div className="w-8 h-8 rounded-full bg-red-50"></div>
            <AiOutlineCaretDown />
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
      </header>
    </main>
  );
}

export default Header;
