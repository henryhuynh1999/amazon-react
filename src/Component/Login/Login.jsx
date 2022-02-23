import React, { useState } from "react";
import logo from "../../image/amazon-logo-black.jpeg";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../../firebase";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signIn = (event) => {
    event.preventDefault();
    //firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => console.warn(`Can't sign in ${err.message}`));
  };

  const register = (event) => {
    event.preventDefault();
    //firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        alert("Account created");
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => console.warn(`Can't create account ${error.message}`));
  };
  return (
    <div className="login">
      <Link to="./">
        <img src={logo} alt="" className="login_logo" />
      </Link>
      <div className="login-container">
        <span className="login-content">Sign-in</span>
        <span className="login-title">Email</span>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          id="login-field"
        />
        <span className="login-title">Password</span>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          id="login-field"
        />
        <button className="login-btn" type="submit" onClick={signIn}>
          Continute
        </button>
        <span className="login-policy">
          By By continuing, you agree to Amazon's{" "}
          <a
            href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"
            target="_blank"
          >
            Conditions of Use
          </a>
          and{" "}
          <a
            href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496"
            target="_blank"
          >
            Privacy Notice.
          </a>
          <span className="login-help">
            <a href="">Need help?</a>
          </span>
        </span>
      </div>
      <div className="login-sign">
        <div className="login-sign__title">New to Amazon?</div>
        <button className="login-sign__btn" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
