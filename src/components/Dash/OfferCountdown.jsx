import React, { useEffect, useState } from 'react';
import './OfferCountdown.css'

const OfferCountdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  function calculateTimeRemaining() {
    const endDate = new Date('2023-12-31T23:59:59').getTime();
    const now = new Date().getTime();
    return Math.max(0, endDate - now);
  }

  function formatTime(ms) {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <div className="cardTime">
      <h2>Special Offer!</h2>
      <p>Hurry up! The offer ends in:</p>
      <div className="time">
        {timeRemaining === 0 ? 'Offer Expired' : formatTime(timeRemaining)}
      </div>
      <button>Upgrade</button>
    </div>
  );
};

export default OfferCountdown;
