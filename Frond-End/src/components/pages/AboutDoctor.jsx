import React from "react";

import img from "../../imgs/about.svg";





export default function AboutDoctor() {


return (
  // <div className="parent contactus">
  <div>
    <div>
    <h2 className="about">About Us</h2>
    {/* <p className="lor" ><br></br> dolor sit amet consectetur </p> */}
    </div>
    <div className="un d-flex justify-content-center">
  <div className="row my-2 mx-2">
  <div className="col-md-6">
     

      <form>
        <div >
          <h4 >about us</h4>
          <p>We have taken a positive attitude in Gathering all required medical
             services in one reliable place for medical services is a problem,which
            led to an increase in demand for them at home, which inspired us to the idea
             of   establishing a heluger, the development of technology and smart devices
           and the extent to which customers are attached to them and use them as a first method.</p>
        </div>

        <div className="light">
        <h4 className="light-weight">our mission</h4>
        <p>    Helping Chlef patients get the best personalized home
         healthcare experience for them by partnering with
         professional healthcare providers to ensure the highest
         quality of service in accordance with international guidelines.</p>
        </div>
        <div className="light">
        <h4 className="light-weight">our vision</h4>
        <p>   Reshaping the future of home health care services
         by providing customized solutions to patients and empowering
         individuals to restore quality of life Values   We will accomplish 
         our mission and achieve our vision by following values   that express
         us Compassion and empathy for the problems and needs of the patient
         and his family Honesty We ensure the correctness of medical information
         or personal information for all patients and medical service providers Successfully molukia.
         We are responsible to users from the beginning of their selection of our services until the completion of the process.
         Patient can rest assured that they will get the same quality every time they use our prime services.</p>
        </div>
        
          
        </form>
        
  </div>
  
    <div className="col-md-6">
   <img src={img}alt="our community" className="tact"/>
</div>
  </div>
  
</div>
 </div>
  );
   

}