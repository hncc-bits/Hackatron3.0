import React, { useState, useEffect } from 'react';
import { infoConfig } from "../../info/info.js";
import stars from "../../assets/images/discord/stars.svg";
import aboutPixel from "/images/AboutUs.png";
import aboutPixel2 from "/images/AboutUs1.png";
import './About.css';
import TerminalEffect from '../TerminalEffect.jsx'

const About = () => {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      setBgPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { about } = infoConfig;

  return (
    <section
      id="about"
      className="pt-[30px] md:pt-[80px] relative px-5 bg-no-repeat bg-cover"
      // style={{
      //   backgroundImage: `url(${stars})`,
      //   backgroundPosition: `${50 + bgPosition.x}% ${50 + bgPosition.y}%`,
      //   backgroundSize: 'cover',
      // }}
    >
      <div className="text-white max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto">

        <TerminalEffect text="$ whoami --ABOUT_US" />

        <div className="flex justify-center">
          <div className="w-full px-4 sm:p-10">
            <div
              className="about-card
                relative
                border-[6px] max-lg:border-4
                border-dashed border-[#7f7cff]
                p-6 md:p-10
                text-center
                transition-all duration-300 hover:shadow-[0_0_45px_rgba(127,124,255,0.45)] hover:-translate-y-1
                animate-borderGlow
                overflow-visible
              "
            >
            
              <img
                src={aboutPixel2}
                alt="pixel decoration"
                className="about-pixel about-pixel--top-left"
              />

              <img
                src={aboutPixel}
                alt="pixel decoration"
                className="about-pixel about-pixel--bottom-right"
              />

              <h2 className="
  text-3xl
  md:text-4xl
  lg:text-5xl
  text-pink-400
  tracking-wide
  mb-6

">
                ABOUT US
              </h2>

              <div className="
  space-y-6
  text-gray-200
  text-lg
  md:text-xl
  lg:text-3xl
  leading-relaxed
">
                {about.map((d) => (
                  <p key={d.id}>{d.data}</p>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

