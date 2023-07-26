import React from 'react'
import coverimage from '../../Images/coverimage.png'

export default function CardBook() {
  return (
    <>
        <div class="cardBook">
        <img class="book-image" src={coverimage} alt="Book Cover" />
        <div class="book-details">
            <div class="book-title">Book Title</div>
            <div class="author">Author Name</div>
            <div class="original-price">$19.99</div>
            <div class="discounted-price">$14.99</div>
            <a href="f" class="buy-button">Contact</a>
        </div>
    </div>
    </>
  )
}
