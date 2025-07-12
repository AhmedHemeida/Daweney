import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import{userAPI} from "../../API/userAPI";
import {FaSearch } from "react-icons/fa";

export default function RequestHomeDoctor() {
    let [users, setUsers] = useState([]);
  let navigate =useNavigate();
  let goToAcc=()=>{
    navigate("/acc");
  }
  return (
   
    <div className="container mt-3 mb-3">
    <div className="d-flex flex-row align-items-center"></div>
    <div className="heading mt-4"> Requestes  </div>
    <div className='Allrequest '>
        <button className='eve'>All Requestes</button>
        
        <button className='even'>Accepted  Requestes</button>
        <button className='even'>Applyed Requestes</button>
        <div className='searchh'>

     <input 
   type="text"
   placeholder="Search"
   className='sear'
 
  />
    <div><FaSearch/></div>


</div>
    </div>
    
    <div className="row mt-1 g-4">
        <div className="col-md-4">
            <div className="card p-2" >
                <div className="d-flex p-1 px-4 align-items-center"> <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Vw95Y4408tFUXrndBLwC5Vfq-ZrYKxlH9A&usqp=CAU" height="115" width="130" className="circle"/></div>
                <div className="email mt-1"> <span>Home Nursing</span>
                   
                </div>
                <div className="dummytext mt-1"> <span>Lorem Ipsum is simply dummy text  <br></br> typesetting industry.</span> </div>
                <div className="d-flex flex row align-items-center mr-2 mt-2">
                    <div className='nursing1'>  <span className="nursing">type : </span>Nursing Services </div>
                    <div className="nursing1"> <span className="nursing">Date : </span>13-3-2022 </div>
                    <div className="nursing1"> <span className="nursing">Submitted on : </span>13-3-2022 </div>
                    <div className='buttons'><button className='r4'>Accepted</button>
               <button className='r5'>Rejected</button> 
       </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card p-2" >
                <div className="d-flex p-1 px-4 align-items-center"> <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIL8nhHYwbn4xmKvF2Gw3GQ-redVKz_GZYhXxHIPp888zN-HWpBmJWdWclf_iFwtGVL8&usqp=CAU" height="115" width="130" className="circle"/></div>
                <div className="email mt-1"> <span>Home Nursing</span>
                   
                </div>
                <div className="dummytext mt-1"> <span>Lorem Ipsum is simply dummy text  <br></br> typesetting industry.</span> </div>
                <div className="d-flex flex row align-items-center mr-2 mt-2">
                    <div className='nursing1'>  <span className="nursing">type : </span>Medical Services</div>
                    <div className="nursing1"> <span className="nursing">Date : </span>13-8-2022 </div>
                    <div className="nursing1"> <span className="nursing">Submitted on : </span>13-9-2022 </div>
                    <div className='buttons'><button className='r4'>Accepted</button>
               <button className='r5'>Rejected</button> 
       </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card p-2" >
            <div className="d-flex p-1 px-4 align-items-center"> <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmaRtPeXW39hx9xYYgNmVLGpqIafJUYwDNg&usqp=CAU" height="115" width="130" className="circle"/></div>
                <div className="email mt-1"> <span>Home Nursing</span>
                   
                </div>
                <div className="dummytext mt-1"> <span>Lorem Ipsum is simply dummy text  <br></br> typesetting industry.</span> </div>
                <div className="d-flex flex row align-items-center mr-2 mt-2">
                    <div className='nursing1'>  <span className="nursing">type : </span>Medical Tests </div>
                    <div className="nursing1"> <span className="nursing">Date : </span>13-3-2022 </div>
                    <div className="nursing1"> <span className="nursing">Submitted on : </span>13-3-2022 </div>
                    <div className='buttons'><button className='r4'>Accepted</button>
               <button className='r5'>Rejected</button> 
       </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card p-2" >
                
                <div className="d-flex p-1 px-4 align-items-center"> <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgiDyfdrsGjLpBmyfiJvcM2ke7rTuuQapqA&usqp=CAU" height="115" width="130" className="circle"/></div>
                <div className="email mt-1"> <span>Home Nursing</span>
                   
                </div>
                <div className="dummytext mt-1"> <span>Lorem Ipsum is simply dummy text  <br></br> typesetting industry.</span> </div>
                <div className="d-flex flex row align-items-center mr-2 mt-2">
                    <div className='nursing1'>  <span className="nursing">type : </span>Medical Supplies </div>
                    <div className="nursing1"> <span className="nursing">Date : </span>13-3-2022 </div>
                    <div className="nursing1"> <span className="nursing">Submitted on : </span>13-3-2022 </div>
                    <div className='buttons'><button className='r4'>Accepted</button>
               <button className='r5'>Rejected</button> 
       </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card p-2" >
                <div className="d-flex p-1 px-4 align-items-center"> <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Vw95Y4408tFUXrndBLwC5Vfq-ZrYKxlH9A&usqp=CAU" height="115" width="130" className="circle"/></div>
                <div className="email mt-1"> <span>Home Nursing</span>
                   
                </div>
                <div className="dummytext mt-1"> <span>Lorem Ipsum is simply dummy text  <br></br> typesetting industry.</span> </div>
                <div className="d-flex flex row align-items-center mr-2 mt-2">
                    <div className='nursing1'>  <span className="nursing">type : </span>Nursing Services </div>
                    <div className="nursing1"> <span className="nursing">Date : </span>20-9-2022 </div>
                    <div className="nursing1"> <span className="nursing">Submitted on : </span>15-3-2022 </div>
                    <div className='buttons'><button className='r4'>Accepted</button>
               <button className='r5'>Rejected</button> 
       </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card p-2" >
                <div className="d-flex p-1 px-4 align-items-center"> <img src=" https://media.istockphoto.com/id/1217561470/photo/doctor-diagnosing-patient%C3%A2s-health-on-asthma-lung-disease-covid-19-or-bone-cancer-illness.jpg?s=612x612&w=0&k=20&c=beOvSZCzJ8w2hRn2jJiJaZwZ59Xrci7FKyBK65NayTA=" height="115" width="130" className="circle"/></div>
                <div className="email mt-1"> <span>Home Nursing</span>
                   
                </div>
                <div className="dummytext mt-1"> <span>Lorem Ipsum is simply dummy text  <br></br> typesetting industry.</span> </div>
                <div className="d-flex flex row align-items-center mr-2 mt-2">
                    <div className='nursing1'>  <span className="nursing">type : </span>medical radiology </div>
                    <div className="nursing1"> <span className="nursing">Date : </span>13-3-2022 </div>
                    <div className="nursing1"> <span className="nursing">Submitted on : </span>13-3-2022 </div>
                    <div className='buttons'><button className='r4'>Accepted</button>
               <button className='r5'>Rejected</button> 
       </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}
