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
                    <Link to="/">
                    <li className="ListItem">
                        <p className='menuLink flex'>
                            <AiFillHome className="icon" />
                            <span className="smallText">
                                Acceuil
                            </span>
                        </p>
                    </li></Link>
                    <li className="ListItem">
                        <p p className='menuLink flex'>
                            <AiFillHome className="icon" />
                            <span className="smallText">
                                Matiere
                            </span>
                        </p>
                    </li>
                       <li className="ListItem">
                        <p  className='menuLink flex'>
                            <AiFillHome className="icon" />
                            <span className="smallText">
                                Livre
                            </span>
                        </p>
                    </li>
                    <Link to="/Online">
                       <li className="ListItem">
                        <p  className='menuLink flex'>
                            <AiFillHome className="icon" />
                            <span className="smallText">
                                En directe
                            </span>
                        </p>
                    </li>
                    </Link>
                       <li className="ListItem">
                        <p className='menuLink flex'>
                            <AiFillHome className="icon" />
                            <span className="smallText">
                                Offre
                            </span>
                        </p>
                    </li> 
                    <Link to='/ProfileCard'>
                       <li className="ListItem">
                        <p  className='menuLink flex'>
                            <AiFillHome className="icon" />
                            <span className="smallText">
                                Mon profile
                            </span>
                        </p>
                    </li>
                    </Link>
                </ul>
            </div>
                          <Link to='/register'>
      <button>register</button>
      </Link>
        </div>
     
    
    </>
  )
}

