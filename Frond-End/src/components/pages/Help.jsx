import React from 'react'
import help from "../../imgs/help.jpg"
export default function Help() {
  return (
    <div className='parent'>
    <div class="contact">
          <h1>How we can help you</h1>
        
          <img src={help} alt="Contact Team"/>
            <form>
          <div className="tarea">
          <label for="message">Message:</label>
          <textarea name="message" placeholder="your message..." ></textarea>
          </div>
         
          <div class="inp">
           <label for="request">Request id:</label> 
          <input  className="request" type="number" name="request"/>
          </div>
         <input className="button" type="submit" value="send"/> 
         </form>
         </div>
         </div>
  )
}
