import React, { useState } from 'react'

export default function MyAccountDoctor() {
   
      const [rating, setRating] = useState(0);
      const [hover, setHover] = useState(0);
      return (
        <div className="account">
            <div className="container">
                <div className="parent-content">
                    <div className="form">
                        <div className="form-group d-flex first">
                            <div className="profile-pic">
                                <label for="profile" className="img-label">
                                    <span>Change Photo</span>
                                </label>
                                <input type="file" id="file"/>
                                <img src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                                    alt=""/>
                            </div>
                            <h3>ahmed hemeida</h3>
                            <div className="star-rating">
          {[...Array(4)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= rating ? "on" : "off"}
                onClick={() => setRating(index)}
                onDoubleClick={() => {
                    setRating(0);
                    
                    }}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
                        </div>
                        <div className="form-group d-flex">
                            <label for="name">change name:</label>
                            <input type="text" name="" id="name"/>
                        </div>
                        <div className="form-group d-flex">
                            <label for="phone">change phone:</label>
                            <input type="text" name="" id="phone"/>
                        </div>
                        <div className="form-group d-flex">
                            <label for="password">change password:</label>
                            <input type="password" name="" id="password"/>
                        </div>
                        <div className="form-group d-flex">
                            <label for="location">change location:</label>
                            <input type="text" name="" id="location"/>
                        </div>
                        <div className="form-group d-flex">
                            <label for="pay">choose a way to pay:</label>
                            <div className="select-area">
                                <select name="" id="pay">
                                  <option value="paypal" disabled selected>choose an item</option>
                                    <option value="paypal">paypal</option>
                                    <option value="paypal">paypal</option>
                                    <option value="paypal">paypal</option>
                                    <option value="paypal">paypal</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group d-flex">
                            <button className='myaccount'>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
    }
    
