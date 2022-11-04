import React, { useState } from "react";
import logo from "../../image/amazon-logo-black.jpeg";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { AiOutlineGoogle } from "react-icons/ai";
// import { userAuth } from "../../Hook/AuthContext";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  // const { googleSignIn } = userAuth();
  // const handleUserSignIn = async () => {
  //   try {
  //     await googleSignIn();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
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
              className="w-full h-full cursor-pointer blur-sm hover:blur-0 hover:delay-75"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="w-[300px] h-[50px] absolute top-6 right-[50%] translate-x-[50%] ">
            <div className="rounded-md flex justify-center items-center p-6  bg-green-500">
              <span className="text-[16px]  text-white ">
                You create account successfully 🎉🎉🎉
              </span>
            </div>
            <div className="w-full h-[3px] bg-red-400 rounded-b-xl"></div>
          </div>
        </div>
        <div className="w-[300px] h-[50px] absolute hidden top-6 right-[50%] translate-x-[50%] ">
          <div className="rounded-md flex justify-center items-center p-6  bg-red-500">
            <span className="text-[16px]  text-white ">
              Something wrong !!! 😭😭😭
            </span>
          </div>
          <div className={`h-[3px] bg-green-400 rounded-b-xl`}></div>
        </div>
      </main>
    </>
  );
}

export default Login;
