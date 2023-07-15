import React from 'react'
import './Body.css'
import Top from './Top Section/Top.jsx'
import Listing from './Listing Section/Listing.jsx' 
import Activity from './Activity Section/Activity.jsx'

export default function Body() {
  return (
    <div className="container">
    <div className='mainContent' >
    <Top />
    <div className='bottom flex' >
      <Listing />
      <Activity />
    </div>
    </div>
    </div>
  )
}
