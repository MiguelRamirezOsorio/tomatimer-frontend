import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Header from "./components/pages/Navbar/Navbar";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer"
import Services from "./components/pages/Services/Services"
import Programs from "./components/pages/Programs/Programs"
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/UserContext";
import "./style.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path= "/programs" component= {Programs} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>

            <Footer />
        </UserContext.Provider>
      </Router>
    </>
  );
}
