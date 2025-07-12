import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Service3() {
    let navigate =useNavigate();
    let goToOtherService =()=>{
      navigate("/otherservice3");
  
    }
  return (
   
      <div className="parent">
        <div className="container">
            <form onSubmit={goToOtherService}>
            <div className="parent-content d-flex">
                <div className="section-header d-flex">
                <h4>التحاليل الطبية</h4>
                <h5>Medical Tests</h5>
                   
                  
                </div>
                <div className="section-body d-flex">
                    <ul className="d d-flex">
                    <Link to="/average3" className='k'><li>التحاليل الطبية</li></Link>
                    <Link to="/average3" className='k'><li>مسحة كورونا</li> </Link>
                    <Link to="/average3" className='k'><li> مسحة كورونا pcr للسفر</li></Link>
                  
                      
                    </ul>
                    <button className="btn" type="submit">Other services</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}
