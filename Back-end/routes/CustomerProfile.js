const express = require ("express") ;
const router = express.Router() ;
const Customer= require("../models/CustomersModel") ;
const dotenv =require("dotenv") ;
dotenv.config();


router.get("/customers/get-profile" ,async (req,res)=>{

  try{

    const userId = req.body.userId ;
    let userData = await Customer.findById(userId) ;
    res.status(200).send(userData) ;


  }
  catch (err) {
    
    res.status(500).json({msg:'Error setting profile ' ,error:err});
    console.log(err);
  }


}) ;


router.put("/customers/update-profile",async(req,res)=>{

  try {

  const userId = req.body.userId ;

  let userData = await Customer.findById(userId) ;

  let username = req.body.username || userData.username ;
  let email  = req.body.email || userData.email ;
  let phone =req.body.phone || userData.phone || null ;

  userData.username = username;
  userData.email =email ;
  userData.phone = phone ;

  await userData.save() ;


  res.status(200).send("profile updated sucssesfully..") ; }

  catch (err) {
    
    res.status(500).json({msg:'Error update profile ' ,error:err});
    console.log(err);
  }



}) ;



  



  
  
  






  module.exports=router ;
