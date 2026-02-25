import SwipeableTemporaryDrawer from "./HamburgerMenu";
import bitlogo from '../assets/images/Navbar/bitlogo.png';
import iiit_logo_mobile from '../assets/images/Navbar/hncc.png';
import sc1_logo from '../assets/images/Navbar/Hackatron2.png';
export default function Navbar() {
    const scrollToSchedule = () => {
        const scheduleSection = document.getElementById('schedule');
        if (scheduleSection) {
            scheduleSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToFooter = () => {
        const footerSection = document.getElementById('footer');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToSponsors = () => {
        const footerSection = document.getElementById('sponsors');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToFaq = () => {
        const footerSection = document.getElementById('faq');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToTracks = () => {
        const footerSection = document.getElementById('tracks');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToPrizes = () => {
        const footerSection = document.getElementById('prizes');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="w-full relative" style={{background:"none"}}>
            <nav className="fixed items-center 3xl:px-[250px] px-7 z-30 flex md:justify-between max-[768px]:space-x-5 w-full h-[96px] 3xl:h-[250px] max-[540px]:h-[60px] mt-0 font-vt323 leading-[96px] bg-[#040842]/50 backdrop-blur-md">

                <img className="justify-start w-14 h-14 max-md:w-10 max-md:h-10 3xl:w-[300px] 3xl:h-[300px]" src={sc1_logo} alt="Hackatron Logo"></img>

                <ul className=" justify-center flex 3xl:text-6xl 3xl:space-x-[7rem]  2xl:space-x-[4rem] lg:space-x-[2rem] sm:space-x-[1.2rem] sm:text-[22px] min-[540px]:space-x-[1.6rem] min-[540px]:text-[22px] md:text-[22px] md:space-x-5 lg:text-[1.6rem] xl:text-[2rem] text-white items-center max-[768px]:hidden ">
                    <a onClick={scrollToSchedule} ><li className="hover:text-[#c3c3c3] cursor-pointer">SCHEDULE</li></a>
                    <a onClick={scrollToPrizes} ><li className="hover:text-[#c3c3c3] cursor-pointer">PRIZES</li></a>
                    <a onClick={scrollToTracks}><li className="hover:text-[#c3c3c3] cursor-pointer">TRACKS</li></a>
                    <a onClick={scrollToSponsors}><li className="hover:text-[#c3c3c3] cursor-pointer">SPONSORS</li></a>
                    <a onClick={scrollToFaq}><li className="hover:text-[#c3c3c3] cursor-pointer">FAQ</li></a>
                    <a onClick={scrollToFooter}><li className="hover:text-[#c3c3c3] cursor-pointer">CONTACT US</li></a>

                </ul>
                <div className="flex gap-2 items-center">
                    <img className="w-12 h-12 max-md:w-8 max-md:h-8" src={bitlogo} alt="" />
                    <p className="text-3xl text-white"> </p>
                    {/* <img className= "justify-end 3xl:w-[400px] md:w-[110px] lg:w-[154px] xl:w-[175px] max-[768px]:hidden" src={iiit_logo}></img> */}
                    <img className="w-14 h-14 max-md:w-10 max-md:h-10" src={iiit_logo_mobile}></img>
                </div>

            </nav>
            <div className=" absolute right-0 max-[540px]:mt-[22px] mt-[39px] w-[50px]">
                <SwipeableTemporaryDrawer />
            </div>
        </section>
    )
}
