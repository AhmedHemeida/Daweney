import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate , useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";


const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
 
});


export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  // let [userName, setUserName] = useState("")
  // let [email, setEmail] = useState("")
  // let [password, setPassword] = useState("")
  
  
  
  let navigate = useNavigate();
  let location = useLocation()
  
  // let [user, setUser] = useState("")
  let [error, setError] = useState("")
  const onSubmit = data =>{
    // e.preventDefault()
    console.log(data);
    axios
      .post("https://daweney.onrender.com/customers/signup", {
        username: data.username,
        email: data.email,
        password: data.password,
      })
      .then(function (response) {
        console.log(response)
        if(response.status === 200 || response.status === 201){
          // navigate("/signupverify")
          navigate(`/forgetsignup/${data.email}`)
        }
      })
      .catch((err) => {
        console.log(err);
        setError("user already exist..");
      }) 
  };

  return (
    <div className="parent">
      <div className=".SEC">
        <form className="form-login" name="myform" onSubmit={handleSubmit(onSubmit)}>
          <h2>Create An Account</h2>
          <p className="create">
            Creat an account to enjoy all the services <br></br> without any ads
            for free!
          </p>
          {/* <div className="rad" onChange={handleChange}>
            <input  type="radio" name="human" value="patient" />patient
            <input  type="radio" name="human" value="Doctor/Nurse"/>Doctor/Nurse
            </div> */}
         
          <input
          {...register("username")}
            className="shadow"
            type="text"
            placeholder="Name"
           
          />
          {errors.username && <p  className='error'>{errors.username.message}</p>}
           <input {...register("email")} className='shadow' type="email" placeholder="Email" />
          {errors.email && <p  className='error'>{errors.email.message}</p>}
          <input {...register("password")} className='shadow' type="password" placeholder="Password" />
          {errors.password && <p  className='error'>{errors.password.message}</p>}
          
          <p className='error'>
            {error}
          </p>

          <button className="submittt" type="submit">
            {" "}
            Create Account
          </button>
          <div className="s">
            <p className="p">
              Already Have An Account?{" "}
              <Link className="lin" to="/">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
