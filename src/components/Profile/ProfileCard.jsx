import React from 'react'
import './ProfileCard.css'
import { Link } from 'react-router-dom'

export default function ProfileCard() {
  return (
    <section className='login-pagee'>
    <div className="profile-card">
    <div className="profile-image">
        <input type="file" />
    </div>
    <div className="profile-info">
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-email">Email: john.doe@example.com</p>
        <p className="profile-phone">Phone: 1234567890</p>
        <p className="profile-level">Level: 2ème Eco</p>
        <div className="profile-buttons">
          <Link to="/ProfileCard/Information" >
            <button className="btn-modify">Modify Information</button>
            </Link>
            <button className="btn-logout">Log Out</button>
        </div>
    </div>
</div>

    </section>
  )
}
