import React from 'react'
function Testimonials() {
  var w = window.innerWidth;
  return (
    <div className="container-fluid my-5">
      <div className="row mx-1 my-5">
        <div className="col-md-3 my-3" style={{textAlign:'justify'}}>
          <span
            className="fs-1 px-1 mx-5"
            style={{ backgroundColor: "#B9FF66", borderRadius: "12px" }}
          >
            {" "}
            Testimonials
          </span>
        </div>
        <div className="col-md-6 my-3" style={{ display: "flex",justifyContent:'space-between'}}>
          <p className="mx-2"
            style={{
              fontSize: "18px",
              textAlign: "justify",
             

            }}
          >
           Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>
      </div>
      {w > 650 &&
      <div id="carouselExampleIndicators" class="carousel slide mx-5" data-bs-touch="true" style={{borderRadius:'45px'}}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active" >
   <div className='d-flex ' style={{backgroundColor:'#191A23',height:'600px',borderRadius:'45px',padding:'10px',justifyContent:'center'}}>
    <div><div className="message mt-5 mb-2" style={{height:'268px',width:'610px',backgroundSize:'contain',color:'white',padding:'30px',fontSize:'18px'}}> "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
    <p style={{color:'#b9ff66',fontSize:'20px',textAlign:'justify',marginLeft:'80px'}}>John Smith</p>
    <p style={{color:'white',fontSize:'20px',textAlign:'justify',marginLeft:'80px'}}>Marketing Director at XYZ Corp</p>
      </div></div>
    </div>
    <div class="carousel-item">
    <div className='d-flex ' style={{backgroundColor:'#191A23',height:'600px',borderRadius:'45px',padding:'10px',justifyContent:'center'}}>
    <div><div className="message mt-5 mb-2" style={{height:'268px',width:'610px',backgroundSize:'contain',color:'white',padding:'30px',fontSize:'18px'}}> "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
    <p style={{color:'#b9ff66',fontSize:'20px',textAlign:'justify',marginLeft:'80px'}}>John Smith</p>
    <p style={{color:'white',fontSize:'20px',textAlign:'justify',marginLeft:'80px'}}>Marketing Director at XYZ Corp</p>
      </div></div>
    </div>
    <div class="carousel-item">
    <div className='d-flex ' style={{backgroundColor:'#191A23',height:'600px',borderRadius:'45px',padding:'10px',justifyContent:'center'}}>
    <div><div className="message mt-5 mb-2" style={{height:'268px',width:'610px',backgroundSize:'contain',color:'white',padding:'30px',fontSize:'18px'}}> "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
    <p style={{color:'#b9ff66',fontSize:'20px',textAlign:'justify',marginLeft:'80px'}}>John Smith</p>
    <p style={{color:'white',fontSize:'20px',textAlign:'justify',marginLeft:'80px'}}>Marketing Director at XYZ Corp</p>
      </div></div>
    </div>
    <div class="carousel-item">
    <div className='d-flex ' style={{backgroundColor:'#191A23',height:'600px',borderRadius:'45px',padding:'10px',justifyContent:'center'}}>
    <div><div className="message mt-5 mb-2" style={{height:'268px',width:'610px',backgroundSize:'contain',color:'white',padding:'30px',fontSize:'18px'}}> "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
    <p style={{color:'#b9ff66',fontSize:'20px',textAlign:'justify',marginLeft:'80px'}}>John Smith</p>
    <p style={{color:'white',fontSize:'20px',textAlign:'justify',marginLeft:'80px'}}>Marketing Director at XYZ Corp</p>
      </div></div>
    </div>
    <div class="carousel-item">
    <div className='d-flex ' style={{backgroundColor:'#191A23',height:'600px',borderRadius:'45px',padding:'10px',justifyContent:'center'}}>
    <div><div className="message mt-5 mb-2" style={{height:'268px',width:'610px',backgroundSize:'contain',color:'white',padding:'30px',fontSize:'18px'}}> "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
    <p style={{color:'#b9ff66',fontSize:'20px',textAlign:'justify',marginLeft:'80px'}}>John Smith</p>
    <p style={{color:'white',fontSize:'20px',textAlign:'justify',marginLeft:'80px'}}>Marketing Director at XYZ Corp</p>
      </div></div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{alignItems:'flex-end',margin:'50px 250px'}}>
    <i class="fa-solid fa-arrow-left fa-2xl" aria-hidden="true"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{alignItems:'flex-end',margin:'50px 250px'}}>
    <i class="fa-solid fa-arrow-right fa-2xl" aria-hidden="true"></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
}
{     w < 650 && 
 <div id="carouselExampleIndicators" class="carousel slide mx-2" style={{borderRadius:'45px'}}>
 <div class="carousel-indicators">
   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
 </div>
 <div class="carousel-inner">
   <div class="carousel-item active">
  
  <div className='d-flex ' style={{backgroundColor:'#191A23',height:'500px',borderRadius:'45px',padding:'10px',justifyContent:'center'}}>
  <div>
   <div className="mmessage" style={{backgroundSize:'cover',height:'307px',width:'310px',padding:'20px',margin:'20px 10px'}}>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
   <p style={{color:'#b9ff66',fontSize:'16px',textAlign:'justify',marginLeft:'60px'}}>John Smith</p>
    <p style={{color:'white',fontSize:'16px',textAlign:'justify',marginLeft:'60px'}}>Marketing Director at XYZ Corp</p>
     
   </div></div>
  
   </div>
   <div class="carousel-item">
   <div className='d-flex ' style={{backgroundColor:'#191A23',height:'500px',borderRadius:'45px',padding:'10px',justifyContent:'center'}}>
   <div>
   <div className="mmessage" style={{backgroundSize:'cover',height:'307px',width:'310px',padding:'20px',margin:'20px 10px'}}>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
   <p style={{color:'#b9ff66',fontSize:'16px',textAlign:'justify',marginLeft:'60px'}}>John Smith</p>
    <p style={{color:'white',fontSize:'16px',textAlign:'justify',marginLeft:'60px'}}>Marketing Director at XYZ Corp</p>
     
   </div>
   </div>
  </div>
   <div class="carousel-item">
   <div className='d-flex ' style={{backgroundColor:'#191A23',height:'500px',borderRadius:'45px',padding:'10px',justifyContent:'center'}}>
   <div>
   <div className="mmessage" style={{backgroundSize:'cover',height:'307px',width:'310px',padding:'20px',margin:'20px 10px'}}>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
   <p style={{color:'#b9ff66',fontSize:'16px',textAlign:'justify',marginLeft:'60px'}}>John Smith</p>
    <p style={{color:'white',fontSize:'16px',textAlign:'justify',marginLeft:'60px'}}>Marketing Director at XYZ Corp</p>
     
   </div>
    </div>
 </div>
 </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{alignItems:'flex-end',padding:'30px 50px'}}>
   <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
   <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{alignItems:'flex-end',padding:'30px 50px'}}>
   <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
   <span class="visually-hidden">Next</span>
 </button>
</div>
}
    </div>
  )
}

export default Testimonials
