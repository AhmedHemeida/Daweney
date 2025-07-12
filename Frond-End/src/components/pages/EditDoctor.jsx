import React from 'react'

export default function EditDoctor() {


      return (
        <div className="parent">
        <div className=".SEC">
       <form className="form-login edit" name="myform"  >
        <h2>Edit Information</h2>
        
       
                <br></br>
                <input className='shadow' type="text" name="name" for="name" placeholder="User Name" required/>
        <input className='shadow' type="number" name="phone" for="phone" placeholder="Phone Number" required/>
        <input className='shadow' type="text" name="add" for="add" placeholder="Address" required/>
      
       <button className="submittt"  type="submit"> Update</button> 
    
        
       </form>
        </div>
    </div>
      )
    }
    