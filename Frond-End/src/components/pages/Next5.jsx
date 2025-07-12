import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ImLocation } from "react-icons/im";
import {ImPlus } from "react-icons/im";
export default function Next5() {
    let navigate =useNavigate();
    let goToCost=()=>{
      navigate("/cost");
    }
   
  return (
    <div class="parent">
    <div className=".SEC">
   <form className="form-next" name="myform" onSubmit={goToCost}>
 <div className='loca'>
   <input className='loc'type="text" name="service" for="service" placeholder="add another service" />
   <div>
    <Link to="/Service5"><ImPlus/></Link>
   </div>
   </div>
   <input className='shadow'type="text" name="address" for="address" placeholder="address" />
   <div className='loca'>
   <input className='loc'type="text" name="loc" for="loc" placeholder="location" />
   <div className='locicon'>
      <ImLocation />
   </div>
   </div>
   <input className='shadow'type="number" name="repeat" for="repeat" placeholder="repeat"/>

   <button className="submittt" type="submit" > next</button> 
  
  </form>
   </div>
</div>
  )
}
