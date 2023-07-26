import React from 'react'
import './SideBar.css'
import { Link,  NavLink } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import logo_no_background from '../../Images/logo-no-background.png'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { PiBooksDuotone, PiVideoCameraThin, PiBookThin } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { MdLocalOffer } from "react-icons/md";

export default  function Sidebar() {
  return (
    <>
        <div className="sideBar grid">
            
            <div className="logoDiv flex">
                <BsFillArrowLeftCircleFill className='flesh' />
                <img src={logo_no_background}  alt="" />
                {/* <h2>Ihec Academy</h2> */}
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
                    <Link to="chapGest">
                    <li className="ListItem">
                        <p p className='menuLink flex'>
                            <PiBookThin className="icon" />
                            <span className="smallText">
                                Matiere
                            </span>
                        </p>
                    </li> 
                    </Link>
                    <NavLink to="livre">
                       <li className="ListItem">
                        <p  className='menuLink flex'>
                            <PiBooksDuotone className="icon" />
                            <span className="smallText">
                                Livre
                            </span>
                        </p>
                    </li>
                    </NavLink>
                    <Link to="/Online">
                       <li className="ListItem">
                        <p  className='menuLink flex'>
                            <PiVideoCameraThin className="icon" />
                            <span className="smallText">
                                En directe
                            </span>
                        </p>
                    </li>
                    </Link>
                    <Link to="/Offer">
                       <li className="ListItem">
                        <p className='menuLink flex'>
                            <MdLocalOffer className="icon" />
                            <span className="smallText">
                                Offre
                            </span>
                        </p>
                    </li> 
                    </Link>
                    <Link to='/ProfileCard'>
                       <li className="ListItem">
                        <p  className='menuLink flex'>
                            <CgProfile className="icon" />
                            <span className="smallText">
                                Mon profile
                            </span>
                        </p>
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
     
    
    </>
  )
}

