const express = require ("express") ;
const router = express.Router() ;
const dotenv =require("dotenv") ;
dotenv.config();
const User =require("../models/CustomersModel") ;
const bcrypt = require ("bcrypt") ;
const genToken=require("../controllers/Jwt.js") ;
const jwt = require('jsonwebtoken');
const valid =require("../util/customerLogValid") ;


router.post("/customers/signin" , async(req,res)=>{

    
         try {

            const {error} = valid.validate(req.body) ;
            if (error) {
                return res.status(400).json({
                  msg: error.details[0].message ,
                  customerID:null
                });
              } 

                let usr = await User.findOne( { email : req.body.email }).exec() ; 
                if(!usr) return res.status(400).json({msg:"inValid email or password..",customerID:null}) ;

                if(usr.provider=='google')
                return res.status(400).json({msg:"this account was Register with google , try sign in with your google account..",customerID:null}) ;

                const validpswrd = await bcrypt.compare(req.body.password , usr.password) ;
                if(!validpswrd) return res.status(400).json({msg:"inValid email or password..",customerID:null}) ;

                if(usr.isVerified==false)
                return res.status(401).json({msg:" Email not verified Please , check your gmail and verify it.." , customerID:null}) ;

                const token = genToken.generateToken(usr) ;
                res.setHeader('Authorization',  token);
                res.status(200).json( { msg :"Logged in sucsessfully.." , customerID :usr._id })  ;
                
                

                 
                  
    

            
                        
          }
          catch(err){
                res.status(500).send("error happen");
          }
    
    
    
}) ;











module.exports=router ;