"# Daweney"

------------------------Graduation Project------------------------

The problem we hope to solve

Some people have difficulty finding a nurse or a doctor to take care of them during the treatment period, and from here the idea of ​​​​the application came to us, which is a system that the patient logs in to and when is allowed to enter, he will find a very wide range of medical services such as analyzes, x-rays, etc.. He can also ask a service provider such as a "nurse" to take care of him, then the application will do its job and show him the available people who provide the same service to him according to the price, the distance and the job he will perform, and through that, the patient pays through the various payment methods provided by the application, and from here we may have solved the problem properly.

(i) approach and tools/techniques In order to make it more flexible and easier for the patient, so that he can reach us easily, we designed a website that can be accessed through the browser and an application that can be accessed from the store

(ii) overview of system modules There are two types of application, an application for the patient and an application for the nurse or doctor. The patient application helps the patient to request the service. So we come to the role of the nurse. The service will reach him. Either I reject it or he accepts it. If he accepts, he communicates with the patient and performs the service. And he can control it

-----------------------------------------------------------------------------------------

Details : 

# Backend : Node js , express js  , mongo db 
## Authentication & Authoriaztion :  
### Oauth 2 | Nodemailer for sending verification code to gmail account 
### Google Passport to login with google account directly 
### jwt for more security
## Validation : using Joi Library
## database  : mongo db with mongoose 
## Design pattern : MVC
----------------
## for real time : Socket io  
## for pay : paypal 
### will update soon :)
-------------------

