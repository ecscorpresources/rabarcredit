import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div id="homeFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h3>Loan</h3>
            <hr />
            <h1>Just When you need it</h1>
            <h2>...It comes</h2>
          </div>
        </div>
      </div>
      <div id="homeSecondSection" className="container-fluid">
        <p>Our Commitments</p>
      </div>
      <div id="homeThirdSection" className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <img src={require("../../../assets/img/1sficon.png")} alt="" />
            <p>
              Soft <br /> Online Application
            </p>
          </div>
          <div className="col-md-2">
            <img src={require("../../../assets/img/2sficon.png")} alt="" />
            <p>
              Instant <br /> Credit Disbursement
            </p>
          </div>

          <div className="col-md-2">
            <img src={require("../../../assets/img/3sficon.png")} alt="" />
            <p>
              Fully <br /> Safe And Secured
            </p>
          </div>
          <div className="col-md-2">
            <img src={require("../../../assets/img/4sficon.png")} alt="" />
            <p>
              Comfortable <br /> Payback System
            </p>
          </div>
        </div>
      </div>
      <div id="homeFourthSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Know Your Rabar</h1>
            <p>
              With Rabar, you can apply for convenient <br /> credits to
              purchase any of your desired <br /> needs and pay back bit by bit
            </p>
          </div>
        </div>
      </div>

      <div id="homeFifthSection" className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <img src={require("../../../assets/img/banner.png")} alt="" />
          </div>
          <div className="col-md-4">
            <Link to="monkhey">APPLY NOW</Link>
          </div>
        </div>
      </div>

      <div id="homeSixthSection" className="container-fluid">
        <div className="row parent_row">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-12">
                <h1>How it works</h1>
              </div>
            </div>
            <div className="row signup_row">
              <div className="col-md-12">
                <img src={require("../../../assets/img/icon1.png")} alt="" />
                <div>
                  <h3>Sign Up</h3>
                  <p>
                    Register to create your account <br /> and begin to enjoy
                    fast <br /> convenient credits
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <img src={require("../../../assets/img/icon2.png")} alt="" />
                <div>
                  <h3>Apply</h3>
                  <p>
                    Fill in your details and choose an <br />
                    option that suits your needs. <br />
                    product credit or credit cards
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <img src={require("../../../assets/img/icon3.png")} alt="" />
                <div>
                  <h3>Get Credit Card</h3>
                  <p>
                    Pick up or get your credit card <br /> delivered to you
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <img src={require("../../../assets/img/icon4.png")} alt="" />
                <div>
                  <h3>Begin</h3>
                  <p>
                    You can now make purchases on our <br /> online stores or
                    any partner store
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-9 column_1">
                <h1>Calculate your Loan</h1>
                <form>
                  <div className="input_div">
                    <label htmlFor="monthly earnings">Monthly Earnings</label>
                    <input type="text" placeholder="N 0.00" />
                  </div>
                  <div className="input_div">
                    <label htmlFor="intended loan">Intended Loan</label>
                    <input type="text" placeholder="N 0.00" />
                  </div>
                  <p>Payment Duration</p>
                  <div className="radio_div">
                    <div>
                      <input type="radio" name="days" /> <span> 90days</span>
                    </div>
                    <div>
                      <input type="radio" name="days" /> <span> 180days</span>
                    </div>
                    <div>
                      <input type="radio" name="days" /> <span> 270days</span>
                    </div>
                  </div>
                  <button type="submit">Calculate Payment Amount</button>
                </form>
                <p>Monthly Repayment Amount</p>
                <h4>N 0.00 </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9 column_2">
                <h1>
                  No Need To Break <br /> The Bank To Pay
                </h1>

                <p>
                  Our credit facility serves <br /> you the luxury of paying
                  <br /> easily while averagely <br /> managing your life style
                  <br />
                  and enjoying the credit <br /> facility
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="homeSeventhSection" className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={require("../../../assets/img/Rabar Borrower.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-md-7">
                <h1>Before Before...</h1>
                <h2>N236, 500</h2>
                <p>Pay Cash or Waka</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={require("../../../assets/img/laptop.png")}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-3">
            <h1>NOW</h1>
            <h2>N29, 000 Monthly</h2>
            <p>Easy Payments...Chilling</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
