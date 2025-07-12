import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Services() {

  const handleClick = event => {
    // 👇️ refers to the image element
 

  };

  return (
    <div>
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
                
                  <img className='imag'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Vw95Y4408tFUXrndBLwC5Vfq-ZrYKxlH9A&usqp=CAU"style={{"height" : "300px", "width" : "400px"}} />
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
                <Link to="/service2"className="btn btn-primary">medical services</Link>
              
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
                  <a  className="btn btn-primary">medical supplies</a>
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
  )
}
