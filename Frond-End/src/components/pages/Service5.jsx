import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Service5() {
    let navigate =useNavigate();
    let goToOtherService =()=>{
      navigate("/otherservice5");
  
    }
  return (
   
      <div className="parent">
        <div className="container">
            <form onSubmit={goToOtherService}>
            <div className="parent-content d-flex">
                <div className="section-header d-flex">
                <h4>الاشعة المنزلية</h4>
                <h5>Medical Radiology</h5>
                   
                  
                </div>
                <div className="section-body d-flex">
                    <ul className="d d-flex">
                    <Link to="/average5" className='k'><li>السونار</li></Link>
                    <Link to="/average5" className='k'><li>اشعة x-ray</li> </Link>
                    <Link to="/average5" className='k'><li>ايكوا على القلب </li></Link>
                    <Link to="/average5" className='k'><li>دوبلر على الاوردة والشرايين</li></Link>
                    <Link to="/average5" className='k'><li>رسم القلب</li></Link>
                    <Link to="/average5" className='k'>  <li> موجات صوتية للحمل</li></Link>
                    <Link to="/average5" className='k'><li>اشعه عادية على الكتف</li></Link>
                    <Link to="/average5" className='k'> <li>موجات صوتية للمسالك</li></Link>
                      
                    </ul>
                    <button className="btn" type="submit">Other services</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  
  )
}
