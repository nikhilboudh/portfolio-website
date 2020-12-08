import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from"./Footer";

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Contact =()=>{
    return(
<>

<section id="header" className="">

<div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-10 mx-auto ">
        <div className="row">

          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1"></div>




<div className="contact">
    <a href="https://www.facebook.com/nikhil.boudh.3"
        className="book">
  <FacebookIcon style={{ fontSize: 50 } }/>  </a>


  <a href="https://twitter.com/NikhilBoudh"
        className="twit">
  <TwitterIcon style={{ fontSize: 50 } }/>  </a>

  
  <a href="https://www.instagram.com/nikhilboudh453/"
        className="inst">
  < InstagramIcon style={{ fontSize: 50 } }/>  </a>





  <a href="https://www.linkedin.com/in/nikhil-boudh-26b0aa201/"
        className="link">
  <LinkedInIcon style={{ fontSize: 50 } }/>  </a>






</div>
<p className="pap"><div>Mail Us:  <strong6>nikhilboudh453@gmail.com</strong6><br></br>
Call Us:  <strong6>+91-9953293087 / 7292045145</strong6><br></br>
Whatsapp :  <strong6>+91-8810204117 / 9953293087</strong6>
</div>


</p>

</div>
</div>
</div>
</div>
<Footer/>

</section>
</>
    );
};
export default Contact;