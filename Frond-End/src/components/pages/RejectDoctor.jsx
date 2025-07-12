import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function RejectDoctor() {
    let navigate =useNavigate();
    let goToHome=()=>{
      navigate("/home-doctor");
    }
    
  return (
    <div className="parent">
    <div className="conh container">
        <div className="parent-content">
            <div className="ffform">
                <h2>Nursing services</h2>
                <form action="" >
                    <div className="form-grouppp">
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="form-groupp">
                        <input type="text" placeholder="Reject reason"/>
                    </div>
                    <div className='ii'>
        <button type='submit' onClick={goToHome}>Send</button>
    </div>
                      
                </form>
            </div>
        </div>
    </div>
</div>
  )
}
