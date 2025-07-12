const express = require ("express") ;
const router = express.Router() ;
const cloudinary = require('cloudinary').v2;
const Provider= require ("../models/ProvidersModel") ;
const dotenv =require("dotenv") ;
dotenv.config();

const multer = require('multer');
const storage = multer.diskStorage({});
const upload = multer({ storage});


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});



router.get("/providers/get-profile" ,async (req,res)=>{

  try{

    const userId = req.body.userId ;
    let userData = await Provider.findById(userId) ;
    res.status(200).send(userData) ;


  }
  catch (err) {
    
    res.status(500).json({msg:'Error get profile ' ,error:err});
    console.log(err);
  }


}) ;


router.post('/providers/upload-photo', upload.single('photo'), async (req, res) => {
    try {
      
      const userId =  req.body.Id ;
  
      
      const result = await cloudinary.uploader.upload(req.file.path, { folder: 'providerimg' });
  
     
     await   Provider.updateOne ({_id:userId} ,{photo:result.secure_url})  ;
     
      res.send('Profile photo updated successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error updating profile photo');
    }
  }); 
  


  router.put("/providers/setprofile" , async(req,res)=>{

    try{


/*     const userId = "6403a0a6c1225b6b679b7709"  ;// req.body.Id ;
    const gender="male"    //req.body.gender  ;
    const typeofservice="nurse"  //req.body.typeofservice ;
    const longitude= "30.11111" //req.body.longitude ;
    const latitude ="30.125545"  // req.body.latitude ; 
    */
   // const user = await Provider.findById(userId) ;

    //await user.save() ;

    const userId = req.body.Id ;
    const gender=req.body.gender  ;
    const typeofservice=req.body.typeofservice ;
    const longitude= req.body.longitude ;
    const latitude = req.body.latitude ;
    const phone = req.body.phone ;
  
    if( !phone || !gender || !typeofservice || !longitude || !latitude)
    {
     return res.status(400).send("some fields empty , please enter it") ;
    }
    

   await   Provider.updateOne ({_id:userId} ,{phone:phone ,gender:gender ,typeofservice:typeofservice ,
    
         'location.coordinates':[longitude,latitude]

    }  ) ;


    res.status(200).send("profile updated successfully");


  }

    catch (err) {
    
      res.status(500).json({msg:'Error setting profile ' ,error:err});
      console.log(err);
    }


  }) ;

  

router.put("/providers/update-profile",async(req,res)=>{

  try {

  const userId = req.body.userId ;

  let userData = await Provider.findById(userId) ;

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
