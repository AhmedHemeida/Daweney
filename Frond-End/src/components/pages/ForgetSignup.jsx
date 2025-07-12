import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ForgetSignup() {
  let { email } = useParams();
  let [error, setError] = useState("");
  let [num, setNum] = useState("");

  let navigate = useNavigate();
  let goToLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://daweney.onrender.com/customers/verifyusr", {
        email: email,
        code: num,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.msg === "Authenticated..! ") {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Invaild Pin Code.");
      });
  };
  return (
    <div className="parent">
      <div className="box">
        <h3>opt verification</h3>
        <p className="text">
          Enter The OPT send to: <span>+91-876500001</span>{" "}
        </p>
        <form className="form" onSubmit={goToLogin}>
          <ul className="btns">
            <input
              type="number"
              name=""
              id=""
              onChange={(e) => setNum(e.target.value)}
              maxlength="4"
              required
            />
          </ul>
          <span>00:00 Sec</span>
          <p className="text">
            Don't recive code ? <a href="#">Re-send</a>
          </p>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
        <p className="error">{error}</p>
      </div>
    </div>
  );
}
