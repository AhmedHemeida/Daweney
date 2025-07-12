import React, { Component, useRef } from 'react'
import { Link } from 'react-router-dom';
import img from "../../imgs/log.jpg";

export function   MyNav(){
  let menuRef = useRef()
  
  let menuToggle = ()=> menuRef.current.classList.toggle("active")

  return(
    
    <div>
      <nav>
        <div className='logo'>
        <img src={img}alt="our community" />
        </div>
        
        <div>
          <ul id="navbar">
                      <li ><Link  id="btn" className="active" to="/home">Home</Link></li>
            <li ><Link id="btn" to="/services">Services</Link></li>
            <li><Link id="btn" to="/requestes">My Requestes</Link></li>
            <li ><Link id="btn"to = "/about">About us</Link></li>
            <li ><Link id="btn" to="/contact">Contact us</Link>
            </li>
          
            <li id="menu dorp-list-item">
              <a >
              <i className="fas fa-bars" onClick={menuToggle}></i>
              </a>
              <ul className="drop-down" onClick={menuToggle} ref={menuRef}> 
                {/* <li><a>Language AR&EN</a></li> */}
                <li><Link to="/cash">Wallet</Link></li>
                <li><Link to="/account">My Account</Link></li>
                <li><Link to="/old">Old Requestes</Link></li>
   
              </ul>
            </li>
          
          </ul>
        </div>
      </nav>
   

       

    
       </div>
     
);

}

