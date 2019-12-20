import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="homeFooterSection" className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="row row-1">
              <div className="col-md-3">
                <img src={require("../../assets/img/logo.png")} alt="" />
              </div>
              <div className="col-md-3">
                <Link className="faq">FAQ</Link>
              </div>
              <div className="col-md-3">
                <Link className="policy">Privacy Policy</Link>
              </div>
              <div className="col-md-3">
                <Link className="terms">Terms & Conditions</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="row">
              <div className="col-md-4 phone-number">
                <p>+2348123456789</p>
              </div>
              <div className="col-md-6 email">
                <img src={require("../../assets/img/envelope.png")} alt="" />
                <span>support@monkheypay.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright">
              Copyright &copy; 2020 Fusion Campaign. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
