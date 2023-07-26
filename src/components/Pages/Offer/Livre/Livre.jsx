import React from 'react'
import coverimage from '../../../../Images/coverimage.png'
import './Livre.css'

export default function Livre() {
  return (
    <div className='livreContainer'>
        <div className="card-Book">
        <img className="book-image" src={coverimage} alt="Book Cover" />
        <div className="book-details">
            <div className="book-title">Book Title</div>
            <div className="author">Author Name</div>
            <div className="original-price">$19.99</div>
            <div className="discounted-price">$14.99</div>
            <a href="f" className="buy-button">Contact</a>
        </div>
    </div>
         <div className="card-Book">
        <img className="book-image" src={coverimage} alt="Book Cover" />
        <div className="book-details">
            <div className="book-title">Book Title</div>
            <div className="author">Author Name</div>
            <div className="original-price">$19.99</div>
            <div className="discounted-price">$14.99</div>
            <a href="f" className="buy-button" >Contact</a>
        </div>
    </div>

   
    </div>
  )
}
