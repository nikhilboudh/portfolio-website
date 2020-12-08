import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from "../src/header.png";


const Navbar
 =()=>{
    return(
<>
<div className="navbar_bar">
<div className="header">
<div className="container-fluid nav_bg ">
    <div className="row">
    <div className="col-10 mx-auto ">
      
<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <NavLink  to="/Home"><img src= {photo} alt="nikhil_logo"  style={{width:50}}/></NavLink>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName="act" exact className="nav-link" to="/">Home <span className="sr-only ">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="act"  exact  className="nav-link" to="/About">About</NavLink>
      </li>



      <li className="nav-item">
        <NavLink activeClassName="act" exact className="nav-link" to="/Contact">Contact</NavLink>
      </li>



      <li className="nav-item">
        <NavLink activeClassName="act" exact className="nav-link" to="/Skills">Skills</NavLink>
      </li>



      



     
     
     
    </ul>
    
  </div>
</nav>
      
</div>
    </div>
    </div>

</div>
</div>

</>
    );
};
export default Navbar;

