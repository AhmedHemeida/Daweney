
     
        import axios from 'axios';
        import React, { useEffect, useState } from 'react'
        import { Link, useNavigate } from 'react-router-dom';
        import{userAPI} from "../../API/userAPI";
        import {FaSearch } from "react-icons/fa";
        import RequestHomeDoctor from './RequestHomeDoctor';
        import AllRequestDoctor from './AllRequestDoctor';
import NextAcceptRequest from './applyReqChilds';
        export default function AccepRequestDoctor() {
          let [users, setUsers] = useState([]);
          let navigate =useNavigate();
          let goToAcc=()=>{
            navigate("/acc");
          }
          
          const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 2,
                    width:987        }}
            />
        );
        useEffect(()=>{
          userAPI.getRequestes().then((response) =>{
                   setUsers(response.data);
               })
               .catch(error=>{
                   console.log("Error occures",error);
               });
              },[]);
              let goToMyRequest=()=>{
                navigate("/home-doctor");
              }
              let goToAcceptRequest=()=>{
                navigate("/acceptRequest");
              }
              let goToApplyRequest=()=>{
                navigate("/applyRequest");
              }
          return (
            <div className="container mt-3 mb-3">
            <div className="d-flex flex-row align-items-center"></div>
            <div className="heading mt-4"> Requestes  </div>
            <div className='Allrequest '>
                <button className='eve' onClick={goToMyRequest}>My Requestes</button>
                
                <button className='even' onClick={goToAcceptRequest}>Accepted  Requestes</button>
                <button className='even' onClick={goToApplyRequest}>Applyed Requestes</button>
                <div className='searchh'>
        
             <input 
           type="text"
           placeholder="Search"
           className='sear'
         
          />
            <div><FaSearch/></div>
        
        
        </div>
            </div>
        
          {/* //    <div className='par'> 
          
          //   {users.map((user,index)=>{
          // return<div key={user.id}><div className='r m' onClick={goToAcc}>
          //     <p>Title of Request ?</p>
          //     <div className='all'><p className='r1'><span className='type'>Type:</span>{user.name}</p> 
          //     <p className='r2'><span className='type'>Date:</span> {user.id}</p>
          //     <p className='r3'><span className='type'>Submitted on:</span> {user.username}</p>
          //     <div><button className='r4'>Accepted</button>
          //     <button className='r5'>Rejected</button> 
          //     </div> 
             
          //     </div>
          //     </div>
              
              
          //   </div>;
         
            
          
          //   })}
           
           
          //   </div> */}
          <div>
           
        <NextAcceptRequest/>
          </div>
          </div>
         
        
          )
        
        }
        
        
        
    
    
    
    
    
