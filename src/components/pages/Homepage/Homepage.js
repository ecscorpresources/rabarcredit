import React from "react";

const Homepage = () => {
  return (
    <>
      <div id="homeFirstSection" className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <hr />
            <h1>Just When you need it</h1>
            <h2>...It comes</h2>
            <img src={require("../../../assets/img/sf2.png")} alt="" />
          </div>
        </div>
      </div>
      <div id="homeSecondSection" className="container-fluid">
        <div>
          <img src={require("../../../assets/img/sf3.png")} alt="" />
          <span>Our Commitment</span>
          <hr />
        </div>
      </div>
      <div id="homeThirdSection" className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <img src={require("../../../assets/img/1sficon.png")} alt="" />
            <p>Soft Online Application</p>
          </div>
          <div className="col-md-4">
            <img src={require("../../../assets/img/2sficon.png")} alt="" />
            <p>Instant Loan Disbursement</p>
          </div>
        </div>
        <div className="row row-2">
          <div className="col-md-4">
            <img src={require("../../../assets/img/3sficon.png")} alt="" />
            <p>Fully Safe And Secured</p>
          </div>
          <div className="col-md-4">
            <img src={require("../../../assets/img/4sficon.png")} alt="" />
            <p>Comfortable Payback System</p>
          </div>
        </div>
      </div>
      <div id="homeFourthSection" className="container-fluid">
        <div>
          <h1>If You Have A Good Credit Score</h1>
          <h1>...Why Not Apply Now</h1>
          <img src={require("../../../assets/img/sfarrow.png")} alt="" />
        </div>
      </div>
      <div id="homeFifthSection" className="container-fluid">
        <div className="row first-row">
          <div className="col-md-12  first">
            <hr />
            <h1>How It Works</h1>
            <img
              src={require("../../../assets/img/sf4_2.png")}
              alt=""
              className="first-image"
            />
          </div>
        </div>

        <div className="row second">
          <div className="col-md-4 right">
            <h1>SignUp</h1>
            <p>
              Register on our platform to create <br /> your soft loan accout
              and begin <br /> to enjoy fast convenient loan <br />
              disbursement
            </p>
          </div>
          <div className="col-md-4 image">
            <img src={require("../../../assets/img/sf5.png")} alt="" />
          </div>
          <div className="col-md-4">
            <h1>Apply</h1>
            <p>
              Fill out our simple 5 minutes online <br /> application form
              providing necessary <br /> information, then apply
            </p>
          </div>

          <div className="col-md-4 confirm right">
            <h1>Confirm Your Loan</h1>
            <p>
              Confirm the details of your loan <br /> request and authorize it
              online
            </p>
          </div>
          <div className="col-md-4 access">
            <h1>Access Your Loan</h1>
            <p>
              If your plan is approved. <br /> funds will be disbursed into
              <br /> your bank within minutes
            </p>
          </div>
          <div className="col-md-4 right payback">
            <h1>Pay Back</h1>
            <p>
              Repay your loan within the <br /> stipulated due time to enjoy
              <br /> access to more loans
            </p>
          </div>
        </div>
      </div>
      <div id="homeSixthSection" className="container-fluid">
        <div className="row row-1">
          <div className="col-md-12">
            <img src={require("../../../assets/img/sf6.png")} alt="" />
            <p className="calculate">Calculate Your Loan</p>
            <hr />
          </div>
        </div>
        <div className="row row-2">
          <div className="col-md-2">
<<<<<<< HEAD
            <p>N 0.0</p>
=======
            <p className="zero">N 0.0</p>
>>>>>>> d4c97a7... Finished Homepage
          </div>
          <div className="col-md-7">
            <img src={require("../../../assets/img/sf8.png")} alt="" />
          </div>
          <div className="col-md-2">
<<<<<<< HEAD
            <p>N100,000</p>
          </div>
        </div>
        <div className="row">
=======
            <p className="hundred">N100,000</p>
          </div>
        </div>
        <div className="row row-3">
>>>>>>> d4c97a7... Finished Homepage
          <div className="col-md-4">
            <ul className=" first">
              <li> 15 days</li>
              <li> 30 days</li>
              <li> 60 days</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>N20,000</h4>
            <button type="submit">Get Your Loan Now</button>
          </div>
          <div className="col-md-4">
            <ul>
              <li>Interest Rate 15%</li>
              <li>Interest N3,000</li>
              <li>Payment N23,000</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
