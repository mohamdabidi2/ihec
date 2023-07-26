import React from 'react'
import './Vide.css'
import OfferCountdown from './Dash/OfferCountdown.jsx'
import FreeVideo from './Dash/FreeVideo.jsx'
import CardLive from './Dash/CardLive.jsx'
import CardBook from './Dash/CardBook'

export default function Vide() {


  return (
    <div className='content'>
     <CardLive />
    <FreeVideo />
    <CardBook />
    <OfferCountdown />
    </div>
  )
}
