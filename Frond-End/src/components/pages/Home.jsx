import React, { Component } from 'react'
import { FaPhoneSquare } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import MyFooter from '../functionComponents/MyFooter';
import { MyNav } from '../functionComponents/MyNav';



export default function Home() {
  
 
  return (
    <div>
      
         <div>
        <p className='mt-4  text-center fs-4 fw-semibold'>Better Healthcare for a Better Life</p>
        <p className='  text-center fs-5 '>Book online or call <span className='fs-4 p-1'><FaPhoneSquare /></span>16676 </p>
      </div>
     
      <section className="section">
        <div className="container">
          <div className="row align-items-center gx-md-5 gy-4 gy-md-0">
          <div className="col-md-6">
              <section className="vstack gap-2">
                <p className=" text-black-50">
                For over twenty years we have been branding and marketing to two major markets: technology and healthcare. It was a natural progression to find a way to help those in healthcare with their online marketing needs, providing some medical and nursing services  in addition to only after services  such as analysis and radiology.</p>
                <div>
                  <Link to="/about" className="btn btn-primary">learn more</Link>
                </div>
              </section>
            </div>
            <div className="col-md-6">
              <section>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpR0lowMpWxessbW3uKCW-PZnPdMh2QS-AvBTH9o6QIR06uL5KQwHZ0g3yjMkjfqgTkBA&usqp=CAU " className='learn'/>
              </section>
            </div>
            
          </div>
        </div>
      </section>
      
      <section id="services" className="section text-center">
        <div class="container vstack gap-5">
          <div class="col-9 mx-auto">
            <h2 class="section-title">Choose From Top Offers</h2>
            
          </div>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5 gx-md-5">
            <div class="col">
              <article
                class="service vstack gap-3 max-w col-8 col-md-12 mx-auto"
              >
                <h4 class="vstack gap-3 text-capitalize fw-semibold">
                
                  <img className='imag'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Vw95Y4408tFUXrndBLwC5Vfq-ZrYKxlH9A&usqp=CAU"style={{"height" : "300px", "width" : "400px"}}/>
                  </h4>
                <div>
                <Link to="/service1"className="btn btn-primary"> Nursing Services</Link>
                </div>
              </article>
            </div>
            <div class="col">
              <article
                class="service vstack gap-3 max-w col-8 col-md-12 mx-auto"
              >
                <h4 class="vstack gap-3 text-capitalize fw-semibold">
               
                  <img className='imag'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIL8nhHYwbn4xmKvF2Gw3GQ-redVKz_GZYhXxHIPp888zN-HWpBmJWdWclf_iFwtGVL8&usqp=CAU"style={{"height" : "300px", "width" : "400px"}}/>
                  </h4>
                <div>
                <Link to="/service2"className="btn btn-primary">   medical services</Link>
                </div>
              </article>
            </div>
            <div class="col">
              <article
                class="service vstack gap-3 max-w col-8 col-md-12 mx-auto"
              >
                <h4 class="vstack gap-3 text-capitalize fw-semibold">
                 
                  <img className='imag'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmaRtPeXW39hx9xYYgNmVLGpqIafJUYwDNg&usqp=CAU "style={{"height" : "300px", "width" : "400px"}}/>
                </h4>
                <div>
                <Link to="/service3"className="btn btn-primary">  medical tests</Link>
                </div>
              </article>
            </div>
            <div class="col">
              <article
                class="service vstack gap-3 max-w col-8 col-md-12 mx-auto"
              >
                <h4 class="vstack gap-3 text-capitalize fw-semibold">
                 
                  <img className='imag'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgiDyfdrsGjLpBmyfiJvcM2ke7rTuuQapqA&usqp=CAU "style={{"height" : "300px", "width" : "400px"}}/>
                </h4>
                <div>
                  <a href="#" className="btn btn-primary">medical supplies</a>
                </div>
              </article>
            </div>
            <div class="col">
              <article
                class="service vstack gap-3 max-w col-8 col-md-12 mx-auto"
              >
                
                <h4 class="vstack gap-3 text-capitalize fw-semibold">
                  
                  <img className='imag' src="https://media.istockphoto.com/id/1217561470/photo/doctor-diagnosing-patient%C3%A2s-health-on-asthma-lung-disease-covid-19-or-bone-cancer-illness.jpg?s=612x612&w=0&k=20&c=beOvSZCzJ8w2hRn2jJiJaZwZ59Xrci7FKyBK65NayTA="style={{"height" : "300px", "width" : "400px"}}/>
                </h4>
                <div>
                <Link to="/service5"className="btn btn-primary"> medical radiology</Link>
                </div>
              </article>
            </div>
            
            <div class="col">
              <article
                class="service vstack gap-3 max-w col-8 col-md-12 mx-auto"
              >
                <h4 class="vstack gap-3 text-capitalize fw-semibold">
                 
                  <img className='imag'src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg "style={{"height" : "300px", "width" : "400px"}}/>
                </h4>
                <div>
                <Link to="/help"className="btn btn-primary">help and inquiries</Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
     
  
          
    </div>
  );


}


