import React from 'react' 
import { Outlet } from 'react-router-dom'
import Top from './Body Section/Top Section/Top.jsx'
import SideBar from './SideBar Section/SideBar.jsx'

export default function Layout() {
    return(
        <>
         <div className="container">
        <SideBar /> 
        <div className="mainContent">
          <Top />
          <div className='bottom ' >
        <Outlet />
    </div>
        </div> 
     </div>
        </>
    )
}