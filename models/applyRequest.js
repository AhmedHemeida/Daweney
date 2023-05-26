const mongoose =require("mongoose") ;

const applyReq= new mongoose.Schema({

   providerId : String ,
   customerId : String ,
   RequestId : String ,
   providerPhoto:String,
   providerName:String ,
   typeofservice: String,
   priceOfService:Number ,
   status :{type :String ,
    
    enum : ["PENDING" , "ACCEPTED" , "REJECTED"]
}  ,
   
   
     

    
    
}) ;


const apply = mongoose.model("applied Request" , applyReq) ;
module.exports = apply ;
