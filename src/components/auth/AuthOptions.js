import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { Button } from "../../components/buttons/Button";
import "../pages/Navbar/Navbar.css";

export default function AuthOptions() {
  // eslint-disable-next-line
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const { userData, setUserData } = useContext(UserContext);

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <>
      {userData.user ? (
        <Button buttonStyle="btn--outline" onClick={logout}>
          Log out
        </Button>
      ) : (
        <>
          <li className="nav-btn">
            {button ? (
              <Link to="/login" className="btn-link">
                <Button buttonStyle="btn--outline">login</Button>
              </Link>
            ) : (
              <Link to="/login" className="btn-link" onClick={closeMobileMenu}>
                <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                  login
                </Button>
              </Link>
            )}
          </li>

          <li className="nav-btn">
            {button ? (
              <Link to="/register" className="btn-link">
                <Button buttonStyle="btn--outline">register</Button>
              </Link>
            ) : (
              <Link
                to="/register"
                className="btn-link"
                onClick={closeMobileMenu}
              >
                <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                  register
                </Button>
              </Link>
            )}
          </li>
        </>
      )}
    </>
  );
}
