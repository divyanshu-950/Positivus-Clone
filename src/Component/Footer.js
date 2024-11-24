import React from 'react'
import logo from '../img/logo2.png'
import icon from '../img/twitter.png'
import icon2 from '../img/facebook.png'
import icon3 from '../img/linkedin.png'
function Footer() {
  var w = window.innerWidth;
  return (
    <>
    {w > 700 &&
    <div className='mx-5' style={{backgroundColor:'#191A23',padding:'55px 60px 50px 60px',borderRadius:'45px 45px 0px 0px'}}>
        <div className='row'>
            <div className='col-md-3'><img src={logo} alt="logo" /></div>
            <div className='col-md-7'>
            <ul class="p-0 m-0" style={{color:'white',listStyleType:'none',display:'inline-flex',gap:'40px',fontSize:'20px',textDecoration:'underline'}} >
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                About us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Use Cases
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Blog
              </a>
            </li>
           
          </ul>
            </div>
            <div className='col-md-2 px-2'>
                <img className='px-2' src={icon} alt="twitter" />
                <img className='px-2' src={icon2} alt="facebook" />
                <img className='px-2' src={icon3} alt="linkedin" />
            </div>

        </div>
        <div className="row my-5 mx-5 " style={{justifyContent:'space-around'}}>
            <div className="col-md-4 mx-3" style={{textAlign:'justify',color:'white',fontSize:'20px'}}>
                <span className='px-1' style={{backgroundColor:"#B9FF66",borderRadius:'7px',color:'black'}}>Contact Us</span>
                <p className='my-3'>Email: info@positivus.com</p>
                <p className='my-3'>Phone: 555-567-8901</p>
                <p className='my-3'>Address: 123 main st. moonstone city, stardust state 12345</p>
            </div>
            <div className="col-md-7 ">
                <div style={{padding:"58px 40px",backgroundColor:"#292A32",borderRadius:'14px'}}>
                    <input className='mx-2' type="text" placeholder='Email'style={{padding:'22px 20px', backgroundColor:'transparent',borderRadius:'14px'}} />
                    <button className='m-2' style={{backgroundColor:"#B9FF66",padding:'20px 30px',borderRadius:'14px',fontSize:'20px'}}>Suscribe to News</button>
                </div>
            </div>
        </div>
        <hr style={{color:'white'}} />
        <p className='my-4' style={{fontSize:'20px',color:'white',textAlign:'justify'}}>&copy; 2023 Positivus. All Rights Reserved  <a className="mx-4"href="/" style={{color:'white'}}> Privacy Policy</a></p>
    </div>
    }
{     w < 700 && 
  <div className='' style={{backgroundColor:'#191A23',padding:'50px 20px 30px 20px'}}>
        <div className='row'>
            <div className='col-12 my-3'><img src={logo} alt="logo" /></div>
            <div className='col-12'>
            <ul class="p-0 my-3" style={{color:'white',listStyleType:'none',gap:'20px',fontSize:'16px',textDecoration:'none'}} >
            <li class="nav-item my-2">
              <a class="nav-link active" aria-current="page" href="/">
                About us
              </a>
            </li>
            <li class="nav-item my-2">
              <a class="nav-link" href="/">
                Services
              </a>
            </li>
            <li class="nav-item my-2">
              <a class="nav-link" href="/">
                Use Cases
              </a>
            </li>
            <li class="nav-item my-2">
              <a class="nav-link" href="/">
                Pricing
              </a>
            </li>
          </ul>
            </div>
            <div className='col-md-2 px-2 my-2'>
                <img className='px-2' src={icon} alt="twitter" />
                <img className='px-2' src={icon2} alt="facebook" />
                <img className='px-2' src={icon3} alt="linkedin" />
            </div>

        </div>
        <div className="row my-5 mx-2 " style={{justifyContent:'space-around'}}>
            <div className="col-md-4 mx-3" style={{textAlign:'justify',color:'white',fontSize:'16px'}}>
                <span className='px-1' style={{backgroundColor:"#B9FF66",borderRadius:'7px',color:'black'}}>Contact Us</span>
                <p className='my-3'>Email: info@positivus.com</p>
                <p className='my-3'>Phone: 555-567-8901</p>
                <p className='my-3'>Address: 123 main st. moonstone city, stardust state 12345</p>
            </div>
            <div className="col-md-7 ">
                <div  className=""style={{padding:"30px",backgroundColor:"#292A32",borderRadius:'14px'}}>
                    <input className='m-1' type="text" placeholder='Email'style={{padding:'20px 10px', backgroundColor:'transparent',borderRadius:'14px'}} />
                    <button className='m-1' style={{backgroundColor:"#B9FF66",padding:'20px 30px',borderRadius:'14px',fontSize:'16px'}}>Suscribe to News</button>
                </div>
            </div>
        </div>
        <hr style={{color:'white'}} />
        <p className='my-4' style={{fontSize:'16px',color:'white',textAlign:'justify'}}>&copy; 2023 Positivus. All Rights Reserved  <a className="mx-4"href="/" style={{color:'white'}}> Privacy Policy</a></p>
    </div>
}
    </>
  )
}

export default Footer
