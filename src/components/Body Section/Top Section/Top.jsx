import React from 'react'
import './Top.css'
import { AiOutlineSearch  } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

export default function Top() {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Hello to Ihec Academy</h1>
          <p>Hello Guest, Welcome Back</p>
        </div>
        <div className="searchBar flex">
                   
          <input type="search" placeholder='search' className='inputSearch' /> 
          <AiOutlineSearch className="icon" />
        </div>
        <NavLink to='login'>
         <div className='logOut'>
         <li className='logoutText'>Logout</li>
        <li className='logoutLogo'><BiLogOut /></li>
      </div>
       </NavLink>
      </div>
     
    </div>
  )
}

