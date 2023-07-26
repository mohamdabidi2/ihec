import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './CourLayout.css'

export default function CourLayout() {
  return (
    <>
    <nav  className="coursBtn">
    <NavLink to="/chapGest">
      <button className="shadowBtn">
         Gestion
        </button>
    </NavLink>
      <NavLink to='economie'>
      <button className="shadowBtn">
         Economie
        </button>
    </NavLink>
      <NavLink to='math'>
      <button className="shadowBtn">
         Math
        </button>
    </NavLink>
        </nav>
        <Outlet />
    </>
  )
}
