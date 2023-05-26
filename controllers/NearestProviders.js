const User = require("../models/ProvidersModel") ;
//const latitude = 30.941733;
   
   // const longitude = 30.680024 ;
module.exports.NearestProviders= async({longitude,latitude,typeofservice,gender}  )=>{
    let valuesToMatch = [] ;
     if(gender=="anyone"){
         valuesToMatch = ["male","female"] ;
    }else if(gender=="male"){
        valuesToMatch = ["male"]
    } else {
        valuesToMatch = ["female"]
    }
   

    const users = await User.find({
        gender:valuesToMatch ,
        typeofservice :typeofservice ,
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude,latitude]
            },
            $maxDistance: 30000 // 30 km in meters
          }
        }
      });
  
    
    return users ;
}