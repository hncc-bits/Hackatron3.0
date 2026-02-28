import React, { useState, useEffect } from 'react';
import stars from '../../assets/images/discord/stars.svg';
import './Hackatron2.css';
import Glimpse from "./Glimpse";


const Hackatron2 = () => {
  const [selectedTrack, setSelectedTrack] = useState(1);
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });


  useEffect(() => {

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 60; // Adjust the multiplier for sensitivity
      const y = (e.clientY / innerHeight - 0.5) * 60; // Adjust the multiplier for sensitivity
      setBgPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id='sc0' className="max-[768px]:pt-[30px] pt-[80px] relative mb-10 px-5 bg-no-repeat">
      <Glimpse />
    </section>

  );
};

export default Hackatron2;
