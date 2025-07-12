const mongoose =require("mongoose") ;

const oredrsSchema= new mongoose.Schema({


        providerId :    String,
        customerId:     String  ,
        typeofservice : String ,
        serviceIds : {
            type :[ String] ,
            default : []
           } ,
        priceOfService: Number ,
        date : Date

    
}) ;



const ord = mongoose.model("order" , oredrsSchema) ;
module.exports = ord ;
