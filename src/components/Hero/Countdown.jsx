import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate, items }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-6">
      {items.map(item => (
        <div key={item.id} className="countdown-item rounded-lg p-4 text-center">
          <div id={item.id} className="text-3xl font-bold text-white">
            {timeLeft[item.id]}
          </div>
          <div className="text-white/80 text-sm">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;