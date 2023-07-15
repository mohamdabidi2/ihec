import React from 'react'
import './Card.css'

export default function Card() {

  return ( 
  <>
 
    <div class="online-container">
        <table>
            <thead>
                <tr>
                    <th>Niveau</th>
                    <th>Course Name</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2eme</td>
                    <td>Course 1</td>
                    <td>July 15, 2023</td>
                    <td><button class="enroll-button" onclick="enroll('Course 1')">Enroll</button></td>
                </tr>
              </tbody>
                    </table>
    </div>
    
    
    </>
  )
}
