import React, { useState } from "react";
import axios from "axios";
import { ImWhatsapp } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import Acpatient2 from "./Acpatient2";
import { useLocation } from "react-router-dom";


export default function Acpatient() {
  let [name, setName] = useState("");
  let [Type, setType] = useState("");
  let [date, setDate] = useState("");
  let [cost, setCost] = useState(0);
  let [changecost, setChangeCost] = useState(0);
  let navigate = useNavigate();
  let goToRejectt = () => {
    navigate("/home-doctor");
  };
  // let goToNextAcc=()=>{
  //   navigate("/nextacpatient");
  // }
  let location = useLocation();
//   let jsonObject = location.datauser;
let jsonObject = location.state;

  console.log( jsonObject );

  return (
    <div className="parent">
      <div className="conh container">
        <div className="parent-content">
          <div className="fform">
            <h2 className="nur2">{jsonObject.typeofservice} </h2>
            <form action="">
              <div className="acc2">

                <p> <span className="bold" >  Name : </span> {jsonObject.name}</p>
              </div>
              <div className="acc2">
                <p><span className="bold"> address : </span> {jsonObject.address }</p>
              </div>
              <div className="acc2">
                <p><span className="bold">phone number :</span> {jsonObject.number}</p>
              </div>

              
              
              <div className="sub">
                <p><span className="bold"> Sub Services :  </span>
                    {jsonObject.service.map((service, index) => (
                    <span key={service.id}>
                        {service.ArabicName}
                        {index !== jsonObject.service.length - 1 && ', '}
                    </span>
                    ))}
                </p>
                </div>
                <div className="acc2">
                <p><span className="bold">Date :</span> {jsonObject.timeOfService}</p>
              </div>

              {/* <div className="btns d-flex ch">
                <button onClick={goToRejectt} className="btnnn reject">
                  Cancel
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
