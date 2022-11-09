import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal, getSaleTotal } from "../Hook/reducer";
import { useStateValue } from "../Hook/StateProvider";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const fakeShipping = 0;
  const fakeCode = "AMAZONAPP";
  return (
    <div className="sticky right-0 px-6 py-[100px] top-4 subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div className="flex flex-col space-y-4">
            <div className="text-white text-bold">
              Subtotal ({basket.length}): <span>{value}</span>
            </div>
            <hr />
            <div className="text-white text-bold">
              Estimate Shipping <span>30$</span>
            </div>
            <hr />
            <div>
              <form action="">
                <label
                  htmlFor="code"
                  className="text-white text-[24px] font-extrabold"
                >
                  Code Sale 🚀
                </label>
                <input
                  type="text"
                  name="code"
                  className="code-sale px-8 py-2 w-full text-gray-600"
                  placeholder="Input Code For Sale"
                  value={fakeCode}
                />
              </form>
            </div>
            <div className="flex justify-between space-x-6">
              <div className="text-[24px] font-bold">Total</div>
              <div className="flex flex-col ">
                <div className="text-secondary text-[24px] font-medium">
                  {value}
                </div>
              </div>
            </div>
            <button className="w-full px-10 py-4 text-white rounded-full bg-secondary hover:bg-gray-700 ">
              Proceed
            </button>
          </div>
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
