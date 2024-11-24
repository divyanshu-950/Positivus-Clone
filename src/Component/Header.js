import React from "react";
import img from "../img/Illustration.png";
import logo1 from "../img/amazon.png";
import logo2 from "../img/dribble.png";
import logo3 from "../img/hubspot.png";
import logo4 from "../img/notion.png";
import logo5 from "../img/netflix.png";
import logo6 from "../img/zoom.png";
function Header() {
  var w = window.innerWidth;
   
  return (
    <>
      {w > 700 &&
       <div className="container-fluid">
      <div
        className="row"
        style={{
          margin: "50px 10px 20px 50px",
          justifyContent: "space-around",
        }}
      >
        <div className=" col-md-5 ">
          <p className="head-font fonty">
            Navigating the digital landscape for success
          </p>
          <p
            className="text-font"
            style={{ fontSize: "20px", lineHeight: "28px", marginTop: "20px" }}
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation
          </p>
          <div style={{ textAlign: "left" }}>
            <button
              style={{
                fontSize: "20px",
                marginTop: "40px",
                backgroundColor: "#191A23",
                color: "white",
                borderRadius: "14px",
                padding: "20px 35px",
              }}
            >
              Book a Consultation
            </button>
          </div>
        </div>
        <div className=" col-md-6">
          <img style={{ width: "100%" }} src={img} alt="" />
        </div>
      </div>
      <div
      className="row row-cols-auto"
      style={{
        justifyContent: "space-between",
        padding: "0px 30px 0px 55px",
      }}
    >
      <div className="col-md-1 mx-5 ">
        {" "}
        <img src={logo1} style={{ width: "100%" }} alt="" />
      </div>
      <div className="col-md-1 mx-4">
        {" "}
        <img src={logo2} style={{ width: "100%" }} alt="" />
      </div>
      <div className="col-md-1 mx-4">
        {" "}
        <img src={logo3} style={{ width: "100%" }} alt="" />
      </div>
      <div className="col-md-1 mx-4">
        {" "}
        <img src={logo4} style={{ width: "100%" }} alt="" />
      </div>
      <div className="col-md-1 mx-4">
        {" "}
        <img src={logo5} style={{ width: "100%" }} alt="" />
      </div>
      <div className="col-md-1 mx-4">
        {" "}
        <img src={logo6} style={{ width: "100%" }} alt="" />
      </div>
    </div>
   
  </div>
       }
       {
        w < 700 && 
        <div className="container-fluid">
        <div className="row" style={{margin:'10px 0 10px 10px'}}>
          <div className="col-12"> <p className="head-font fonty">
            Navigating the digital landscape for success
          </p></div>
          <div className="col-12"> <img style={{ width: "100%" }} src={img} alt="" /></div>
          <div className="col-12">  <p
            className="text-font"
            style={{ fontSize: "20px", lineHeight: "28px", marginTop: "20px" }}
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation
          </p>
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                fontSize: "20px",
                margin: "30px",
                backgroundColor: "#191A23",
                color: "white",
                borderRadius: "14px",
                padding: "20px 45px",
              }}
            >
              Book a Consultation
            </button>
          </div>
          </div>
        </div>
        
      <div
        className="row row-cols-4"
        style={{
          justifyContent: "space-between",
          padding: "0px 20px 0px 20px",
        }}
      >
        <div className="col-md-1 mx-1">
          {" "}
          <img src={logo1} style={{ width: "100%" }} alt="" />
        </div>
        <div className="col-md-1 mx-1">
          {" "}
          <img src={logo2} style={{ width: "100%" }} alt="" />
        </div>
        <div className="col-md-1 mx-1">
          {" "}
          <img src={logo3} style={{ width: "100%" }} alt="" />
        </div>
        <div className="col-md-1 mx-1">
          {" "}
          <img src={logo4} style={{ width: "100%" }} alt="" />
        </div>
        <div className="col-md-1 mx-1">
          {" "}
          <img src={logo5} style={{ width: "100%" }} alt="" />
        </div>
        <div className="col-md-1 mx-1">
          {" "}
          <img src={logo6} style={{ width: "100%" }} alt="" />
        </div>
      </div>
     
    </div>
}
    </>
  );
}

export default Header;
