import { Button } from 'bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import nikhil from "../src/nikhil.png"

import Footer from"./Footer";


const Home =()=>{
  return(
    <>

<section id="header" className="">

<div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-10 mx-auto ">
        <div className="row">

          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
        <p className="para"><strong5>Certification : </strong5> I Have Completed My Web-Development Course From School Of Intellipath.<br></br><br></br>
        <strong5>Work Experiance : </strong5>I had been working as an Freelancer in Web-Development for almost 3 years on Upwork, Freelancer, Fiverr And i really loves this work. <br></br><br></br>
<strong5>Objective : </strong5> I am highly Passionated and very dedicated in this work and very excited to learn new Technologis Specially in Front-end and in E-Commerce Web-sites. </p>


<div className="mt-3">
  <NavLink to ="props.visit" className>
  </NavLink>
</div>
            
          </div>


          <div className="col-lg-6 order-1 order-lg-2 header-img pl-700px">
<img className="nik_img" src={nikhil}></img></div>

        

           


        </div>
    </div>
    <Footer/>

        </div>
</div>
</section>

      </>
    )}



        
export default Home;