import React from "react";
import Product from "./Product";
import data from "../../data/product.json";
import Categories from "./Categories";
import {
  AiOutlineApple,
  AiOutlineDesktop,
  AiOutlineReddit,
  AiOutlineFacebook,
  AiOutlineRead,
  AiOutlineClockCircle,
  AiOutlineHighlight,
} from "react-icons/ai";
function Home() {
  const categoriesIcon = [
    <AiOutlineApple className="w-6 h-6" />,
    <AiOutlineDesktop className="w-6 h-6" />,
    <AiOutlineReddit className="w-6 h-6" />,
    <AiOutlineFacebook className="w-6 h-6" />,
    <AiOutlineRead className="w-6 h-6" />,
    <AiOutlineClockCircle className="w-6 h-6" />,
    <AiOutlineHighlight className="w-6 h-6" />,
    <AiOutlineDesktop className="w-6 h-6" />,
    <AiOutlineFacebook className="w-6 h-6" />,
    <AiOutlineRead className="w-6 h-6" />,
  ];
  return (
    <main className="relative flex justify-between bg-primary">
      <Categories />
      <div className="container my-4">
        <div className="bg-gradient-to-r from-blue-500 to-yellow-500 banner w-full h-[200px] rounded-md lg:px-4 lg:py-6 px-2 py-3 flex flex-col lg:space-y-2 space-y-1">
          <div className="text-white lg:text-[36px] text-[24px] font-extrabold">
            Free Delivery!
          </div>
          <p className="text-white">
            Don't miss it out! Only today, get free Next Day
            <br /> delivery on all of your orders.
          </p>
          <button className="px-4 py-2 font-bold text-yellow-500 bg-white rounded-full max-w-[300px]">
            Browse products
          </button>
        </div>
        <div className="lg:my-8 my-4">
          <div className="text-gray-700 text-[20px] font-extrabold">
            Popular categories ⭐
          </div>
          <div className="lg:flex grid grid-cols-2 md:grid-cols-5 md:gap-[8px] gap-[4px] my-2 space-x-0 space-y-0 lg:space-x-6 lg:space-y-2  text-gray-400 cursor-pointer ">
            {categoriesIcon.map((item, index) => (
              <div
                className="inline-flex lg:p-6 p-3 bg-white rounded-md shadow-lg"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="text-gray-700 text-[20px] font-extrabold lg:my-8 my-5">
          Hot deals 🔥
        </div>
        <div className="lg:flex block justify-between lg:space-x-4 space-x-2">
          {data.map((product) => (
            <Product
              title={product.name}
              subtitle={product.subtitle}
              image={product.image}
              price={product.price}
              rating={product.rating}
              viewer={product.viewer}
              id={product.id}
              discount={product.price_after_discount}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
