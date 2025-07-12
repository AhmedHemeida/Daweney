import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
export default function ForgetPassword() {
  
  let {type, email} = useParams()
  
  let [num, setNum] = useState("")
  
  console.log(type);
  
  let navigate =useNavigate();
  let goToLogin =(e)=>{
    e.preventDefault()
    console.log( email )
    console.log(num)
    axios
      .post(`${type === 'patient' ? 'https://daweney.onrender.com/customers/verifyusr' :  'https://daweney.onrender.com/providers/verifyusr'}`, {
        email: email,
        code: num,
      })
      .then(function (response) {
        console.log(response)
        if(response.data.msg === "Authenticated..! "){
          // navigate("/")
          navigate(`/resetPassword/${email}`)
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="parent">
        <div className="box">
            <h3>opt verification</h3>
            <p className='text'>Enter The OPT send to: <span>+91-876500001</span> </p>
            <form className="form" onSubmit={goToLogin}>
                <ul className="btns">
                    <input type="number" name="" id="" onChange={e => setNum(e.target.value)} maxlength = "4" required/>
                </ul>
                <span>00:00 Sec</span>
                <p className='text'>Don't recive code ? <a href="#">Re-send</a></p>
                <button className='submit'type='submit' >Submit</button> 
                
            </form>
        </div>
    </div>

  )
}
