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
    <div className="container ">
      <div>
        <div>
          <h2 className="font-extrabold text-yellow-500 text-[46px] flex p-12">
            Shopping Cart <div className="animate-bounce">🛒</div>
          </h2>
          {basketItems.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              price={item.price}
            ></CheckoutProduct>
          ))}
        </div>
      </div>
      <Subtotal />
    </div>
  );
}

export default Checkout;
