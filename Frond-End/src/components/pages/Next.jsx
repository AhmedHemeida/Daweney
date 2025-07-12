import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ImLocation } from "react-icons/im";
import {ImPlus } from "react-icons/im";
export default function Next() {
    let navigate =useNavigate();
    let goToCost=()=>{
      navigate("/cost");
    }
   
  return (
    <div class="parent">
    <div className=".SEC">
   <form className="form-next" name="myform" onSubmit={goToCost}>
 <div className='loca'>
   <input className='loc'type="text" name="name" for="name" placeholder="Name" />
   {/* <div>
    <Link to="/Service1"><ImPlus/></Link>
   </div> */}
   </div>
   <input className='shadow'type="number" name="number" for="number" placeholder="Phone Number"/>
   <input className='shadow'type="text" name="address" for="address" placeholder="Address" />
   <input className='shadow'type="text" name="time" for="time" placeholder="Time of service" />
   <div className="rad" >
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  // checked={values.gender === "male"}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                />
                Male
                <input className='female'
                  type="radio"
                  name="gender"
                  value="female"
                  // checked={values.gender === "female"}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                />
                Female
              </div>
   {/* <div className='loca'>
   <input className='loc'type="text" name="loc" for="loc" placeholder="location" />
   <div className='locicon'>
    <ImLocation />
   </div>
   </div> */}
  

   <button className="submittt" type="submit" > next</button> 
  
  </form>
   </div>
</div>
  )
}
