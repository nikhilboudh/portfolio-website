import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import "./index.css"

import Home from './Home.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx';
import Skills from './Skills.js';


import Navbar from './Navbar.jsx';

import {Switch,Route, Redirect} from "react-router-dom";


const App =()=>{
    return(
<>
<Navbar/>
<Switch>

        
    <Route exact path="/" component={Home}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Skills" component={Skills}/>

<Redirect to ="/"/>
</Switch>
</>
    );
};
export default App;