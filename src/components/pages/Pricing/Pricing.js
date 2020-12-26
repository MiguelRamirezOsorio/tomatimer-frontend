import React from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { Button } from "../../buttons/Button";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import './Pricing.css';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Pricing</h1>
            <div className="pricing__container">
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Starter</h3>
                  <h4>Free</h4>
                  <ul className="pricing__container-features">
                    <li>Try it out</li>
                    <li>basic functionalities </li>
                    <li>don't waste your time </li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>

              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Gold</h3>
                  <h4>$3.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>Access to statistics</li>
                    <li>improve your work</li>
                    <li>the best plan </li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    Choose Plan
                  </Button>
                </div>
              </Link>

              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Diamond</h3>
                  <h4>$9.99</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>Access to monthly conferences</li>
                    <li>exclusive for diamonds</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
