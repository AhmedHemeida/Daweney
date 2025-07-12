import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";



const VerifySchema = Yup.object().shape({
   
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
   
   
  });
  
export default function VerificationSignup() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(VerifySchema)
    });
    let [email, setEmail] = useState("")
    let navigate = useNavigate();
    let onSubmit = data => {
        navigate(`/forgetsignup/${data.email}`);
      };
  return (
    <div className="parent">
    <div className="ver">
      <h4 className="h3"> Verification</h4>

      <p className="forgot">
      Verification<br></br> user
      </p>
      <p className="worry">
        Don't worry! It happens.Please enter the phone number we will send the
        OTP in this Email Address.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} className='enter' type="email" placeholder="Email"  />
          {errors.email && <p  className='errorsign'>{errors.email.message}</p>}
        <button className="submit" type="submit">
          Continue
        </button>
      </form>
    </div>
  </div>
);
}