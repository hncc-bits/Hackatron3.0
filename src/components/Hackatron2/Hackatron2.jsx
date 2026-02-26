import React, { useState, useEffect } from 'react';
import stars from '../../assets/images/discord/stars.svg';
import './Hackatron2.css';


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
        <section id='sc0' className="max-[768px]:pt-[30px] pt-[80px] relative mb-10 px-5 bg-no-repeat" 
        // style={{
        //     backgroundImage: `url(${stars})`,
        //     backgroundPosition: `${50}% calc(50% - ${bgPosition.y}px)`,
        //     backgroundSize: 'cover',
        // }}
        >
            {/* <img src={stars} className=" z-0 absolute pointer-events-none w-screen sm:opacity-60 opacity-80"></img> */}
            <div className='text-white max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto relative'>
                <h1 className='py-6 md:text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]'>$ man <span className='text-white'>Hackatron<span className='text-red'> 2.0</span></span></h1>
                <div className='grid gallery place-content-center relative'>




                    <div className='sc0-text text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-5xl opacity-80 sm:opacity-70 -translate-y-[4vw] ml-4'>
                        <h2>GLIMPSES OF </h2>
                        <h2 className='text-4xl sm:text-7xl lg:text-8xl 2xl:text-8xl'>Hackatron<span className='text-red'>2.0</span></h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hackatron2;
