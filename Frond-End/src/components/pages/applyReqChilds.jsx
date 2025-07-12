import axios from "axios";
import React, { useEffect, useState } from "react";
import { userAPI } from "../../API/userAPI";
import { useNavigate } from "react-router-dom/dist";
export default function AllRequestDoctor() {
  let [users, setUsers] = useState([]);
  let navigate = useNavigate();

 
  let goToAcc = (datauser) => {
    navigate("/accpatient2", { state: datauser });
   
  };


  let cancelApp = (datauser) => {
    let data = {
      AppId:datauser._id , 
    }

    userAPI
    .cancelApp(data)
    .then((response) => {
      console.log(response.data);
      window.location.reload(); // Reload the page
    })
    .catch((error) => {
      console.log("Error occures", error);
    });
  };  

  useEffect(() => {
    let data = {
      providerId: "6403a0a6c1225b6b679b7707",
    };

    userAPI
      .GetApp(data)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Error occures", error);
      });
  }, []);

  return (
    <div className="container mt-3 mb-3">
      <div className="row mt-1 g-4">
        {users.slice().reverse().map((user, index) => {
          return (
            <div key={user.id} className="col-md-4">
              <div className="card p-2">
                <div onClick={() => goToAcc(user)}>
                  <div className="d-flex p-1 px-4 align-items-center">
                    {" "}
                    <img
                      src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmaRtPeXW39hx9xYYgNmVLGpqIafJUYwDNg&usqp=CAU"
                      height="115"
                      width="130"
                      className="circle"
                    />
                  </div>
                  <div className="email mt-1">
                    {" "}
                    <span>{user.name} </span>
                  </div>

                  <div className="d-flex flex row align-items-center mr-2 mt-2">
                    <div className="nursing1">
                      {" "}
                      <span className="nursing">Name of patient: </span>
                      {user.RequestDetails.name}
                    </div>
                    <div className="nursing1">
                      {" "}
                      <span className="nursing">Status : </span>
                      {user.status}{" "}
                    </div>
                    <div className="nursing1">
                      {" "}
                      <span className="nursing">Date : </span>{" "}
                      {user.RequestDetails.timeOfService}{" "}
                    </div>
                  </div>
                </div>
                <div className="buttons">
                
                  <button className="r5" onClick={() => cancelApp(user)}>Cancel App</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
