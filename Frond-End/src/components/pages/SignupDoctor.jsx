import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import agent from "../../API/agent";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";


export default function SignupDoctor() {
  const navigate = useNavigate();
  let [error, setError] = useState("")
  // const onSubmit = data =>{
  //   // e.preventDefault()
  //   console.log(data);
  //   axios
  //     .post("https://daweney.onrender.com/providers/signup", {
  //       username: data.username,
  //       email: data.email,
  //       password: data.password,
  //       longitude: data.longitude,
  //       latitude: data.latitude,
  //       typeOfService: data.typeOfService,
  //       gender: data.gender,
  //       phone: data.phone,
      
  //     })
  //     .then(function (response) {
  //       console.log(response)
  //       if(response.status === 200 || response.status === 201){
  //         // navigate("/signupverify")
  //         navigate(`/forgetsignupdoctor/${data.email}`)
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setError("user already exist..");
  //     }) 
  // };
 
  const SignupDoctorSchema = Yup.object().shape({
    username: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
      phone: Yup.number().typeError('Phone number must be a number').required('Phone number is required'),
    typeOfService: Yup.string().required("Type of service is required"),
    gender: Yup.string().required("Gender is required"),

  });
  

  const [location, setLocation] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="parent">
      <div className=".SEC">
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            longitude: location.longitude,
            latitude: location.latitude,
            typeOfService: "",
            gender: "male",
            phone: "",
          }}
          validationSchema={SignupDoctorSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            console.log("LONG", location.longitude);
            console.log("LAT", location.latitude);
            try {
              console.log( values.phone )
              console.log( values.email )
              const request = {
                username: values.username,
                email: values.email,
                password: values.password,
                gender: values.gender,
                phone:values.phone,
                typeofservice: values.typeOfService,
                latitude: location.latitude,
                longitude: location.longitude,
              };
              const response = await agent.Account.registerDoctor(request);
              console.log(response);
              resetForm();
              console.log(response)
              if(response.status === 200 || response.status === 201){
                // navigate("/signupverify")
                navigate(`/forgotdoctorsignup/${values.email}`)
              }
            } catch (error) {
              console.log(error);
              setError("user already exist..");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className="form-sign" name="myform" onSubmit={handleSubmit}>
              <h2>Create An Account</h2>
              <p className="create">
                Creat an account to enjoy all the services <br></br> without any
                ads for free!
              </p>
            
              <input
                className="shadow"
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Full Name"
              />
              {errors.username && touched.username && (
                <p className="error">{errors.username}</p>
              )}
              <input
                className="shadow"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email Address"
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
              <input
                className="shadow"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
              />
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
              <input
                className="shadow"
                type="string"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="phone numer"
              />
              {errors.phone && touched.phone && (
                <p className="error">{errors.phone}</p>
              )}
              <select
                name="typeOfService"
                className="shadow"
                value={values.typeOfService}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option disabled value="">
                  type of service
                </option>
                <option value="doctor">Doctor</option>
                <option value="nurse">Nursing</option>
                <option value="ray">Ray technician</option>
                <option value="analysis">Analysis technician</option>
              </select>
              {errors.typeOfService && touched.typeOfService && (
                <p className="error">{errors.typeOfService}</p>
              )}
              {/* <br></br> */}
              <div className="rad" onChange={handleChange}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={values.gender === "male"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={values.gender === "female"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Female
              </div>
              <p className='error'>
            {error}
          </p>
              <button
                className="submittt"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting" : "Create Account"}
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
          )}
        </Formik>
      </div>
    </div>
  );
}