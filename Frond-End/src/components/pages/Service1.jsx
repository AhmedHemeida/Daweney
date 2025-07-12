import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function Service1() {
    let navigate =useNavigate();
    let goToOtherService =()=>{
      navigate("/otherservice");
  
    }
  return (
   
      <div className="parent  ">
        <div className="container">
            <form onSubmit={goToOtherService}>
            <div className="parent-content d-flex">
                <div className="section-header d-flex">
                <h4>خدمات التمريض</h4>
                <h5>Nursing Services</h5>
                   
                  
                </div>
                <div className="section-body d-flex">
                    <ul className="d d-flex">
                    <Link to="/average" className='k'><li>تركيب كانولا ومحاليل</li></Link>
                    <Link to="/average" className='k'><li>فك الجبس</li> </Link>
                    <Link to="/average" className='k'><li> حقنة وريد او عضل</li></Link>
                    <Link to="/average" className='k'><li>تركيب قسطرة</li></Link>
                    <Link to="/average" className='k'><li>فك قسطرة بولية</li></Link>
                    <Link to="/average" className='k'>  <li>موجات صوتية للحمل</li></Link>
                    <Link to="/average" className='k'><li>حقنة تحت الجلد</li></Link>
                    <Link to="/average" className='k'> <li>تركيب انبوبة المعدة</li></Link>
                      
                    </ul>
                    <button className="btn" type="submit">Other services</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  
  )
}
