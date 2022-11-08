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
    <AiOutlineHighlight className="w-6 h-6" />,
  ];
  return (
    <main className="relative flex justify-between bg-primary">
      <Categories />
      <div className="container my-4">
        <div className="bg-gradient-to-r from-blue-500 to-yellow-500 banner w-full h-[200px] rounded-md px-4 py-6 flex flex-col space-y-2">
          <div className="text-white text-[36px] font-extrabold">
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
        <div className="my-8">
          <div className="text-gray-700 text-[20px] font-extrabold">
            Popular categories ⭐
          </div>
          <div className="flex my-4 space-x-8 text-gray-400 cursor-pointer ">
            {categoriesIcon.map((item) => (
              <div className="inline-flex p-6 bg-white rounded-md shadow-lg ">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="text-gray-700 text-[20px] font-extrabold my-8">
          Hot deals 🔥
        </div>
        <div className="flex justify-between space-x-6 ">
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
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
