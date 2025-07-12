import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import axios from "axios";




const VerifySchema = Yup.object().shape({
   
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
   

  });

export default function Verification() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(VerifySchema)
});
  let [email, setEmail] = useState("")
  let navigate = useNavigate();
  let location = useLocation()
  let [error, setError] = useState("")


  let onSubmit = data => {
    console.log( data.email )
    axios
    .post("https://daweney.onrender.com/customers/sendcode", {     
      email: data.email,
    })
    .then(function (response) {
      console.log(response)
      if(response.status === 200 || response.status === 201){
        navigate(`/forgot/${location.state.type}/${data.email}`);
      }
    })
    .catch((err) => {
      console.log(err);
      setError("user already exist..");
    }) 


    
  };
  return (
    <div className="parent">
      <div className="ver">
        <h4 className="h3"> Verification</h4>

        <p className="forgot">
          Forgot<br></br>Password?
        </p>
        <p className="worry">
          Don't worry! It happens.Please enter the Email Address we will send the
          OTP in this Email Address.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} className='enter' type="email" placeholder="Email" />
          {errors.email && <p  className='errorsign'>{errors.email.message}</p>}
          <button className="submit" type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
