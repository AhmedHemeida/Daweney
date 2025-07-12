const mongoose =require("mongoose") ;

const sentReq= new mongoose.Schema({

   customerId : String ,
   typeofservice : String , // x-ray  ,  تحليل معين 
   status:String ,
   date : Date ,
   service : {
      type :[ Object] ,
      default : []
     } ,
     priceOfService:Number ,
     address:String
   
     

    
    
}) ;


const sent = mongoose.model("sent Request" , sentReq) ;
module.exports = sent ;
