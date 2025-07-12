const express = require ("express") ;
const router = express.Router() ;
const dotenv = require('dotenv');
dotenv.config();
const verify = require("../controllers/Jwt.js") ;
var jwt = require('jsonwebtoken');
const Provider=require("../models/ProvidersModel");
const Customer=require("../models/CustomersModel")
const near = require("../controllers/NearestProviders");
const SentReq=require("../models/customerSentRequest") ;
const ProvReq =require("../models/ProviderRequest") ;
const AppliedReq = require("../models/applyRequest") ;
const Order=require("../models/ordersModel") ;

const Doctor = require("../models/serviceModels/doctor") ;
const Nurse = require("../models/serviceModels/nurse") ;
const Analysis = require("../models/serviceModels/analysis") ;
const Ray = require("../models/serviceModels/ray")
const moment = require('moment');





router.get("/customers/findservice" ,async (req,res)=>{


    try {

    const typeofservice = req.body.typeofservice ;

    if (typeofservice=="nurse")
    {
        const services= await Nurse.find() ;
        res.status(200).send(services) ;

    } else if(typeofservice=="ray"){

        const services= await Ray.find() ;
        res.status(200).send(services) ;
    }
    else if(typeofservice=="analysis"){

        const services= await Analysis.find() ;
        res.status(200).send(services) ;
    }
    else if(typeofservice=="doctor"){

        const services= await Doctor.find() ;
        res.status(200).send(services) ;
    }else{

        res.status(404).send("Not found !") ;
    }


}

catch(error){

    res.status(500).send("error in get services") ;
}

});
















router.post("/customers/sendreq" , async(req,res)=>{

    try {
    
        
    //const token = req.header("Authorization") ;
    //let data =jwt.verify(token,process.env.JWT_SECRET) ;
    //if(data){


    const customerId=   req.body.customerId ; //"6410ab17eab7a700356367eb"; 
    const latitude = req.body.latitude ; // 30.941733; 
    const longitude = req.body.longitude ;// 30.680024 ;  
    const typeofservice=req.body.typeofservice //"nurse" ;     
    let services=[]
    const serviceIds= req.body.serviceIds //["641b7e8ab0d20b2f48a6a626","641b7e8ab0d20b2f48a6a627"] ;
   
    if (typeofservice=="doctor"){

        services = await Doctor.find({ _id: { $in: serviceIds } });


    }else if(typeofservice=="nurse"){
         services = await Nurse.find({ _id: { $in: serviceIds } });

    }
    else if(typeofservice=="analysis"){
    services = await Analysis.find({ _id: { $in: serviceIds } });

    }else if(typeofservice=="ray"){
        services = await Ray.find({ _id: { $in: serviceIds } });

   }else{
    return res.status(404).json({msg:"service  not exist !" , RequestId:null}) ;
   } 

   let price=0 ;

   for (let i = 0; i < services.length; i++) {
        price   += services[i].price;
   }
  


    const name= req.body.name  ;  //"ahmed elhosary" ;  
    const number=req.body.number ; //"01210615654" ;   
    const address =req.body.address //"zawya" ;     // 
    let gender = req.body.gender ; //"anyone";      // 
    const timeOfService = req.body.timeOfService; // "2023-05-24T12:00:00"

    if (!moment(timeOfService, moment.ISO_8601, true).isValid()) {
      return res.status(400).json({ msg: "Invalid date format", RequestId: null });
    }
    
    if( !(gender== "male" || gender =="female" || gender == "anyone" )){
    return res.status(400).json({msg:"gender should be one of these : male , female , anyone "}) ;}

    if(!customerId || !latitude || !longitude || !typeofservice ||  !serviceIds || !name || !number || !address || !gender || !timeOfService ){
        
        return res.status(400).json({msg:"some fields missed ..! ", RequestId:null}) ;
    }

  

    const users= await near.NearestProviders({
        longitude:longitude,latitude:latitude,typeofservice:typeofservice ,gender:gender}) ;
      

        if(users.length==0){
    
            console.log(users);
        return res.status(404).json({msg:"no providers exist close to your location" , RequestId:null}) ;}

        const Sent= new SentReq ({

            customerId : customerId ,
            date:Date.now(),
            typeofservice:typeofservice,
            status:"pending" ,
            service:services,
            priceOfService:price ,
            address:address
            
    
    
        }) ;
    
        
     
        await Sent.save() ;
 
    for(let i=0; i<users.length ;i++){
        
        const provReq= new ProvReq({

        providerId:users[i]._id,    
        RequestId: Sent._id, 
        customerId:customerId ,
        typeofservice:typeofservice,
        service:services,
        name:name ,
        address : address ,
        number:number ,
        timeOfService:timeOfService,
        price:price 
        
        }) ;

        await provReq.save() ;
      


    }
    
  
    
    
    
    res.status(200).json({ msg : "Request Sent..",RequestId:Sent._id});   
        
}
   
//else{
  //  res.send("invalid token");
//}

 catch (error) {
    res.status(500).json({msg:"error happen " })  ;
    
}
}) ;










router.post("/customers/cancelreq" ,async (req,res)=>{

    try {

    const reqId = req.body.reqId  ;

    if(!reqId) {
        return res.status(400).send("ID Required Bro..");
    }


   await SentReq.deleteOne({_id:reqId}) ;
   await ProvReq.deleteMany({RequestId :reqId}) ;

     res.status(200).json({msg:"Request canceled"}) ;
    }

    catch (error) {
        res.status(500).json({msg:"error happen " })  ;
    }

}) ;






router.get("/customers/getreq" ,async(req,res)=>{




        try {

        const customerId=req.body.customerId  ;
        if(!customerId) {
            return res.status(400).send("Customer ID Required Bro..");
        }
        const requests = await SentReq.find({customerId:customerId}) ;
        res.status(200).send(requests) ;

        }
    
        catch (error) {
            res.status(500).json({msg:"error happen " })  ;
        }
}) ;


router.get("/providers/getreq" ,async(req,res)=>{


    //check auth 


        try {

        const providerId= req.body.providerId ; //"6403a0a6c1225b6b679b7708" ;
        if(!providerId) {
            return res.status(400).send("provider ID Required Bro..");
        }
        const requests = await ProvReq.find({providerId:providerId},{price:0}) ;
        res.status(200).send(requests) ;

        }
    
        catch (error) {
            res.status(500).json({msg:"error happen " })  ;
        }
}) ;




router.post("/providers/applyreq" , async(req,res)=>{

    // Token Plz

    try {

        const reqId=  req.body.reqId ;  
        const customerId = req.body.customerId ; 
        const providerId =req.body.providerId ;
        let typeofservice=req.body.typeofservice  ;
        
        let priceOfService= req.body.priceOfService   ;

        if(!reqId || !customerId || !providerId || !typeofservice || !priceOfService){
            return res.status(400).send("some fields missed ..! ") ;
        }



        await SentReq.updateOne({RequestId:reqId , status:"applied"}) ;

        const reqs = await ProvReq.findOne({RequestId:reqId}) ;
        console.log(reqs);
        priceOfService+=reqs.price ;

       const provider = await Provider.findOne({_id:providerId}) ;

       let apply = new AppliedReq({

        providerId :providerId ,
        customerId : customerId ,
        RequestId : reqId ,
        providerPhoto:provider.photo,
        providerName:provider.username,
        typeofservice: typeofservice,
        priceOfService :priceOfService ,
        status : "PENDING" 


        }) ;

        await ProvReq.deleteOne({RequestId : reqId}) ;
        await apply.save() ;

        res.status(200).json({
            msg : "Your application sent , wait for customer accept " ,
            appId:apply._id
        }) ;


        
        
     
        }
    
        catch (error) {
            res.status(500).json({msg:"error happen " })  ;
            console.log(error);
            
      }

}) ;





router.post("/providers/cancelapp" ,async (req,res)=>{

    try {

    const AppId=   req.body.AppId ;

    if(!AppId) {
        return res.status(400).json({msg:"ID Required Bro.."});
    }

   await AppliedReq.deleteOne({_id:AppId}) ;
   

   res.status(200).json({msg:"Application canceled"}) ;

    }

    catch (error) {
        res.status(500).json({msg:"error happen " })  ;
    }

}) ;






router.get("/customers/getapp" , async(req,res)=>{

    // Token Plz

    try {


        const reqId = req.body.reqId  ;

        if(!reqId) {
            return res.status(400).json({msg:" customer ID Required Bro.."});
        }
        
        const getApp = await AppliedReq.find({RequestId:reqId},{status:false}) ;
        res.status(200).send(getApp) ;
        
     
        }
    
        catch (error) {
            res.status(500).json({msg:"error happen " })  ;
        }

}) ;



router.get("/providers/getapp" , async(req,res)=>{

    // Token Plz

    try {

        const providerId = req.body.providerId ; //"6403a0a6c1225b6b679b7707" ;
        
        if(!providerId) {
            return res.status(400).json({msg:" provider ID Required Bro.."});
        }
        const getApp = await AppliedReq.find({providerId:providerId},{providerId:false}) ;
        res.status(200).send(getApp) ;
        
     
        }
    
        catch (error) {
            res.status(500).json({msg:"error happen " })  ;
        }

}) ;



router.post("/customers/acceptapp" , async(req,res)=>{

    try {

       const customerId = req.body.customerId ;
       const  providerId=  req.body.providerId  //"6403a0a6c1225b6b679b7707"  ;
       const  reqId = req.body.reqId  ;

       const  serviceIds = req.body.serviceIds ;
       const services = req.body.services     // ["حقنة"] ;
       

        const AppId= req.body.AppId 




       const app =  await AppliedReq.find({_id : AppId});
       
        const providerName   =   app.providerName //"ali" ;
        const priceOfService =   app.priceOfService ;
        const typeofservice =      app.typeofservice //"nurse"  ;

        const customer  =   Customer.findOne({_id:customerId })  
        const customerName = customer.username ;

        const ordr= new Order({

            customerId  :  customerId,
            providerId   : providerId ,
            typeofservice : typeofservice ,
            serviceIds : serviceIds ,
            priceOfService : priceOfService ,
            date : Date.now()
        }) ;

        await ordr.save() ;

      

        await SentReq.deleteOne({_id:reqId}) ;    
        await ProvReq.deleteMany({RequestId :reqId}) ;
        await AppliedReq.deleteMany({RequestId:reqId}) ;

       await Customer.updateOne({_id:customerId} , { $push:{ oldRequests: {
        
            //provider profile
            providerName:providerName ,
            typeofservice : typeofservice ,
            services : services  ,
            priceOfService : priceOfService ,
            date : Date.now() }
        
        }}
            
            ) ;

            await Provider.updateOne({_id:providerId} , { $push:{ oldRequests: {
        
            
                //customer profile
                customerName:customerName,
                typeofservice : typeofservice ,
                services : services ,
                priceOfService : priceOfService ,
                date : Date.now() }
            
            }}
                
                ) ;


                res.status(200).json({
                    msg : "Accept Done" ,
                    order :ordr
                })
        

    } 
    catch (error) {

        res.status(400).send("error happen " + error)  ;
        
  }

})


router.post("/customers/rejectapp" , async(req,res)=>{

    try {


        const AppId = req.body.AppId;


     await AppliedReq.deleteOne({_id:AppId}) ;

     res.status(200).send("Reject done")


    }
    catch (error) {

        res.status(400).send("error happen " + error)  ;
  }

        
}) ;












router.post("/service/insert" , async(req,res)=>{


    await Analysis.insertMany([

        
        {
        
        
            EnglishName : "Gorsoma" ,
            ArabicName  : "جرثومة"  ,
            price : 40  ,
        
            
            
            }
       

            ,
	
	{
	
	
		EnglishName : "Blood" ,
		ArabicName  : "صورة دم   "  ,
		price : 40  ,
	
		
		
		} ,


        {
	
	
            EnglishName : "Vitamine d" ,
            ArabicName  : "فيتامين د "  ,
            price : 40  ,
        
            
            
            } ,


            {
	
	
                EnglishName : "Tsh" ,
                ArabicName  : " غدة   "  ,
                price : 40  ,
            
                
                
                }



        
	
	




        
	
	
		

       


       
    ]);

}) ;



















router.post("/providers/insert" , async(req,res)=>{


    await Provider.insertMany([

        {

        username : "batanon" ,
        email : "aelhosary@gmail.com" ,
        password :  "hashedPassword"  ,
        provider:'gmail' ,
        googleId:null ,
        location: {
            type: 'Point',
            coordinates: [30.610238 ,30.987055 ]
        } ,
        typeofservice:"nurse" ,
        isVerified:true ,
        VerifiedByOffice:true ,
        request:[] ,

    } ,

    {

        username : "zawya" ,
        email : "hemeida@gmail.com" ,
        password :  "hashedPassword"  ,
        provider:'gmail' ,
        googleId:null ,
        location: {
            type: 'Point',
            coordinates: [30.713015 ,30.940498 ]
        } ,
        typeofservice:"nurse" ,
        isVerified:true ,
        VerifiedByOffice:true ,
        request:[] ,

    } ,

    {

        username : "qashtokh" ,
        email : "aelhosaryaa@gmail.com" ,
        password :  "hashedPassword"  ,
        provider:'gmail' ,
        googleId:null ,
        location: {
            type: 'Point',
            coordinates: [30.746525,30.931908 ]
        } ,
        typeofservice:"nurse" ,
        isVerified:true ,
        VerifiedByOffice:true ,
        request:[] ,

    } ,

    {

        username : "bandarya" ,
        email : "ahmed@gmail.com" ,
        password :  "hashedPassword"  ,
        provider:'gmail' ,
        googleId:null ,
        location: {
            type: 'Point',
            coordinates: [30.725592 ,30.937666 ]
        } ,
        typeofservice:"ray" ,
        isVerified:true ,
        VerifiedByOffice:true ,
        request:[] ,

    } ,


       
    ]);

}) ;







module.exports=router ;