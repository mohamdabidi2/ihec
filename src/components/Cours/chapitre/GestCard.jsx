import React from 'react'
import { NavLink } from 'react-router-dom';


export default function GestCard(props) {
  return (
    <>
    <NavLink to={`chapGest/${props.url}`}>
       <div className="progress-card">
        <h2 className="course-name"> <span>{props.id}</span> {props.name}</h2>
        <div className="progress-bar" ></div>
        <div className="progress-text">70% Complete</div>
    </div>
    </NavLink>
    </>
  )
}
