
import React, { useState } from "react";
import Axios from "axios";
  
const API_KEY = "<YOUR_API_KEY>";
  
const Fly = ({ setLat, setLon }) => {
  
 
  const [city, setCity] = useState("Kolkata");
  

 function Fly() {
    Axios.get(
        `https://api.mapbox.com/geocoding/v5/
          mapbox.places/${city}.json?access_token=${API_KEY}`
      ).then((res) => {
    
      
        setLon(res.data.features[0].geometry.coordinates[0]);
          
      
        setLat(res.data.features[0].geometry.coordinates[1]);
      });
    }
  return (
    <div className="fly">
    <h2>Enter a city name</h2>
    <div className="inp-box">
      <input
        type="text"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button onClick={() => getCoordinates()}>Go</button>
    </div>
  </div>
  )
}
export default Fly;
