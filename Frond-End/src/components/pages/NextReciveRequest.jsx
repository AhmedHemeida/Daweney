
    import axios from 'axios';
    import React, { useEffect, useState } from 'react'
    import{userAPI} from "../../API/userAPI";
    import { useNavigate } from 'react-router-dom/dist';
    export default function NextReciveRequest() {
        let [users, setUsers] = useState([]);
        let navigate =useNavigate();
          let goToAcc=()=>{
            navigate("/accpatient");
          }
        // let getAllRequests =()=>{
        //     axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then((response) =>{
        //         setUsers(response.data);
        //     })
        //     .catch(error=>{
        //         console.log("Error occures",error);
        //     });
        // };
        // let addUser =(request)=>{
        //     axios.post("https://jsonplaceholder.typicode.com/users",request);
        // };
        // let deleteUser =(userId)=>{
        //     axios.delete(https://jsonplaceholder.typicode.com/users/${userId});
        // }
        // let updateUser =(userId,request)=>{
        //     axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`,request);
        // }
    
        useEffect(()=>{
           userAPI.getRequestes().then((response) =>{
                    setUsers(response.data);
                })
                .catch(error=>{
                    console.log("Error occures",error);
                });
        // axios.get("http://localhost:3006/requestes").then((response) =>{
        //             setUsers(response.data);
        //         })
        //         .catch(error=>{
        //             console.log("Error occures",error);
        //         });
        },[]);
      return (
        <div className="container mt-3 mb-3">
        <div className="row mt-1 g-4">
           {users.map((user,index)=>{
      return<div key={user.id} className='col-md-4'>
    
    
        <div  className="card p-2" onClick={goToAcc}>
        <div className="d-flex p-1 px-4 align-items-center"> <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmaRtPeXW39hx9xYYgNmVLGpqIafJUYwDNg&usqp=CAU" height="115" width="130" className="circle"/></div>
        <div className="email mt-1"> <span>Home Nursing</span></div>
          {/* <div className='all'><p className='r1'><span className='type'>Type:</span>{user.name}</p> 
          <p className='r2'><span className='type'>Date:</span> {user.id}</p>
          <p className='r3'><span className='type'>Submitted on:</span> {user.username}</p>
          </div> */}
          <div className="dummytext mt-1"> <span>Lorem Ipsum is simply dummy text  <br></br> typesetting industry.</span> </div>
          <div className="d-flex flex row align-items-center mr-2 mt-2">
                           <div className="nursing1"> <span className="nursing">Type of service : </span>{user.username}</div>
                            <div className='nursing1'>  <span className="nursing">Sub Service name : </span>{user.name} </div>
                            <div className="nursing1"> <span className="nursing">Date : </span> {user.id} </div>
                            <div className='buttons'><button className='r4'>Accept</button>
                   <button className='r5'>Reject</button> 
           </div>
                            
                         
                        </div>
          </div>
         
       
          
          
        </div>;
        
      
        })}
        </div>
        </div>
      )
    }