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
            <p className="text-white text-bold">
              Subtotal (0 items): <span>{value}</span>
            </p>
            <hr />
            <p className="text-white text-bold">
              Subtotal (0 items): <span>{value}</span>
            </p>
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
