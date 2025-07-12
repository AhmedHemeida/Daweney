import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Operation() {
  let navigate =useNavigate();
  let goToRequests=()=>{
    navigate("/requestes");
  }
  return (
    
        <div class="parent">
        <div className=".SEC">
       <form className="form-cost" name="myform">
     
     
      <p className='oper'>operation accomplished successfully</p>
      
    
          
       <button className="submi" type="submit" onClick={goToRequests}> submit</button> 
      
      </form>
       </div>
    </div>
  )
}
