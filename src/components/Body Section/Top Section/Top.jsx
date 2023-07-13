import React from 'react'
import './Top.css'
import { AiOutlineSearch  } from "react-icons/ai";

export default function Top() {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Hello to Ihec Academy</h1>
          <p>Hello Guest, Welcome Back</p>
        </div>
        <div className="searchBar flex">
          <input type="search" placeholder='' className='inputSearch' />
          <AiOutlineSearch className="icon" />
        </div>
      </div>
    </div>
  )
}

