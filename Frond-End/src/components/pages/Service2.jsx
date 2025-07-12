import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Service2() {
    let navigate =useNavigate();
    let goToOtherService =()=>{
      navigate("/otherservice2");
  
    }
  return (
   
      <div className="parent">
        <div className="container">
            <form onSubmit={goToOtherService}>
            <div className="parent-content d-flex">
                <div className="section-header d-flex">
                <h4>الخدمات الطبية</h4>
                <h5>Medical Services</h5>
                   
                  
                </div>
                <div className="section-body d-flex">
                    <ul className="d d-flex">
                    <Link to="/average2" className='k'><li>الكشف الطبى المنزلى</li></Link>
                    <Link to="/average2" className='k'><li>العزل المنزلى لمرضى كورونا</li> </Link>
                    <Link to="/average2" className='k'><li> الرعاية الصحية المنزلية</li></Link>
                    <Link to="/average2" className='k'><li>العلاج الطبيعى</li></Link>
                   
                      
                    </ul>
                    <button className="btn" type="submit">Other services</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}
