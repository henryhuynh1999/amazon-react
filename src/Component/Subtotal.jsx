import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Hook/reducer";
import { useStateValue } from "../Hook/StateProvider";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="px-8 py-24 button ">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="text-white text-bold">
              Subtotal ({console.log(value)}): <span>{value}</span>
            </div>
            <hr />
            <div className="text-white text-bold">
              Subtotal (0 items): <span>{value}</span>
            </div>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
