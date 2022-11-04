import React from "react";
import { useStateValue } from "../../Hook/StateProvider";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import data from "../../../data/product.json";

function Product({
  id,
  title,
  image,
  price,
  rating,
  viewer,
  subtitle,
  discount,
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
      },
    });
  };
  return (
    <main>
      <div className="w-[200px] h-[350px] flex justify-center items-center shadow-xl rounded-lg relative">
        <img
          src="https://m.media-amazon.com/images/I/51f-Cfkk1hL._AC_UY327_FMwebp_QL65_.jpg"
          alt=""
          className="object-cover opacity-90 hover:opacity-100 hover:delay-150"
        />
        {!activeInterest ? (
          <AiOutlineHeart
            onClick={() => setActiveInterest(!activeInterest)}
            className={`absolute z-10 w-6 h-6 text-gray-400 cursor-pointer top-2 right-2`}
          />
        ) : (
          <AiFillHeart
            onClick={() => setActiveInterest(!activeInterest)}
            className={`absolute z-10 w-6 h-6 fill-yellow-500 cursor-pointer top-2 right-2`}
          />
        )}
      </div>
      <div>
        <p className="text-sm font-bold text-gray-500">{title}</p>
        <small>{subtitle}</small>
        <div className="flex items-center space-x-1">
          {data.map((rating) => (
            <AiFillStar className="w-4 h-4 text-yellow-500" />
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
      <button onClick={addToBasket}>Add to basket</button>
    </main>
  );
}

export default Product;
