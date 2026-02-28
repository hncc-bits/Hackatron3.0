import React, { useMemo, useEffect, useState } from 'react';
import './FallingLeaves.css';
import leaf1 from '../assets/images/leaf1.png';
import leaf2 from '../assets/images/leaf2.png';

const FallingLeaves = ({ count = 20 }) => {
  const [gust, setGust] = useState(0);

  // useEffect(() => {
  //   let timeout;
  //   const handleMouseMove = (e) => {
  //     // Calculate a gust value based on horizontal mouse speed
  //     const intensity = Math.min(Math.abs(e.movementX) * 2, 100);
  //     setGust(e.movementX > 0 ? intensity : -intensity);

  //     // Reset gust after mouse stops
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => setGust(0), 500);
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  const leaves = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      image: Math.random() > 0.5 ? leaf1 : leaf2,
      left: Math.random() * 100,
      delay: Math.random() * -20,
      duration: 30 + Math.random() * 40, // Increased base and random range for slower animation
      size: 12 + Math.random() * 30,
      drift: (Math.random() - 0.5) * 150,
      rotation: Math.random() * 360,
      opacity: 0.5 + Math.random() * 0.4, // Dimmer for background
    }));
  }, [count]);

  return (
    <div className="leaf-container" style={{
      // '--gust': `${gust}px` 
    }}>
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="pixel-leaf"
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            opacity: leaf.opacity,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            backgroundImage: `url(${leaf.image})`,
            '--drift': `${leaf.drift}px`,
            '--rot': `${leaf.rotation}deg`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingLeaves;