import React, { useState } from "react";
import { useLocation, useNavigate , useParams } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import axios from "axios";




// const VerifySchema = Yup.object().shape({
   
//     password: Yup.string()
//       .email("Invalid password")
//       .required("password is required")
   

//   });

export default function ResetPassWord() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    // resolver: yupResolver(VerifySchema)
});

 let { email } = useParams();
//   let [email, setEmail] = useState("")
  let navigate = useNavigate();
  let location = useLocation()
//   console.log( email )

  let onSubmit = data => {
    
    console.log( email )
    console.log( data.password )

    axios
    .post("https://daweney.onrender.com/customers/resetpass", {     
      email: email,
      newPassword:data.password
    })
    .then(function (response) {
      console.log(response)
      if(response.status === 200 || response.status === 201){
        navigate(`/`);
      }
    })
    .catch((err) => {
      console.log(err);
    }) 


    
  };
  return (
    <div className="parent">
      <div className="ver">
        <h4 className="h3"> Reset Password</h4>

        <p className="forgot">
          Reset<br></br>Password?
        </p>
        {/* <p className="worry">
          Don't worry! It happens.Please enter the phone number we will send the
          OTP in this phone number.
        </p> */}

        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("password")} className='enter' type="password" placeholder="New PassWord" />
            {/* {errors.password && <p  className='errorsign'>{errors.password.message}</p>} */}
            <button className="submit" type="submit">
                Continue
            </button>
        </form>
      </div>
    </div>
  );
}
