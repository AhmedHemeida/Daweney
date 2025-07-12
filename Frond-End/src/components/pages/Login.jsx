import React from 'react'
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import * as Yup from "yup";

const schema = Yup.object().shape({

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  type: Yup.string().required("Type is required"),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  let navigate = useNavigate();
  let [user, setUser] = useState("")
  let [error, setError] = useState("")
  let [vaild, setValid] = useState("")
  const [data, setData] = useState({});
  const [authHeader, setAuthHeader] = useState('');



  let location = useLocation()
  let handleSignUp = (e) => {
    e.preventDefault()
    if (user == "patient") {
      navigate("/signup")
    }
    else if (user == "Doctor/Nurse") {
      navigate("/signupdoctor")
    }
    else {
      // navigate("/")
      setError("you must choose your type")
    }
  }
  let goToHome = (  ) => {
    // e.preventDefault()
    /*navigate("/home");*/
    if (user == "patient") {
      navigate("/home")
    }
    else if (user == "Doctor/Nurse") {
      navigate("/home-doctor")
    }
    else {
      setError("you must choose your type")
    }
  };

  let handleForgetPassword = (e)=>{
    e.preventDefault()
    if (user == "patient") {
      navigate("/verification",{state:{type:'patient'}})
    }
    else if (user == "Doctor/Nurse") {
      navigate("/verification",{state:{type:'doctor'}})
    }
    else {
      setError("you must choose your type")
    }

  }

  let handleChange = (e) => {
    setUser(e.target.value)
    setError("")
  }

  const onSubmit = data => {
    setValid('');

    axios.post(`${user === 'patient' ? 'https://daweney.onrender.com/customers/signin' : 'https://daweney.onrender.com/providers/signin'}`, {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(response);
        setValid(true);
        setData(response.data);
        setAuthHeader(response.headers.Authorization); // update the authHeader state with the Authorization header value
        
        console.log("---------------------------------------");
        console.log( response.headers['Authorization'] );
        console.log("---------------------------------------");
        console.log( data );
        goToHome(  );
      })
      .catch((error) => {
        console.log(error);
        setValid("Invaild Password or EmailAddress.");
      });
  }


  return (
    <div className="parent">
      <div className=".SEC">
        <form className="form-login" name="myform" onSubmit={handleSubmit(onSubmit)}>
          <h1>Welcome</h1>
          <br></br>

          <input {...register("email")} className='shadow' type="email" placeholder="Email" />
          {errors.email && <p  className='error'>{errors.email.message}</p>}

          <input {...register("password")} className='shadow' type="password" placeholder="Password" />
          {errors.password && <p  className='error'>{errors.password.message}</p>}
        

          <div className="rad" onChange={handleChange}>
            <div >
              <input type="radio" name="human" value="patient" {...register("type")}/>patient
            </div>
            <div>
              <input type="radio" name="human" value="Doctor/Nurse" {...register("type")}/>Doctor/Nurse
            </div>
          </div>

          {errors.type && <p  className='error' >{errors.type.message}</p>}


          <p className='error'>
            {error}
          </p>
          
          <p className='error'>
            {vaild}
          </p>

          <button className="submitt" type='submit' > Login</button>
          <br></br>
          <Link className="link" to="/verification" onClick={handleForgetPassword}>Forget Password?</Link>
          <p className="p">Don't have an account? <button className="lin" onClick={handleSignUp} >Sign Up</button></p>

        </form>
      </div>
    </div>


  )
}
