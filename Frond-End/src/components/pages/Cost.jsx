import React from 'react'
import { useNavigate } from 'react-router-dom';
import {ImPlus } from "react-icons/im";
import {ImMinus } from "react-icons/im";

export default function Cost() {
    let navigate =useNavigate();
    let goToFinal=()=>{
      navigate("/final");
    }
  return (
    <div class="parent">
    <div className=".SEC">
   <form className="form-cost" name="myform" onSubmit={goToFinal}>
 
 
 <input className='shadow'type="number" name="cost" for="cost" placeholder="average cost"/>
 
   
   <input className='shadow'type="text" name="pay" for="pay" placeholder="payment methods" />
  

  
   
   <button className="submi" type="submit" > send</button> 
  
  </form>
   </div>
</div>
  )
}
