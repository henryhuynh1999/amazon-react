import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { AiOutlineGoogle } from "react-icons/ai";
import Notify from "./Notify";
function Login() {
  const [success, setSuccess] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        setSuccess(true);
        setTimeout(() => {
          history.push("/");
        }, 3000);
      })
      .catch((error) => {
        setSuccess(false);
        setTimeout(() => {
          setSuccess(undefined);
        }, 3000);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          setSuccess(true);
          setTimeout(() => {
            history.push("/");
          }, 3000);
        }
      })
      .catch((error) => {
        setSuccess(false);
        setTimeout(() => {
          setSuccess(undefined);
        }, 3000);
      });
  };

  const renderToast = () => {
    if (success === undefined) return;
    return success ? (
      <Notify message="Login success 🎉🎉🎉" type="success" />
    ) : (
      <Notify message="Login failed 😭😭😭" type="error" />
    );
  };

  return (
    <>
      <main>
        <div className="relative flex items-center justify-center w-full h-screen ">
          <div className="h-screen w-[50%] bg-gray-700">
            <div className="flex flex-col items-center justify-center h-full ">
              <Link to="/">
                <img
                  className="w-[200px]"
                  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="Amazon-logo"
                />
              </Link>
              <form action="" className="flex flex-col space-y-2">
                <label className="text-white" htmlFor="account">
                  Account
                </label>
                <input
                  className="w-[300px] h-10 rounded-2xl pl-4"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password" className="text-white">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  className="w-[300px] h-10 rounded-2xl pl-4"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>
              <div className="w-[300px] flex space-y-4 flex-col">
                <button
                  className="w-full px-4 py-2 mt-4 text-white bg-yellow-500 rounded-xl"
                  onClick={signIn}
                >
                  Signin
                </button>
                <button className="flex items-center justify-center w-full px-4 py-2 mt-4 bg-yellow-500 rounded-xl">
                  <AiOutlineGoogle className="w-6 h-6 text-blue-800" />
                  <span className="font-extrabold text-red-600">
                    oo<span className="text-green-600">gle</span>
                  </span>
                </button>
                <p className="">
                  By continuing, you agree to Amazon's
                  <span className="text-blue-500 underline-blue-500">
                    Conditions of Use
                  </span>
                  and{" "}
                  <span className="text-blue-500 underline-blue-500">
                    Privacy Notice.
                  </span>
                </p>
                <p className="justify-between before:inline-flex before:w-[30%] before:h-[1px] before:bg-gray-400 after:inline-flex after:w-[30%] after:h-[1px] after:bg-gray-400 text-[14px] text-white flex  items-center">
                  New to Amazon?
                </p>
                <Link to="/register">
                  <button
                    className="w-full px-4 py-2 mt-4 text-white bg-yellow-500 rounded-xl"
                    onClick={register}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="h-screen w-[50%]">
            <img
              src="https://tronhouse.com/assets/data/editor/source/chup%20hinh%20amazon_1.jpg"
              className="w-full h-full cursor-pointer opacity-90 hover:opacity-100 hover:delay-75"
              alt=""
            />
          </div>
        </div>
        {renderToast()}
      </main>
    </>
  );
}

export default Login;
