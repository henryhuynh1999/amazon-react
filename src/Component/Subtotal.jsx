import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Hook/reducer";
import { useStateValue } from "../Hook/StateProvider";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <p className="text-red-500 text-bold">
            Subtotal (0 items): <strong>{value}</strong>
          </p>
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
