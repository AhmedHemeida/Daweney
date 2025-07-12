
    import axios from 'axios';
    import React, { useEffect, useState } from 'react'
    import { Link, useNavigate } from 'react-router-dom';
    import{userAPI} from "../../API/userAPI";
    import {FaSearch } from "react-icons/fa";
    import Allrequests from './Allrequests';
    
    export default function SendRequest() {
     
            let [users, setUsers] = useState([]);
          let navigate =useNavigate();
          let goToAcc=()=>{
            navigate("/acc");
          }
          let goToService=()=>{
            navigate("/services");
          }
          let goToReciveRequest=()=>{
            navigate("/reciverequest");
          }
          let goToSendRequest=()=>{
            navigate("/sendRequest");
          }
          
          return (
           
            <div className="container mt-3 mb-3">
            <div className="d-flex flex-row align-items-center"></div>
            <div className="heading mt-4">Requestes  </div>
            <div className='addrequest'><button className='addrequestt' onClick={goToService}>Add Request</button></div>
            
            <div className='addreqq '>
                <button className='eve' onClick={goToSendRequest}>Send Requestes</button>
                <button className='eve rec' onClick={goToReciveRequest}>Recieved Requestes</button>
               
                <div className='seearch'>
        
             <input 
           type="text"
           placeholder="Search"
           className='sear'
         
          />
            <div><FaSearch/></div>
        
        
        </div>
            </div>
            
            <Allrequests/>
        </div>
        
          )
        }
        
        
    
    
    
    
    