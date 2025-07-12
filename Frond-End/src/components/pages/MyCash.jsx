import React from 'react'
import cash from "../../imgs/cash.jpg";
export default function MyCash() {
  return (
    <div className="parent">
           <img src={cash}alt="our community" className='image' />


  <div className='cash'>
    <div className="twoo">
    <h3  className='o'>Your Cash <br></br> <span className='span'> 500$ </span>
    </h3>
    </div>
    
    <div className="threee">
       <h3 className='o'>Our Cash <br></br> <span className='span'> 200$ </span>
       </h3>
    </div>

  </div>

      </div>
  )
}
