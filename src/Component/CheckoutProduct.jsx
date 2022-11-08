import React from "react";
import { useStateValue } from "../Hook/StateProvider";
function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="container flex">
      <div className="w-[200px] h-[150px]">
        <img src={image} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="checkout-product__info">
        <p className="checkout-product__title">{title}</p>
        <p className="checkout-product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button
          onClick={removeFromBasket}
          className="w-full p-3 button hover:scale-105 active:bg-yellow-600 active:text-light-50"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
