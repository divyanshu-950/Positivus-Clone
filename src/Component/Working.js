import React, { useState } from "react";
function Working() {
    var w = window.innerWidth;
    const[bg,setbg] = useState("#B9FF66")
    const[bg2,setbg2] = useState("#f3f3f3")
    const changebg = () =>{
        if(bg === "#B9FF66"){
            setbg("#f3f3f3")
        }
        else{
            setbg("#B9FF66")
        }
       }
   const changebg2 = () =>{
    if(bg2 === "#f3f3f3"){
        setbg2("#B9FF66")
    }
    else{
        setbg2("#f3f3f3")
    }
   }
  return (
    <div className="container-fluid my-5">
      <div className="row mx-1 my-5">
        <div className="col-md-5 my-3">
          <span
            className="fs-1 px-1"
            style={{ backgroundColor: "#B9FF66", borderRadius: "12px" }}
          >
            {" "}
            Our Working Process
          </span>
        </div>
        <div className="col-md-6 my-3" style={{ display: "flex",justifyContent:'space-between'}}>
          <p className="mx-2"
            style={{
              fontSize: "18px",
              textAlign: "justify",
             

            }}
          >
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
      </div>
      {w > 700 &&
     <div className="mx-5" style={{margin:'10px 45px'}}>
     <div class="accordion " id="accordionExample">
        <div class="accordion-item shadow" style={{padding:'10px 20px',border:'1px solid black',borderBottom:'5px solid black',borderRadius:'45px',marginTop:'50px',backgroundColor:bg}}>
          <h2 class="accordion-header">
           <p onClick={changebg} >
           <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{gap:'30px',backgroundColor:"inherit",color:'black'}}
            >
              <p style={{fontSize:'60px',fontWeight:'500'}}>01</p> <h2>Consultation</h2>
            </button>
           </p>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
          >
            <div class="accordion-body">
             <p style={{textAlign:'justify',fontSize:'20px'}}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements</p>
            </div>
          </div>
        </div>
        <div class="accordion-item shadow"  style={{padding:'10px 20px',border:'1px solid black',borderBottom:'5px solid black',borderRadius:'45px',marginTop:'50px',backgroundColor:bg2}}>
          <h2 class="accordion-header">
           <p onClick={changebg2}>
           <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              
              style={{gap:'30px',backgroundColor:'inherit',color:'black'}}
              >
                 <p style={{fontSize:'60px',fontWeight:'500'}}>02</p> <h2>Research and Strategy Development</h2>
            </button>
           </p>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
           
          >
            <div class="accordion-body">
              <p style={{textAlign:'justify',fontSize:'20px'}}>Research and Development (R&D) is an integral part of any company's growth strategy. It involves the analysis and exploration of ideas to create products or services that meet the needs of current or potential customers</p>
            </div>
          </div>
        </div>
      </div>
     </div>
}

{
        w < 700 && 
<div style={{margin:'10px 10px'}}>
     <div class="accordion " id="accordionExample">
        <div class="accordion-item shadow" style={{padding:'5px 20px',border:'1px solid black',borderBottom:'5px solid black',borderRadius:'45px',marginTop:'50px',backgroundColor:bg}}>
          <h2 class="accordion-header">
           <p onClick={changebg} >
           <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{gap:'20px',backgroundColor:"inherit",color:'black'}}
            >
              <p style={{fontSize:'40px',fontWeight:'500'}}>01</p> <h3>Consultation</h3>
            </button>
           </p>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
          >
            <div class="accordion-body">
             <p style={{textAlign:'justify',fontSize:'16px'}}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements</p>
            </div>
          </div>
        </div>
        <div class="accordion-item shadow"  style={{padding:'5px 20px',border:'1px solid black',borderBottom:'5px solid black',borderRadius:'45px',marginTop:'50px',backgroundColor:bg2}}>
          <h2 class="accordion-header">
           <p onClick={changebg2}>
           <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              
              style={{gap:'20px',backgroundColor:'inherit',color:'black'}}
              >
                 <p style={{fontSize:'40px',fontWeight:'500'}}>02</p> <h3>Research and Strategy Development</h3>
            </button>
           </p>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
           
          >
            <div class="accordion-body">
              <p style={{textAlign:'justify',fontSize:'16px'}}>Research and Development (R&D) is an integral part of any company's growth strategy. It involves the analysis and exploration of ideas to create products or services that meet the needs of current or potential customers</p>
            </div>
          </div>
        </div>
      </div>
     </div>
     }
    </div>
  );
}

export default Working;
