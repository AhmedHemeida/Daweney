import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Addservice3() {
    let navigate =useNavigate();
    let goToAverage=()=>{
      navigate("/average3");
  
    }
  return (
    <div className="parent">
    <div className=".SEC">
    <form className="form-service" name="myform" onSubmit={goToAverage}>
    <h3>Add Other Service</h3>
            <br></br>
     
            <input className='shadow'type="text" name="add" for="add" placeholder="add service" />
     
            <select name="selectedType" className="loca" >
              <option  disabled selected>provider type</option>
          <option value="doctor" >Doctor</option>
          <option value="nursing">Nursing</option>
          <option value="ray technician">Ray technician</option>
          <option value="analysis technician">Analysis technician</option>

        </select>
    
    
     
    <button className="submitt" type='submit'> next</button>
    
     
    </form>
     </div>
 </div>
  )
}
