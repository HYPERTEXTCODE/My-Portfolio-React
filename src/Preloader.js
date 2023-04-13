import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000); // Set the time (in milliseconds) for the preloader to disappear

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${showPreloader ? 'show' : 'hide'}`}>
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
    </div>
  );
};

export default Preloader;
