import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="homeFooterSection" className="container-fluid">
        <div className="parent">
          <div>
            <span className="image">
              <Link to="monkhey" className="monkhey-logo">
                <img src={require("../../assets/img/logo.png")} alt="" />
              </Link>
            </span>
            <Link className="faq">FAQ</Link>

            <Link className="policy">Privacy Policy</Link>

            <Link className="terms">Terms & Conditions</Link>
          </div>
          <div>
            <span>
              <img src={require("../../assets/img/envelope.png")} alt="" />
            </span>
            <span>support@softloan.com</span>
          </div>
        </div>

        <p className="copyright">
          Copyright &copy; 2020 softloan. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
