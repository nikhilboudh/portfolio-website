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
            <h2 className="head2">Hi , I am  <strong >Nikhil Boudh</strong></h2>
            <h3 className="head2"><strong>Web-Developer</strong></h3>
            <h4 className="head2">And I am  <strong >Freelancer</strong></h4>

            


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