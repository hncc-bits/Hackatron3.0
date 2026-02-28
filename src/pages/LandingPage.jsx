import React, { useState, useEffect } from "react";
import BgLandingPage from "/images/bg.png";
import head from "/images/head.png";
import HomeMascot1 from "/images/HomeMascot.gif";
import DevfolioBtn from "/images/DevfolioBtn.svg";
import DevfolioLogo from "../assets/images/LandingPage/DevfolioLogo.svg";
import TimerSection from "./TimerSection";
import Schedule from "../components/Schedule/Schedule";
import ScrollButton from "../assets/images/LandingPage/ScrollButton.svg";
import './LandingPage.css';


function LandingPage() {
  const [bgSize, setBgSize] = useState("10%");
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 3840) {

        setBgSize("16%");
      } else if (width >= 2560) {
        // Adjustments for 1440p resolution
        setBgSize("18%");
      } else if (width >= 1248) {
        setBgSize("16%");
      } else if (width >= 1024) {
        setBgSize("18%");
      } else if (width >= 750) {
        setBgSize("22%");
      } else if (width >= 768) {
        setBgSize("15%");
      } else if (width >= 640) {
        setBgSize("25%");
      } else {
        setBgSize("40%");
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

  const scrollToTimer = () => {
    const scheduleSection = document.getElementById("timer");
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className=" h-full 3xl:h-[4000px] w-full flex flex-col text-center bg-no-repeat   m-0"
        style={{
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BgLandingPage})`,
          backgroundPosition: `${50 + bgPosition.x}% ${20 + bgPosition.y}%`,
          backgroundSize: "cover",
          zIndex: "2"
        }}
      >
        {/* Hero section */}
        <section
          id="hero"
          className=" ml-5 mr-5 max-[540px]:mt-[60px] mt-[110px]  3xl:mt-[250px] "
        >
          <div className="">
            {/*<h1
              className="text-white min-[320px]:text-5xl md:text-7xl xl:text-8xl  3xl:text-[12vh] font-vt323 max-sm:mt-10"
              style={{ textShadow: "2px 2px 0 rgb(236, 83, 176, 1)" }}
            >
              HACKATRON <span className="text-red">3.0</span>
            </h1>*/}
            <div className='head-container'>
              <img src={head} alt="" className='imgHead-background' />
            </div>
            <h3 className="font-vt323 min-[320px]:text-[20px] md:text-3xl xl:text-[40px] 3xl:m-11 2xl:p-10 2xl:text-[4vh] text-[#F0C36D] tracking-widest">
              DESIGN. DEVELOP. DEPLOY.
            </h3>
          </div>
          <div className="flex text-center justify-center mt-5 xl:mt-1 ml-5 mr-5 3xl:m-11">
            <div
              className="home-mascot bg-top bg-no-repeat flex items-end flex-col justify-center md:h-[80%] bg-cover"
              style={{
                backgroundImage: `url(${HomeMascot1})`,
                backgroundSize: bgSize,
              }}
            >
              <div className="text-center justify-center gap-2 min-[320px]:mt-[25%] md:mt-0 " >
                {/* <a href=""> */}
                <div className="flex justify-center items-center w-full min-[320px]:mt-[25%] min-[640px]:mt-[10%] min-[750px]:mt-[6%] md:mt-[27%] lg:mt-[22%] xl:mt-[20%] 3xl:mt-[21%]">
                  <button 
                    onClick={() => window.open("add link")}
                    className="flex items-center justify-center gap-3 px-8 py-3 my-4 font-vt323 text-2xl xl:text-4xl 3xl:text-7xl 3xl:gap-8 bg-[#F0C36D] text-black border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none"
                  >
                    <img className="w-8 xl:w-[4vh] 3xl:w-[5vh]" src={DevfolioLogo} alt="Devfolio Logo" />
                    <p className="mt-1">Apply with Devfolio</p>
                  </button>
                </div>
                {/* </a> */}
                <p className="max-[540px]:leading-normal md:leading-tight xl:leading-normal md:text-[22px] xl:text-[24px] 2xl:text-[3vh] 3xl:pl-[17vh] 3xl:pr-[17vh] 3xl:p-11 2xl:p-5 font-vt323 min-[320px]:text-[18px] md:text-2xl m-3 text-[#D8C39A]">
                  Boot up your brilliance at Hackatron 3.0 — a 36-hour code sprint engineered for builders, breakers, and boundary-pushers. Dive into diverse tech tracks, architect bold solutions, and ship real prototypes alongside fellow geeks. Debug limits, deploy innovation, and turn caffeine into commits.
                </p>

                <button className="animate-bounce 3xl:w-[5%]  ">
                  <a onClick={scrollToTimer}>
                    {" "}
                    <img src={ScrollButton} alt="Down" width="80% " />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* Timer section  */}
        <section id="timer" className="max-[768px]:pt-[40px] pt-[60px] mt-2">
          <TimerSection />
        </section>




        {/* Schedule section */}
        <section id="schedule" className="max-[768px]:pt-[10px] pt-[60px] "></section>
        <Schedule />
      </div>
    </>
  );
}

export default LandingPage;
