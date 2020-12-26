import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import { Button } from "../buttons/Button";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="login-container">
      <h2>Log In</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={submit}>
        <div className="form-inputs">
          <label htmlFor="login-email" className='form-label'>Email</label>
          <input
            className="form-input"
            id="login-email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="login-password" className='form-label'>Password</label>
          <input
            className="form-input"
            id="login-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button buttonStyle="btn--outline">log in </Button>
      </form>
    </div>
  );
}
