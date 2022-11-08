import React from "react";
import BarLoader from "react-spinners/BarLoader";
function Notify({ message, color }) {
  const override = {
    width: "300px",
  };
  return (
    <>
      <div className="notify">
        <div
          className={`flex items-center justify-center p-6 ${
            color === "red" ? "bg-red-500" : "bg-green-500"
          } rounded-md`}
        >
          <span className="text-[16px]  text-white ">
            {message || "Loading..."}
          </span>
        </div>
        <BarLoader color={color} cssOverride={override} />
      </div>
    </>
  );
}
export default Notify;
