import React from "react";
import { useStateValue } from "../Hook/StateProvider";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import data from "../../data/product.json";
import ProductDetail from "./ProductDetail";
function Product({
  id,
  title,
  image,
  price,
  rating,
  viewer,
  subtitle,
  discount,
  quantity,
}) {
  const [activeInterest, setActiveInterest] = useState(false);
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        viewer: viewer,
        discount: discount,
        subtitle: subtitle,
        quantity: quantity,
      },
    });
  };
  return (
    <main>
      <div className="w-[200px] h-[350px] flex justify-center items-center shadow-xl rounded-lg relative">
        <img
          src={image}
          alt=""
          className="object-cover opacity-90 hover:opacity-100 hover:delay-150"
        />
        {!activeInterest ? (
          <div className="absolute z-10 p-[3px] bg-white border border-[#2D3C4C] shadow-outline rounded-lg  cursor-pointer top-2 right-2">
            <AiOutlineHeart
              onClick={() => setActiveInterest(!activeInterest)}
              className={`w-6 h-6 text-gray-400`}
            />
          </div>
        ) : (
          <div className="absolute z-10 p-[3px] bg-white border border-black rounded-lg shadow-outline cursor-pointer top-2 right-2 animate-bounce-slow">
            <AiFillHeart
              onClick={() => setActiveInterest(!activeInterest)}
              className={`w-6 h-6 fill-yellow-500`}
            />
          </div>
        )}
      </div>
      <div>
        <p className="text-[16px] font-bold text-gray-500">{title}</p>
        <small
          className={`px-[5px] py-[3px] text-white ${
            rating === 0
              ? "bg-pink-400"
              : `${
                  rating === 1
                    ? "bg-yellow-400"
                    : `${
                        rating === 2
                          ? "bg-green-400"
                          : `${
                              rating === 3
                                ? "bg-blue-400"
                                : `${
                                    rating === 4
                                      ? "bg-violet-400-400"
                                      : `${rating === 5 ? "bg-orange-400" : ""}`
                                  }`
                            }`
                      }`
                }`
          } rounded-full`}
        >
          {`#${subtitle}`}
        </small>
        <div className="flex items-center space-x-1">
          {data.map((rating) => (
            <AiFillStar className="w-4 h-4 text-yellow-500 " />
          ))}
          <p>{viewer}</p>
        </div>
        <div className="flex items-center space-x-3">
          <p className="font-bold text-[24px]">${discount}</p>
          <p className="text-gray-400">
            <del>${price}</del>
          </p>
        </div>
      </div>
      <button
        onClick={addToBasket}
        className="w-full p-3 button hover:scale-105 active:bg-yellow-600 active:text-light-500"
      >
        Add to basket
      </button>
      <ProductDetail />
    </main>
  );
}

export default Product;
