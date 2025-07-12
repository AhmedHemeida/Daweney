const mongoose =require("mongoose") ;

const CustomerRegistSchema = new mongoose.Schema({



  username: {
    type: String,
    required: true,

       } ,

    email :{
        type : String  ,
         unique : true ,
         required :true  ,
      
        
    } ,
      password : {
        type : String ,
        
      
      } ,
      isVerified: {
        type: Boolean,
        default: false,
    },

   

    googleId: {
        type: String,
    },
    provider: {
        type: String,
        required: true,
    } ,



 
    
    oldRequests :{
        type : [{typeofservice : String , date:Date , providerName:String,
           providerId: String , priceOfService : Number , service : {
            type :[ String] ,
            default : []
           } ,
        }] ,
      default : []
    }

  
    
} ,
{
  timestamps: true
}


) ;



const cust = mongoose.model("Customer" ,CustomerRegistSchema) ;
module.exports = cust ;


