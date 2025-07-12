import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
  
  export default function MyFooter() {
    return (
     
     
    <footer className='text-white'style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}  >
  
      {/* <div className="row mt-5">
        <div className=" col-md-3 col-lg-4 col-xl-3 mx-auto ">
          
            <h6 className="text-uppercase fw-bold mb-4"> Company name</h6>
            <p className="text-sm  ">
            Here you can use rows and columns to 
            organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit 
                 consectetur adipisicing elit  consectetur adipisicing elit  
                consectetur adipisicing elit.
            </p>
         
        </div>
        <div className="Col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p className='text-sm'>
                <p className='text-sm'>
                  Angular
                </p>
              </p>
              <p className='text-sm'>
                <p className='text-sm'>
                  React
                </p>
              </p>
              <p className='text-sm'>
                <p className='text-sm'>
                  Vue
                </p>
              </p>
              <p className='text-sm'>
                <p className='text-sm'>
                  Laravel
                </p>
              </p>
            </div>

            <div className="Col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p className=' text-sm'>
                <p className=' text-sm'>
                  Pricing
                </p>
              </p>
              <p className=' text-sm'>
                <p className=' text-sm'>
                  Settings
                </p>
              </p>
              <p className=' text-sm'>
                <p className=' text-sm'>
                 Services
                </p>
              </p>
              <p className=' text-sm'>
                <p className=' text-sm'>
                  Help
                </p>
              </p>
            
        </div> */}
        {/* <div  className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"> */}
              {/* <h6 className='text-uppercase fw-bold mb-4 '>Follow Us</h6>
              <p className='ex text-sm'>
              <span className='fs-4 p-1'><FaHome/></span>
              <span className=' ex'> New York, NY 10012, US</span>
              </p>
              <p className=' ex text-sm '>
              <span className='fs-4 p-1'><FaEnvelope/></span>
              
               <span className=' ex'> info@example.com</span>
              </p>
              <p className='ex text-sm'>
              <span className='fs-4 p-1'><FaPhone/></span>
              
              <span className=' ex'> + 01 234 567 88</span>
              </p>
              <p className='ex text-sm p-1'>
              <span className='fs-4 '><FaMobileAlt/></span>
              <span className=' ex'> + 01 234 567 89</span>
              </p>
            </div>
      </div>
    </div> */}
    <div className='text-center p-2 mb-3  bg-dark' >
       <span className='text-white-50'> © 2021 Copyright:</span>
        <a className='text-reset ' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
  </footer>
    );
    
  }
  

