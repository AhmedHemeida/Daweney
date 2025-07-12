import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {ImStatsBars } from "react-icons/im";
export default function RateDoctor() {
   
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    let navigate =useNavigate();
    let goToCost=()=>{
      navigate("/cost");
    }
    
    let goToHome=()=>{
      navigate("/home-doctor");
    }
   
  return (
    <div class="parent">
    <div className=".SEC">
   <form className="form-next" name="myform" >

    <h4>Your opinion matters to us!</h4>
    <p className="rate">We work super hard to make Home Nursing <br></br>better for you , and would love you to know<br></br> how would you rate our app?</p>
        
    <div className="star-rating">
      {[...Array(4)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => setRating(index)}
            onDoubleClick={() => {
                setRating(0);
                
                }}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
    <div className='i'>
        <button type='submit' onClick={goToHome}>Submit</button>
    </div>
    <div className='no'>
        <Link to="/home-doctor">No Thanks</Link>
    </div>
    <div className='team'>
        <p>Love , from the Nursing team</p>
    </div>
</form>
   </div>
</div>
  )
}
