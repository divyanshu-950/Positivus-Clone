import React from "react";
import "../Navbar.css";
import logo from "../Logo.png";

function Navbar() {
  var w = window.innerWidth;
  return (
    <nav class={`navbar navbar-expand-lg my-4 ${w>700?'px-2':'px-3'}`}  style={{ top:w>700? "1.5rem":'5px' ,padding:'0px 0px'}}>
      <div class="container-fluid" style={{padding: "0" }}>
        <div className="nav-logo">
            <img src={logo} alt="logo" class="logo" height="100%" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent" style={{marginLeft:w>700?'150px':''}}>
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0"
            style={{fontSize:w>700?'25px':'16px',gap:w>700?'50px':'10px',fontWeight:'400',alignItems:w>700?'baseline':''}}
          >
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                About us
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active" href="/">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/">
                Use Cases
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <button
                style={{
                  padding: "20px 35px",
                  borderRadius: "14px",
                  backgroundColor: "transparent",
                  border: "1px solid black",
                }}
              >
                Request a quote
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
