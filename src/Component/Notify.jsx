import React from "react";
import BarLoader from "react-spinners/BarLoader";
function Notify({ message, type }) {
  const override = {
    width: "300px",
  };
  return (
    <>
      <div className="notify">
        <div
          className={`flex items-center justify-center p-6 ${
            type === "error" ? "bg-red-500" : "bg-green-500"
          } rounded-md`}
        >
          <span className="text-[16px]  text-white ">
            {message || "Loading..."}
          </span>
        </div>
        <BarLoader
          color={type === "error" ? "red" : "green"}
          cssOverride={override}
        />
      </div>
    </>
  );
}
export default Notify;
