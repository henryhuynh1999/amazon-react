import { useState, useRef, useEffect } from "react";
import React from "react";
import { useStateValue } from "../../Hook/StateProvider";
// import Modal from "../Modal/Modal";
import {
  AiOutlineCaretDown,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineNotification,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [showProfile, setShowProfile] = useState(false);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <main>
      <header className="flex h-[60px] w-full bg-[#161D25] items-center text-white">
        <img
          className="w-[100px] ml-4 mt-4 "
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon-logo"
        />
        <div className="ml-[200px] flex items-center text-white ">
          <input
            type="text"
            className="w-[400px] rounded-l-xl bg-[#2D3C4C] border border-gray-400 ring-yellow-500 h-10 outline-light-300 outline-transparent"
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
        </div>
        <ul className="flex items-center justify-center ml-[400px] space-x-10">
          <li>
            <AiOutlineHeart />
          </li>
          <li className="static relative flex items-center justify-center w-10 h-10 bg-yellow-300 rounded-lg">
            <AiOutlineShoppingCart className="w-6 h-6 text-slate-900" />
          </li>
          <li>
            <AiOutlineNotification />
          </li>
          <li
            className="relative flex items-center justify-center space-x-2 cursor-pointer"
            onClick={() => setShowProfile(!showProfile)}
          >
            <div className="w-8 h-8 rounded-full bg-red-50"></div>
            <AiOutlineCaretDown />
            {showProfile && (
              <div className="absolute right-0 w-[300px] bg-gray-300 rounded-md shadow-lg top-10">
                <ul className="w-full px-8 text-gray-600">
                  <li className="after:bg-gray-200 after:block after:w-full after:h-[1px]">
                    Hi ! Hiimbomb
                  </li>
                  <li>Help</li>
                  <li>Sign Out</li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </header>
    </main>
  );
}

export default Header;
