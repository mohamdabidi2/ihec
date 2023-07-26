import React from 'react';
import './FreeVideo.css'; // Make sure to import the CSS file with appropriate path

const FreeVideo = () => {
  return (
    <div className="video-section">
        <h2>Gratuit</h2>
      <video controls>
        <source src="your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>Video Title</h2>
      <p>Description of the video goes here...</p>
       <h2>Video Title</h2>
      <p>Description of the video goes here...</p>
       <h2>Video Title</h2>
      <p>Description of the video goes here...</p>
       <h2>Video Title</h2>
      <p>Description of the video goes here...</p>
    </div>
  );
};

export default FreeVideo;
