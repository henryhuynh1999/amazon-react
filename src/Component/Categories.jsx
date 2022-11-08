import React from "react";
import { AiOutlineHome } from "react-icons/ai";
function Categories() {
  const category = [
    "Echo and Alexa",
    "Kindle",
    "Books",
    "Electrionics",
    "Home and Garden",
    "Fashion",
    "Healthy and Beauty",
    "Automotive",
    "Sport and Tourism",
    "Games",
    "Other",
  ];
  return (
    <div className="relative">
      <div className="sticky top-0">
        <ul className="flex flex-col text-white bg-secondary w-[250px] h-screen border-t border-t-light-300 text-left space-y-2 p-8">
          <li className="flex items-center px-4 py-2 space-x-2 text-yellow-500 rounded-full cursor-pointer hover:bg-gray-100 hover:text-gray-700">
            <AiOutlineHome className="w-6 h-6 " />
            <span className="font-bold text-[20px] ">Categories</span>
          </li>
          {category.map((item) => (
            <li className="px-4 py-2 space-x-2 rounded-full cursor-pointer hover:bg-gray-500 hover:text-yellow-500">
              {item}
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
