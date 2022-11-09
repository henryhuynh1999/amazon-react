import React from "react";
import { useStateValue } from "../Hook/StateProvider";
function CheckoutProduct({ id, image, title, price, subtitle, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="grid grid-cols-12 gap-[32px] rounded-lg shadow-md p-8 bg-primary">
      <div className="col-span-6">
        <img src={image} alt="" className="object-cover  rounded-lg" />
      </div>
      <div className="col-span-6 space-y-4">
        <div className="flex justify-between">
          <div>
            <div>{title}</div>
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
                                          : `${
                                              rating === 5
                                                ? "bg-orange-400"
                                                : ""
                                            }`
                                      }`
                                }`
                          }`
                    }`
              } rounded-full`}
            >
              {`#${subtitle}`}
            </small>
          </div>
          <div className="text-[24px] text-primary font-extrabold">
            ${price}
          </div>
        </div>
        <button
          onClick={removeFromBasket}
          className="w-[200px] p-3 button hover:scale-105 active:bg-yellow-600 active:text-light-50 hover:animate-btn"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
