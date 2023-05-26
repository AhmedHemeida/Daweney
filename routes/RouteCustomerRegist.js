const express = require ("express") ;
const router = express.Router() ;
const User =require("../models/CustomersModel") ;
const bcrypt = require ("bcrypt") ;
const send = require('../controllers/Nodemailer') ;
const verCode=require('../models/verificationCode') ;
const dotenv =require("dotenv") ;
dotenv.config();
const valid =require("../util/customerRegistValid") ;


//regstration by email and password

router.post("/customers/signup"  , async(req,res)=> {

    try {

        const {error} = valid.validate(req.body) ;
        if (error) {
            return res.status(400).json({
              msg: error.details[0].message
            });
          } 

   let usr = await User.findOne( { email : req.body.email }).exec() ;
  if(usr) {
    return res.status(409).json({msg:"user already exist.."}) ;
  } 

      let salt = await bcrypt.genSalt(10) ;
     let hashedPassword = await bcrypt.hash(req.body.password , salt) ;
     usr = new User({

        username : req.body.username ,
        email : req.body.email ,
        password :  hashedPassword  ,
        isVerified : false ,
        provider:'gmail' ,
        googleId:null ,
        

    }) ;
   
         
      await usr.save() ;
      const done = await send.sendMail({email:req.body.email},res) ;
    if(done) {
      res.status(201).json({
        msg:"Registeration success , Verification code sent",
        
      });

    }

       
      

     ;
   
      

    }
    catch (err){
        res.status(500).send("error happen" + err);


    }
}) ;




// Verify code 


router.post( "/customers/verifyusr",async (req, res) => {
    try {

     const email=req.body.email
        
  const code = await verCode.find({
      email: email
  });

  if (code.length === 0) return res.status(400).json({msg:"You use an Expired Code..! "});

  const rightCode = code[code.length - 1];
  const validUser = await bcrypt.compare(req.body.code, rightCode.code);

  if (rightCode.email === email && validUser) {
      await User.updateOne({email:email},{isVerified:true}) ;


      
       await verCode.deleteMany({
          email: rightCode.email
      });
      return res.status(200).json({
          msg: "Authenticated..! ",
          
         
      });
  } else {
      return res.status(400).json({msg:"Your Code was wrong!"})
  
    }

    
}
 catch (err){
    res.status(500).send("error happen");
  
}

} ) ;


// forget & Reset password 

router.post('/customers/sendcode', async(req,res)=>{
    
    try {

    const {email} = req.body ;
    
    const findUsr = await User.findOne({email:email}) ;
    if(findUsr){

        if (findUsr.provider == 'google') {

            res.status(400).json({msg:"User exists with Google account. Try resetting your google account password or logging using it"}) ;

    }
    else {
        
       await send.sendMail({email:email},res) ;

        res.status(200).json({msg:'verification code was sent , plz Check your Gmail..!'}) ;
    } 
        } 
            else {
                    res.status(404).json({msg:'No user exist with this email..'})
        }

    }
    catch (err){
        res.status(500).json({msg:"error happen"});

    }
}) ;



router.post('/customers/resetpass' , async(req,res)=>{

    try {

    const email = req.body.email ;
    const newPassword = req.body.newPassword ;
    if(!newPassword || !email){
   return res.status(400).json({msg:"some fields required"}) ; }
    else if (newPassword.length<8){
       return res.status(400).json({msg:"password should be at least 8 char"}) ;
    }
    else {
        let salt = await bcrypt.genSalt(10) ;
     let newHashedPassword = await bcrypt.hash(newPassword , salt) ;
        
    await User.findOneAndUpdate({ email: email }, { $set: { password: newHashedPassword } });
   
       
        res.status(200).send({msg:"Your password has updated.."}) ;
    }
    
}
    catch (err){
        res.status(500).json({msg:"error happen"});

    }

});







module.exports=router ;




