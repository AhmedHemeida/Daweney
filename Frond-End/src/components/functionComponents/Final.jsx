import React from 'react'


export default function Final() {

            
           
                
              return (
              
    
         
         
          <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
            <div className="card-header bg-transparent border-0  text-uppercase"><h3> Contact form</h3></div>
            <div className="card-body">
           
              <form action="/"  encType="multipart/form-data" autoComplete="off">
               
                <div className="form-group">
                  <label className="mb-0">Your name<span className="text-danger">*</span></label>
                  <input name="name" type="text" className="form-control" placeholder="Name" required />
                 
                </div>
                <div className="form-group">
                  <label className="mb-0">Your email<span className="text-danger">*</span></label>
                  <input name="email" type="email" className="form-control" placeholder="Email"  required/>
                  
                </div>
                <div className="form-group">
                  <label className="mb-0">Your contact number (Optional)</label>
                  <input name="contact" type="text" className="form-control" placeholder="Contact"   />
                </div>
                <div className="form-group">
                  <label className="mb-0">Message<span className="text-danger">*</span></label>
                  <textarea name="message" type="text" className="form-control" placeholder="Message"   required/>
                  
                </div>
                <br></br>
                  <p className="text-center mb-0"><input type="submit" className="btn btn-primary btn-lg w-100 text-uppercase" value="Submit Now" /></p>
              </form>
              
            </div>
           
          </div>
        
                 
              
        
        
          );
        
          }
    
     
