import React from 'react'
import './SideBar.css'
import {Link } from 'react-router-dom'
 import { AiFillHome } from "react-icons/ai";

export default  function Sidebar() {
  return (
    <>
        <div className="sideBar grid">
            <div className="logoDiv flex">
                <img  alt="" />
                <h2>Ihec Academy</h2>
            </div>
            <div className="menuDiv">
                <ul className="menuLists grid">
                    <li className="ListItem">
                        <a href='' className='menuLink flex'>
                            <AiFillHome className="icon" />
                            <span className="smallText">
                                Acceuil
                            </span>
                        </a>
                    </li>
                    <li className="ListItem">
                        <a href='' className='menuLink flex'>
                            <AiFillHome className="icon" />
                            <span className="smallText">
                                Matiere
                            </span>
                        </a>
                    </li>
                       <li className="ListItem">
                        <a href='' className='menuLink flex'>
                            <AiFillHome className="icon" />
                            <span className="smallText">
                                Livre
                            </span>
                        </a>
                    </li>
                       <li className="ListItem">
                        <a href='' className='menuLink flex'>
                            <AiFillHome className="icon" />
                            <span className="smallText">
                                En directe
                            </span>
                        </a>
                    </li>
                       <li className="ListItem">
                        <a href='' className='menuLink flex'>
                            <AiFillHome className="icon" />
                            <span className="smallText">
                                Offre
                            </span>
                        </a>
                    </li>
                       <li className="ListItem">
                        <a href='' className='menuLink flex'>
                            <AiFillHome className="icon" />
                            <span className="smallText">
                                Mon profile
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
                          <Link to='/register'>
      <button>register</button>
      </Link>
        </div>
     
    
    </>
  )
}

