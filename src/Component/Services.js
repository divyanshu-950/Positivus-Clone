import React from "react";
import img from "../img/Icon.png";
import img1 from "../img/ads.png";
import img2 from "../img/search.png";

function Services() {
    var w = window.innerWidth;
  return (
    <div className="container-fluid my-5">
      <div className="row mx-1 my-5">
        <div className="col-md-3 my-3">
          <span
            className="fs-1 px-1"
            style={{ backgroundColor: "#B9FF66", borderRadius: "12px" }}
          >
            {" "}
            Services
          </span>
        </div>
        <div className="col-md-6 my-3">
          <p style={{ fontSize: "18px", textAlign: "justify",display:'flex',justifyContent:'flex-end' }}>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
      </div>
      {w > 650 &&
      <div
        className="row mx-3"
        style={{ gap: "50px", justifyContent: "space-around" }}
      >
        <div
          className="col-md-5 shadow"
          style={{
            borderBottom:'5px solid black',
            border: "2px solid black",
            height: "310px",
            borderRadius: "45px",
            padding: "50px",
            backgroundColor: "#F3F3F3",
          }}
        >
         <div className="row"> 
            <div className="col-sm-6 col-10">
            <span
              className="fs-3 fw-bolder"
              style={{ backgroundColor: "#B9FF66",padding:'5px' }}
            >
              Search engine optimization
            </span>
           
          </div>
          <div className="col-sm-5  col-9 my-3">
            <img src={img2} alt="search_image" style={{ width: "80%" }} />
          </div>
          <div className="col-sm-5  ">
          <div >
              <a href="/" style={{ color: "black",textDecoration:'none' }}>
               
               <p className="fs-5"> <img src={img} alt="learn_more" /> Learn more</p>
              </a>
            </div>
          </div>
          </div>
        </div>
        <div
          className="col-md-5 shadow"
          style={{
            borderBottom:'5px solid black',
            border: "2px solid black",
            height: "310px",
            borderRadius: "45px",
            padding: "50px",
            backgroundColor: "#B9FF66",
          }}
        >
          <div className="row"> 
            <div className="col-sm-6 col-10">
            <span
              className="fs-3 fw-bolder"
              style={{ backgroundColor: "#F3F3F3",padding:'5px' }}
            >
              Pay-per-click advertising
            </span>
           
          </div>
          <div className="col-sm-5 col- my-4">
            <img src={img1} alt="search_image" style={{ width: "80%" }} />
          </div>
          <div className="col-sm-5  ">
          <div >
              <a href="/" style={{ color: "black",textDecoration:'none' }}>
               
               <p className="fs-5"> <img src={img} alt="learn_more" /> Learn more</p>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
}
{
        w < 650 && 
        <div
        className="row mx-3"
        style={{ gap: "50px", justifyContent: "space-around" }}
      >
        <div
          className="col-md-5"
          style={{
            borderBottom:'5px solid black',
            border: "2px solid black",
            height: "310px",
            borderRadius: "45px",
            padding: "50px",
            backgroundColor: "#F3F3F3",
          }}
        >
         <div className="row"> 
            <div className="col-10">
            <span
              className="fs-3 fw-bolder"
              style={{ backgroundColor: "#B9FF66",padding:'5px' }}
            >
              Search engine optimization
            </span>
           
          </div>
          <div className="col-9 " style={{marginLeft:'90px'}}>
            <img src={img2} alt="search_image" style={{ width: "80%" }} />
          </div>
          <div className="col-2">
        
              <a href="/" style={{ color: "black",textDecoration:'none' }}>
               
               <p className="fs-5"> <img src={img} alt="learn_more" /> </p>
              </a>
          </div>
          </div>
        </div>
        <div
          className="col-md-5"
          style={{
            borderBottom:'5px solid black',
            border: "2px solid black",
            height: "310px",
            borderRadius: "45px",
            padding: "50px",
            backgroundColor: "#B9FF66",
          }}
        >
          <div className="row"> 
            <div className="col-6 col-10">
            <span
              className="fs-3 fw-bolder"
              style={{ backgroundColor: "#F3F3F3",padding:'5px' }}
            >
              Pay-per-click advertising
            </span>
           
          </div>
          <div className="col-11 my-1" style={{marginLeft:'90px'}}>
            <img src={img1} alt="search_image" style={{ width: "80%" }} />
          </div>
          <div className="col-2 ">
          
              <a href="/" style={{ color: "black",textDecoration:'none' }}>
               
               <p className="fs-5"> <img src={img} alt="learn_more" /></p>
              </a>
            
          </div>
          </div>
        </div>
      </div>
}
    </div>
  );
}

export default Services;
