import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Hook/reducer";
import { useStateValue } from "../Hook/StateProvider";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="sticky right-0 px-6 py-[100px] top-4 subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="text-white text-bold">
              Subtotal ({basket.length}): <span>{value}</span>
            </div>
            <hr />
            <div className="text-white text-bold">
              Estimate Shipping <span>30$</span>
            </div>
            <hr />
            <div className="flex justify-between space-x-6">
              <div className="text-[24px] font-bold">Total</div>
              <div className="flex flex-col ">
                <div>{value}</div>
                <div>Additional free and taxes may apply</div>
              </div>
            </div>
            <button className="w-full px-10 py-4 text-white rounded-full bg-secondary">
              Proceed
            </button>
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
