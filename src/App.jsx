import React, { useEffect } from "react";
import "./App.scss";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Checkout from "./Component/Checkout";
import Register from "./Component/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./Hook/StateProvider";
import { auth } from "./firebase";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is: ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
