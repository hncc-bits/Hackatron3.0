// What is Hackatron -> WIHTS
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { infoConfig } from "../../info/info.js";
import stars from "../../assets/images/discord/stars.svg";

const Whits = ()=>{
    const { wihts } = infoConfig;
    const { Hackathon } = infoConfig;

    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
          useEffect(() => {
              const handleMouseMove = (e) => {
                  const { innerWidth, innerHeight } = window;
                  const x = (e.clientX / innerWidth - 0.5) * 10; // Adjust the multiplier for sensitivity
                  const y = (e.clientY / innerHeight - 0.5) * 10; // Adjust the multiplier for sensitivity
                  setBgPosition({ x, y });
              };
      
              window.addEventListener('mousemove', handleMouseMove);
      
              return () => {
                  window.removeEventListener('mousemove', handleMouseMove);
              };
          }, []);


         return (
            <section
              id="about"
              className="pt-[30px] md:pt-[80px] relative px-5 bg-no-repeat bg-cover"
               style={{
                              backgroundImage: `url(${stars})`,
                              backgroundPosition: `${50 + bgPosition.x}% ${50 + bgPosition.y}%`,
                              backgroundSize: 'cover',
                          }}
            >
              <div className="text-white max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto">
        
                
                <h1 className="py-6 text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]">
                  $ mkdir <span className="text-white">HACKATRON</span>
                </h1>
        
               
                <div className="flex justify-center">
                  <div className="w-full px-4 sm:p-10">
        
                    <div className="border-[6px] max-lg:border-4 border-dashed border-[#7f7cff] p-6 md:p-10 backdrop-blur-[2px] text-center">
        
                   
                      <h2 className="text-4xl  text-pink-400 tracking-wide mb-6 text-center">
                        WHAT IS HACKATRON
                      </h2>
        
                      
                      <div className="space-y-6 text-gray-200 text-2xl leading-relaxed">
                        {wihts.map((d) => (
                          <p key={d.id}>
                            {d.data}
                          </p>
                        ))}
                        
                        <p>
            {Hackathon.data}
            <Link target="_blank" to={Hackathon.link}>
              here...
            </Link>
          </p>
                      </div>
                      
        
                    </div>
                  </div>
                </div>
        
              </div>
            </section>
          );
        };

        export default Whits;