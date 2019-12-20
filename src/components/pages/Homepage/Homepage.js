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
    </>
  );
};

export default Homepage;
