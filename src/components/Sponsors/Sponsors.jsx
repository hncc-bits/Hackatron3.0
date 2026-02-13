import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import stars from '../../assets/images/footer/stars.svg';
import beeceptorLogo from '../../assets/images/sponsors/beeceptor.svg';
import wolframLogo from '../../assets/images/sponsors/wolfram.png';
import rosenfeldLogo from '../../assets/images/sponsors/rosenfeld.png';
import oxDayLogo from '../../assets/images/sponsors/0xday.png';
import polygonLogo from '../../assets/images/sponsors/polygon.png';
import axureLogo from '../../assets/images/sponsors/axure.png';
import interviewCakeLogo from '../../assets/images/sponsors/interviewcake.png';
import interviewBuddyLogo from '../../assets/images/sponsors/interviewbuddy.png';
import aopsLogo from '../../assets/images/sponsors/aops.png';
import certificateLogo from '../../assets/images/sponsors/givemycertificate.png';
import avalancheLogo from '../../assets/images/sponsors/avalanche.png';
import devfolioLogo from '../../assets/images/sponsors/devfolio.png';
import githubLogo from '../../assets/images/sponsors/github.png';
import echo3DLogo from '../../assets/images/sponsors/echo3D.png';
import gianLogo from '../../assets/images/sponsors/gian.svg';
import riseLogo from '../../assets/images/sponsors/rise.png';
import quillLogo from '../../assets/images/sponsors/quill.webp';
import ethIndiaLogo from '../../assets/images/sponsors/ethIndia.png';
import blockFlowLogo from '../../assets/images/sponsors/blockflow.png';
import edugraphLogo from '../../assets/images/sponsors/edugraph.png';
import texosLogo from '../../assets/images/sponsors/texos.png';
import routerLogo from '../../assets/images/sponsors/router.svg';

const Sponsors = () => {
    const [bgSize, setBgSize] = useState("110%");
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setBgSize("300%");
            }
            else {
                setBgSize("110%");
            }
        };

        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 10; // Adjust the multiplier for sensitivity
            const y = (e.clientY / innerHeight - 0.5) * 10; // Adjust the multiplier for sensitivity
            setBgPosition({ x, y });
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section className="max-[768px]:pt-[40px] pt-[80px] relative" style={{
            backgroundImage: `url(${stars})`,
            backgroundPosition: `${50}% ${50 - bgPosition.y}%`,
            backgroundSize: bgSize,
        }} id='sponsors'>
            <div className="max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto">
                <h1 className='mx-5 xl:mx-0 py-6 md:text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]'>$ tar -xvzf <span className='text-white'>SPONSORS</span>.tar.gz</h1>

                <div className='mb-4 flex flex-col gap-1 sm:gap-1'>
                    {/* <h1 className="font-vt323 font-medium text-[12vw] leading-[12vw] sm:leading-[4rem] md:leading-[5rem] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] xl:leading-[6rem] 3xl:leading-[8rem]" style={{ background: 'linear-gradient(to right, blue,blue,#dd50b3,#dd50b3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SPONSORS</h1> */}
                    <p className='font-vt323 text-gray-400 w-[90vw] leading-[5vw] text-[4.5vw] sm:leading-0 sm:px-0  sm:w-[70vw] sm:text-lg sm:leading-5 md:text-[2.8vw] md:leading-6 md:w-[75vw] lg:text-xl lg:w-[56vw] lg:leading-5 xl:text-3xl xl:w-[55rem] 3xl:text-5xl 3xl:w-[75rem] text-center mx-auto'>Thank you to our generous sponsors for contributing to the prize pool and making this awesome event a reality!</p>
                </div>

                {/* <div className='pt-1 pb-4 sm:pt-4 sm:pb-10 w-[80vw] sm:w-[75vw] mx-auto border-dashed border-cyan-500 border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-4'>
                    <h1 className='font-vt323 font-medium text-cyan-500 text-[7vw] leading-[1.5rem] sm:text-[5vw] sm:leading-[6rem] '>DIAMOND</h1>
                    <div className='flex items-center justify-center gap-5 sm:gap-20'>
                        <img src={mlhLogo} alt="mlh" className='w-[18vw] h-[7vw] sm:w-[12vw] sm:h-[5vw]' />
                        <img src={postmanLogo} alt="postman" className='w-[7vw] h-[7vw] sm:w-[5vw] sm:h-[5vw]' />
                        <img src={awsLogo} alt="aws" className='w-[12vw] sm:w-[8vw] sm:h-[5vw]' />
                    </div>
                </div> */}

                {/* TITLE SPONSOR */}
                <div className='pt-3 pb-4 md:pt-4 sm:pb-10 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto border-dashed border-[#e29b29] border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-5 lg:gap-6'>
                    <h1 className='font-vt323 font-medium text-[#e29b29] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>TITLE SPONSOR</h1>
                    <div className='flex flex-wrap max-sm:flex-col items-center justify-center gap-5 sm:gap-20 max-sm:mb-0'>
                        <Link to='https://www.avax.network/'><img src={avalancheLogo} alt="devfolio" width={1000} height={1000} className='w-[50vw] sm:w-[30vw] 3xl:w-[20rem] 3xl:h-[4rem]' /></Link>
                    </div>
                </div>

                {/* DIAMOND SPONSOR */}
                <div className='pt-3 pb-4 md:pt-4 sm:pb-10 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto border-dashed border-[#5FA6FF] border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-5 lg:gap-6'>
                    <h1 className='font-vt323 font-medium text-[#5FA6FF] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>DIAMOND</h1>
                    <div className='flex flex-wrap max-sm:flex-col items-center justify-center gap-5 sm:gap-15 max-sm:mb-0'>
                        {/* <Link to='https://www.avax.network/'><img src={avalancheLogo} alt="devfolio" width={1000} height={1000} className='w-[50vw] sm:w-[30vw] 3xl:w-[20rem] 3xl:h-[4rem]' /></Link> */}
                        <Link to='https://0x.day/'><img src={oxDayLogo} alt="devfolio" width={1000} height={1000} className='w-[40vw] sm:w-[19vw] 3xl:w-[20rem]' /></Link>
                        <Link to='https://github.com/'><img src={githubLogo} alt="devfolio" width={1000} height={1000} className='w-[40vw] sm:w-[19vw] 3xl:w-[20rem]' /></Link>
                        <Link to='https://tezos.com/'><img src={texosLogo} alt="devfolio" width={1000} height={1000} className='w-[40vw] sm:w-[19vw] 3xl:w-[20rem]' /></Link>
                    </div>
                </div>

                {/* PLATINUM */}
                <div className='pt-3 3xl:pt-10 pb-4 md:pt-4 sm:pb-10 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto border-dashed border-[#9d44c0] border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-5 lg:gap-6'>
                    <h1 className='font-vt323 font-medium text-[#9d44c0] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>PLATINUM</h1>
                    <div className='flex flex-wrap max-sm:flex-col items-center justify-center gap-5 sm:gap-20 max-sm:mb-4'>
                        {/* <img src={VectorLogo} alt="vector" className='w-[25vw] h-[5vw] sm:w-[20vw] sm:h-[4vw]' /> */}
                        <Link to='https://devfolio.co/'><img src={devfolioLogo} alt="devfolio" width={1000} height={1000} className='w-[40vw] sm:w-[20vw] 3xl:w-[20rem] 3xl:h-[4rem]' /></Link>
                        <Link to='https://gian.org/'><img src={gianLogo} alt="devfolio" width={1000} height={1000} className='w-[20vw] sm:w-[10vw] sm:-translate-y-2 3xl:w-[20rem]' /></Link>
                        <Link to='https://www.blockflow.network/'><img src={blockFlowLogo} alt="devfolio" width={1000} height={1000} className='w-[40vw] sm:w-[20vw] 3xl:w-[20rem] 3xl:h-[4rem]' /></Link>
                    </div>
                </div>

                {/* GOLD */}
                <div className='pt-3 3xl:pt-10 pb-4 border-dashed border-[#e29b29] border-b-[0.1rem] sm:border-b-[0.5rem] md:pt-4 sm:pb-10 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto flex flex-col items-center justify-center gap-5 lg:gap-6'>
                    <h1 className='font-vt323 font-medium text-[#e29b29] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>GOLD</h1>
                    <div className='flex flex-wrap max-sm:flex-col items-center  justify-center gap-4 sm:gap-y-12 sm:gap-x-32 px-12 max-sm:gap-y-8 max-sm:mb-4'>
                        {/* <img src={falconLogo} alt="falcon" className='w-[28vw] h-[8vw] sm:w-[18vw] sm:h-[5vw]' />
                        <img src={solanLogo} alt="solan" className='w-[28vw] h-[5vw] sm:w-[22vw] sm:h-[4vw]' />
                        <img src={auth0Logo} alt="auth0" className='w-[16vw] h-[7vw] sm:w-[12vw] sm:h-[5vw]' />
                        <img src={replitLogo} alt="replit" className='w-[18vw] h-[5vw] sm:w-[14vw] sm:h-[3vw]' />
                        <img src={devfolioLogo} alt="devfolio" className='w-[27vw] h-[6vw] sm:w-[22vw] sm:h-[4vw]' />
                         */}
                        <Link to='https://polygon.technology/'><img src={polygonLogo} alt="polygon" width={1000} height={1000} className='w-[40vw]  sm:w-[20vw] 3xl:w-[20rem] ' /></Link>
                        <Link to='https://ethindia.co/'><img src={ethIndiaLogo} alt="ethIndia" width={1000} height={1000} className='w-[40vw] sm:w-[20vw] 3xl:w-[20rem]' /></Link>
                        <Link to='https://www.wolfram.com/'><img src={wolframLogo} alt="wolframLogo" width={1000} height={1000} className='w-[40vw] sm:w-[20vw] 3xl:w-[20rem]' /></Link>
                        <Link to='https://beeceptor.com/?utm_source=hackathon&utm_medium=email&utm_campaign=iiitkalyani'><img src={beeceptorLogo} alt="beeceptorLogo" width={1000} height={1000} className='w-[40vw] sm:w-[20vw] 3xl:w-[20rem]' /></Link>
                        <Link to='https://www.routerprotocol.com/'><img src={routerLogo} alt="beeceptorLogo" width={1000} height={1000} className='w-[25vw] sm:w-[15vw] 3xl:w-[20rem]' /></Link>
                    </div>
                </div>

                {/* SILVER */}
                <div className='pt-3 3xl:pt-10 pb-4 border-dashed border-[#9e9e9e] border-b-[0.1rem] sm:border-b-[0.5rem] md:pt-4 sm:pb-10 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto flex flex-col items-center justify-center gap-5 lg:gap-6'>
                    <h1 className='font-vt323 font-medium text-[#9e9e9e] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>SILVER</h1>
                    <div className='flex flex-wrap max-sm:flex-col items-center justify-center gap-6 sm:gap-16 md:px-12 2xl:px-24 max-sm:gap-y-8'>
                        {/* <img src={githubLogo} alt="github" className='w-[16vw] h-[6vw] sm:w-[12vw] sm:h-[5vw]' />
                        <img src={jinaLogo} alt="jina" className='w-[16vw] h-[7vw] sm:w-[12vw] sm:h-[5vw]' /> */}
                        <Link to='https://rosenfeldmedia.com/'><img src={rosenfeldLogo} alt="echo3D" className='w-[35vw] sm:w-[18vw] md:w-[15vw] 3xl:w-[20rem]' /></Link>
                        <Link to='https://www.echo3d.com/'><img src={echo3DLogo} alt="echo3D" className='w-[35vw] sm:w-[18vw] md:w-[15vw] 3xl:w-[20rem]' /></Link>
                        <Link to='https://www.axure.com/'><img src={axureLogo} alt="echo3D" className='w-[30vw] sm:w-[18vw] md:w-[15vw] 3xl:w-[20rem]' /></Link>
                        <Link to='https://artofproblemsolving.com/'><img src={aopsLogo} alt="echo3D" className='w-[35vw] sm:w-[18vw] md:w-[15vw] 3xl:w-[20rem]' /></Link>
                        <Link to='https://www.interviewcake.com/'><img src={interviewCakeLogo} alt="echo3D" className='w-[40vw] sm:w-[18vw] md:w-[15vw] 3xl:w-[20rem]' /></Link>
                        <Link to='https://interviewbuddy.net/'><img src={interviewBuddyLogo} alt="echo3D" className='w-[40vw] sm:w-[18vw] md:w-[15vw] 3xl:w-[20rem]' /></Link>
                    </div>
                </div>

                {/* VENUE PARTNER */}
                <div className='pt-3 3xl:pt-10 pb-4 md:pt-4 sm:pb-10 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto border-dashed border-[#5FA6FF] border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-5 lg:gap-6'>
                    <h1 className='font-vt323 font-medium text-[#5FA6FF] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>VENUE PARTNER</h1>
                    <div className='flex flex-wrap max-sm:flex-col items-center justify-center gap-6 sm:gap-16 md:px-12 2xl:px-24 max-sm:gap-y-8'>
                        {/* <img src={githubLogo} alt="github" className='w-[16vw] h-[6vw] sm:w-[12vw] sm:h-[5vw]' />
                        <img src={jinaLogo} alt="jina" className='w-[16vw] h-[7vw] sm:w-[12vw] sm:h-[5vw]' /> */}
                        <Link to=''><img src={riseLogo} alt="devfolio" width={1000} height={1000} className='w-[30vw] sm:w-[13vw] 3xl:w-[20rem]' /></Link>
                    </div>
                </div>

                {/* PLATFORM PARTNER */}
                <div className='pt-3 3xl:pt-10 pb-4 md:pt-4 sm:pb-10 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto border-dashed border-[#9D44C0] border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-5 lg:gap-6'>
                    <h1 className='font-vt323 font-medium text-[#9D44C0] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>PLATFORM PARTNER</h1>
                    <div className='flex items-center justify-center gap-5 sm:gap-20 max-sm:mb-4'>
                        {/* <Link to='https://www.avax.network/'><img src={avalancheLogo} alt="devfolio" width={1000} height={1000} className='w-[50vw] sm:w-[30vw] 3xl:w-[20rem] 3xl:h-[4rem]' /></Link> */}
                        <Link to='https://0x.day/'><img src={oxDayLogo} alt="devfolio" width={1000} height={1000} className='w-[30vw] sm:w-[15vw] 3xl:w-[20rem]' /></Link>
                    </div>
                </div>

                {/* CERTIFICATE PARTNER */}
                <div className='pt-3 3xl:pt-10 pb-4 md:pt-4 sm:pb-10 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto border-dashed border-[#e29b29] border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-5 lg:gap-6'>
                    <h1 className='font-vt323 font-medium text-[#e29b29] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>CERTIFICATE PARTNER</h1>
                    <div className='flex items-center justify-center gap-5 sm:gap-20 max-sm:mb-4'>
                        {/* <Link to='https://www.avax.network/'><img src={avalancheLogo} alt="devfolio" width={1000} height={1000} className='w-[50vw] sm:w-[30vw] 3xl:w-[20rem] 3xl:h-[4rem]' /></Link> */}
                        <Link to='https://givemycertificate.com/'><img src={certificateLogo} alt="giveMyCertificateLogo" className='w-[40vw] sm:w-[18vw] md:w-[18vw] 3xl:w-[30rem]' /></Link>
                    </div>
                </div>

                {/* SECURITY PARTNER */}
                <div className='pt-3 3xl:pt-10 pb-4 md:pt-4 sm:pb-10 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto border-dashed border-[#9e9e9e] border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-5 lg:gap-6'>
                    <h1 className='font-vt323 font-medium text-[#9e9e9e] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>SECURITY PARTNER</h1>
                    <div className='flex items-center justify-center gap-5 sm:gap-20 max-sm:mb-4'>
                        {/* <Link to='https://www.avax.network/'><img src={avalancheLogo} alt="devfolio" width={1000} height={1000} className='w-[50vw] sm:w-[30vw] 3xl:w-[20rem] 3xl:h-[4rem]' /></Link> */}
                        <Link to='https://www.quillaudits.com/'><img src={quillLogo} alt="giveMyCertificateLogo" className='w-[40vw] sm:w-[18vw] md:w-[18vw] 3xl:w-[30rem]' /></Link>
                    </div>
                </div>

                {/* MEDIA PARTNER */}
                <div className='pt-3 3xl:pt-10 pb-4 md:pt-4 sm:pb-10 w-[80vw] xl:w-[65vw] 2xl:w-full mx-auto flex flex-col items-center justify-center gap-5 lg:gap-6'>
                    <h1 className='font-vt323 font-medium text-[#5FA6FF] text-[9vw] leading-[5vw] sm:leading-[3.5rem] sm:text-[7vw] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[5rem] 3xl:text-[4vw]'>MEDIA PARTNER</h1>
                    <div className='flex items-center justify-center gap-5 sm:gap-20 max-sm:mb-4'>
                        {/* <Link to='https://www.avax.network/'><img src={avalancheLogo} alt="devfolio" width={1000} height={1000} className='w-[50vw] sm:w-[30vw] 3xl:w-[20rem] 3xl:h-[4rem]' /></Link> */}
                        <Link to='https://www.edugraph.in/'><img src={edugraphLogo} alt="giveMyCertificateLogo" className='w-[40vw] sm:w-[18vw] md:w-[18vw] 3xl:w-[30rem]' /></Link>
                    </div>
                </div>
            </div>
            <div
                className="absolute h-screen top-[99%] object-cover opacity-70 inset-0"
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundPosition: `${50}% ${50 + bgPosition.y}%`,
                    backgroundSize: bgSize,
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
        </section>
    )
}

export default Sponsors;
