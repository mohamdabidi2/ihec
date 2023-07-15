import React from 'react'
import './Information.css'

export default function Information() {
  return (
    
         <section className="login-pagee ">
                <div className="login-page-formulaire animate__animated animate__fadeInDown">
                <h2>Change Information</h2>

                    <form >
                        <input placeholder="Full Name" type="text" className="login-champs" />
                        <input placeholder="Username" type="text" className="login-champs" />
                        <input placeholder="Email" type="email" className="login-champs" />
                        <input placeholder="Phone" type="tel" className="login-champs" />
                        <input placeholder="Password" type="password" className="login-champs" />
                      <select className="login-champs niveau" name="" id="">
                        <option value="" className="niveau-option">2éme Eco</option>
                        <option value="" className="niveau-option">3éme Eco</option>
                        <option value="" className="niveau-option">Bac Eco</option>
                      </select>
            
             <button type="submit" className="btn-login">Update</button>
             <button type="submit" className="btn-login">Go back</button>
          
                       
                    </form>
                </div>
                <div className="login-page-formulaire animate__animated animate__fadeInDown">
                <div class="card">
        <h2>Change Password</h2>
        <div className='form'>
            <label for="current-password">Current Password:</label>
            <input type="password" id="current-password" name="current-password" required />
    
            <label for="new-password">New Password:</label>
            <input type="password" id="new-password" name="new-password" required />
    
            <label for="confirm-password">Confirm New Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
    
            <button type="submit">Change Password</button>
        </div>
        </div>
    </div>
            </section>
    
  )
}
