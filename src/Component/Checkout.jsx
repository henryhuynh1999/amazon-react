import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../Hook/StateProvider";
import React, { useEffect, useState } from "react";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const [basketItems, setBasketItems] = useState([]);
  useEffect(() => {
    setBasketItems(basket);
  }, [basket]);
  return (
    <div className="container grid grid-cols-12 mt-8 gap-[32px]">
      <div className="col-span-8">
        <h2 className="font-extrabold text-yellow-500 text-[46px] flex">
          Shopping Cart <div className=" animate-bounce">🛒</div>
        </h2>
        {basketItems.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            price={item.price}
            quantity={item.quantity}
            subtitle={item.subtitle}
          ></CheckoutProduct>
        ))}
      </div>
      <div className="col-span-4">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
