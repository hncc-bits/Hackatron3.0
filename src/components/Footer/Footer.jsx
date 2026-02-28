import React, { useState, useEffect } from 'react';
import instaLogo from '../../assets/images/footer/insta_logo.png';
import twitterLogo from '../../assets/images/footer/twitter.svg';
import linkedinLogo from '../../assets/images/footer/linkedin_logo.png';
import discordLogo from '../../assets/images/footer/discord_logo.png';
import stars from '../../assets/images/footer/stars.svg';
import './Footer.css';
import footer from '../../assets/images/footer/footerNew.png';
import FallingLeaves from '../FallingLeaves';

function Footer() {
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 3; // Adjust the multiplier for sensitivity
            const y = (e.clientY / innerHeight - 0.5) * 3; // Adjust the multiplier for sensitivity
            setBgPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className='main-footer'>
                <div className='footer-container relative overflow-hidden'>
                    {/* Background Image */}
                    <img src={footer} alt="footer background" className='img-background relative z-0' />

                    {/* Falling Leaves Overlay - Above background, behind content */}
                    <div className="absolute inset-0 z-[5] pointer-events-none">
                        <FallingLeaves count={30} />
                    </div>

                    {/* Footer Details (Overlay) */}
                    <div id="upfooter" className='absolute top-0 left-0 w-full h-full z-10 flex flex-col'>
                        <div className="flex flex-col py-5 xl:py-10 gap-5 justify-center items-center w-full">
                            <div className="absolute inset-0 z-0"
                            //  style={{
                            //     backgroundImage: `url(${stars})`,
                            //     backgroundPosition: `${50 + bgPosition.x}% ${50 + bgPosition.y}%`,
                            //     backgroundSize: 'cover',
                            // }}
                            ></div>
                            <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-start w-full gap-5 z-10 px-4 md:px-10 mt-4 md:mt-8">
                                <div className="address footerelements text-center">
                                    <h1 className="footerheading text-2xl md:text-3xl lg:text-4xl 3xl:text-6xl md:mt-0 m-0 text-heading-footer drop-shadow-md">
                                        ADDRESS
                                    </h1>
                                    <p className="footercontent text-lg md:text-xl lg:text-2xl 3xl:text-4xl addresscontent text-[#BEBEBE] hover:text-white mt-2 md:mt-4 drop-shadow-md">
                                        <a href="https://www.google.com/maps/place/BIT+Sindri/@23.6546341,86.4688101,1020m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f696e95958a6d5:0x7c14e668e6f2feea!8m2!3d23.6546293!4d86.473681!16s%2Fm%2F0267xn8?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                                            <span className="text-style-footer">A-26, Admin Building <br /></span>
                                            <span className="text-style-footer">BIT Sindri</span>
                                        </a>
                                    </p>
                                </div>
                                <div className="resources footerelements text-center">
                                    <h1 className="footerheading text-2xl md:text-3xl lg:text-4xl 3xl:text-6xl m-0 text-heading-footer drop-shadow-md">RESOURCES</h1>
                                    <div className="flex flex-col mt-2 md:mt-4 gap-2">
                                        <a href="add link here" className="footercontent text-lg md:text-xl lg:text-2xl 3xl:text-4xl resourcecontent text-[#BEBEBE] hover:text-white drop-shadow-md" target="_blank" rel="noopener noreferrer">
                                            Sponsorship Brochure
                                        </a>
                                        {/* <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" className="footercontent text-xl md:text-2xl resourcecontent cursor-pointer text-[#BEBEBE] hover:text-white" target="_blank" rel="noopener noreferrer text-style-footer">
                                            Code Of Conduct
                                        </a>
                                        <a href="" className="footercontent text-xl md:text-2xl resourcecontent text-[#BEBEBE] hover:text-white" target="_blank" rel="noopener noreferrer text-style-footer">
                                            Community Partners
                                        </a> */}
                                        <a href="add rule book link here" className="footercontent text-lg md:text-xl lg:text-2xl 3xl:text-4xl resourcecontent text-[#BEBEBE] hover:text-white drop-shadow-md" target="_blank" rel="noopener noreferrer">
                                            Hacker Guide
                                        </a>
                                    </div>
                                </div>
                                <div className="social text-center">
                                    <h1 className="footerheading footerelements text-center text-2xl md:text-3xl lg:text-4xl 3xl:text-6xl m-0 mb-2 md:mb-4 text-heading-footer drop-shadow-md">
                                        STAY CONNECTED
                                    </h1>
                                    <div className="flex justify-center gap-7 md:gap-8 mt-2 md:mt-4">
                                        <a href="https://www.instagram.com/hnccbits?igsh=MXE5ZXcxOGFwMGplbA==" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                            <img className="sociallogos insta_logo brightness-0 invert-[1] hover:filter-none w-auto h-auto max-w-[25px] md:max-w-[30px] 3xl:max-w-[60px]" src={instaLogo} alt="insta_logo" />
                                        </a>
                                        <a href="https://x.com/hnccbits" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                            <img className="twitter_logo sociallogos brightness-0 invert-[1] hover:invert-[0.5] w-auto h-auto max-w-[25px] md:max-w-[30px] 3xl:max-w-[60px]" src={twitterLogo} alt="twitter_logo" />
                                        </a>
                                        <a href="https://www.linkedin.com/company/hnccbits/" target="_blank" rel="noopener noreferrer" className="relative hover:scale-110 transition-transform flex items-center justify-center">
                                            <img className="sociallogos linkedin_logo w-auto h-auto max-w-[25px] md:max-w-[30px] 3xl:max-w-[60px] peer z-10 brightness-0 invert-[1] hover:filter-none" src={linkedinLogo} alt="linkedin_logo" />
                                            <div className="w-[70%] h-[75%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 peer-hover:bg-white z-0"></div>
                                        </a>
                                        {/*<a href="add discord link here" target="_blank" rel="noopener noreferrer">
                                            <img className="sociallogos discord_logo brightness-0 invert-[1] hover:filter-none w-auto h-auto max-w-[30px] 3xl:max-w-[60px]" src={discordLogo} alt="discord_logo" />
                                        </a>*/}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Copyright Text Placed Inside flex container but fixed to bottom*/}
                        <div className="absolute bottom-0 left-0 w-full pb-2 md:pb-4 pointer-events-none text-center">
                            <h1 className="relative z-10 m-0 text-lg md:text-xl xl:text-2xl 3xl:text-4xl text-bottom-footer drop-shadow-md text-white">© 2026 HnCC, BIT Sindri</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
