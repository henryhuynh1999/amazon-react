import React from "react";
import BarLoader from "react-spinners/BarLoader";

function Notify({ success }) {
  const override = {
    width: "300px",
  };
  return (
    <>
      {" "}
      {success ? (
        <div className="w-[300px] h-[50px] absolute hidden top-6 right-[50%] translate-x-[50%] ">
          <div className="flex items-center justify-center p-6 bg-green-500 rounded-">
            <span className="text-[16px]  text-white ">
              You create account successfully 🎉🎉🎉
            </span>
          </div>
          <BarLoader color="green" cssOverride={override} />
        </div>
      ) : (
        <div className="w-[300px] h-[50px] absolute top-6 right-[50%] translate-x-[50%] ">
          <div className="flex items-center justify-center p-6 bg-red-500 rounded-md">
            <span className="text-[16px]  text-white ">
              Something wrong !!! 😭😭😭
            </span>
          </div>
          <BarLoader color="red" cssOverride={override} />
        </div>
      )}
    </>
  );
}

export default Notify;
