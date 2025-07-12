import React, { useState } from 'react'
import axios from 'axios';
import {ImWhatsapp } from "react-icons/im";
import {ImPhone } from "react-icons/im";
import { Link, useNavigate } from 'react-router-dom';
export default function NextAcc() {
  let [name, setName] = useState("");
  let [date, setDate] = useState("");
  let [location, setLocation] = useState("");
  let [cost, setCost] = useState(0);
  let navigate =useNavigate();
  let goToRejectt=()=>{
    navigate("/reject-doctor");
  }
  let goToOpinion=()=>{
    navigate("/opinion-doctor");
  }

  return (
  <div className="parent">
        <div className="conh container">
            <div className="parent-content">
                <div className="fform">
                    <h2>Nursing services</h2>
                    <form action="">
                        <div className="form-group">
                            <input type="text" placeholder="Name" 
                            onChange = {e => setName(e.target.value)}
                            />
                        </div>
                        <div className="date">
                            <input type="date" placeholder="Date"onChange = {e => setDate(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Location" onChange = {e => setLocation(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="number" placeholder="Cost"onChange = {e => setCost(e.target.value)}/>
                        </div>
                        <div className="provid">
                            <span>Chat with providers:</span>
                            <div className="chat d-flex">
                            <a href="sms:1234&body=hi">
                                    <div className="icon whatsup">
                                      <ImPhone/>
                                    </div>
                                </a>
                                <a href="whatsapp://send?abid=phonenumber&text=Hello%2C%20World!">
                                    <div className="icon sms">
                                        <ImWhatsapp/>
                                    </div>
                                </a>
                              
                            </div>
                        </div>
                        <div className="btns d-flex">
                        <button onClick={goToRejectt} className="btnnn reject">reject</button>
                            <button type="submit" className="btnnn accept" onClick={goToOpinion}>accept</button>
                         
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
