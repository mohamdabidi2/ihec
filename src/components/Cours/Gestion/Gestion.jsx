import React, { useState, useEffect } from 'react';
import './Gestion.css';

export default function Gestion() {
  const [video, setVideo] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(resp => resp.json())
      .then(data => setVideo(data))
      .catch(error => console.log("Error fetching data:", error));
  }, []);

  const handleClick = (url) => {
    setUrl(url);
  };

  return (
    <>
      <div className='courContainer'>
        <div className="vidioPlace">
          <img src={url} alt='dfjl' />
        </div>
        <div className="coursLists">
          <div className="ntb">
            <button className='ntbOne'>lessons</button>
            <button className='ntbTow'>Exercice</button>
          </div>
          <div className='scroll-list'>
            <h3>Cout Complet</h3>
            <ul>
              {video.map((ele) => (
                <li onClick={() => handleClick(ele.url)} key={ele.id}>
                  {ele.title}
                </li>
              ))}
            </ul>
            <h3>Cout partiel</h3>
            <ul>
              <li>dsfds</li>
              <li>dsfds</li>
              <li>dsfds</li>
              <li>dsfds</li>
              <li>dsfds</li>
              <li>dsfds</li>
              <li>dsfds</li>
            </ul>
            <h3>Gestion financier</h3>
            <ul>
              <li>dsfds</li>
              <li>dsfds</li>
              <li>dsfds</li>
              <li>dsfds</li>
              <li>dsfds</li>
              <li>dsfds</li>
              <li>dsfds</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
