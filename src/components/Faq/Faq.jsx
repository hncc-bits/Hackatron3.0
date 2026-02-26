
 import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";

const FaqItem = ({ question, answer, isOpen, onClick, className = "" }) => {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;
      setBgPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      onClick={onClick}
      className={`w-full
        border-2 border-dashed border-[#16a34a]
        p-4
        cursor-pointer
        transition-all duration-300
        //backdrop-blur-md
        ${
          isOpen
            ? "bg-transparent shadow-[0_0_20px_rgba(0,255,0,0.4)]"
            : "bg-[#1e293b] hover:bg-[#243447]"
        }
        ${className}
      `}
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className="sm:text-1xl md:text-2xl text-white leading-tight break-words">
          {question}
        </h3>

        {<Play
          strokeWidth={3.5}
          className={`transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-90 text-[#00FF00]" : "text-[#00FF00]"
          }`}
        /> }
        
      </div>

      {isOpen && (
        <div className="mt-4 sm:text-1xl text-gray-300 md:text-2xl leading-relaxed break-words">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative z-[1] py-16 px-6 text-white scroll-mt-[120px]"
    >
       <div className="max-w-7xl mx-auto px-6 md:px-10">
      <h2 className=" text-left  text-white mb-12 text-3xl md:text-left md:text-5xl sm:text-3xl ">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      {/* Mobile = column | Desktop = 2 columns */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 w-full md:flex-1 ">
          <FaqItem
            question="How do I register?"
            answer={
              <span>
                Register your team at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                  href="#"
                >
                  Devfolio
                </a>
              </span>
            }
            isOpen={openIndex === 0}
            onClick={() => toggle(0)}
            className="pb-1.5 pt-1.5 md:pb-3 md:pt-3"
          />
          

          <FaqItem
            question="How much are the participation fees?"
            answer="Participation is absolutely free."
            isOpen={openIndex === 1}
            onClick={() => toggle(1)}
            className="pb-1.5 pt-1.5 md:pb-3 md:pt-3"
          />
          
          <FaqItem
            question="Can I participate alone or in need a team?"
            answer="No, You cannot participate alone. Your team must comprise of 4 to 5 members including at least one female member."
            isOpen={openIndex === 2}
            onClick={() => toggle(2)}
            className="pb-1.5 pt-1.5 md:pb-3 md:pt-3"
          />
          

          <FaqItem
            question="What is the duration of Hackathon?"
            answer="The Hackathon will last for 36 hours."
            isOpen={openIndex === 3}
            onClick={() => toggle(3)}
            className="pb-1.5 pt-1.5 md:pb-3 md:pt-3"
          />

          <FaqItem
            question="Is food and accommodation free?"
            answer="Yes, food and accommodation is completely free."
            isOpen={openIndex === 4}
            onClick={() => toggle(4)}
            className="pb-1.5 pt-1.5 md:pb-4 md:pt-4"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6 w-full md:flex-1 ">
          <FaqItem
            question="Will the hackathon be online or offline?"
            answer="It will be completely offline."
            isOpen={openIndex === 5}
            onClick={() => toggle(5)}
            className="pb-1.5 pt-1.5 md:pb-3 md:pt-3"
            
          />

          <FaqItem
            question="Who can participate in HACKATRON?"
            answer="Any engineering student from any college can participate."
            isOpen={openIndex === 6}
            onClick={() => toggle(6)}
            className="pb-1.5 pt-1.5 md:pb-3 md:pt-3"
            
          />

          <FaqItem
            question="What is the venue?"
            answer="BIT Sindri, Dhanbad."
            isOpen={openIndex === 7}
            onClick={() => toggle(7)}
            className="pb-1.5 pt-1.5 md:pb-3 md:pt-3"
          />

          <FaqItem
            question="Can my friend join after submission?"
            answer="Yes, your friend can submit an individual application and join once both are approved."
            isOpen={openIndex === 8}
            onClick={() => toggle(8)}
            className="pb-1.5 pt-1.5 md:pb-3 md:pt-3"
          />

          <FaqItem
            question="What are the benefits that participants will get by attending Hackathon?"
            answer="Participants will get swags, certificates, and exciting prizes."
            isOpen={openIndex === 9}
            onClick={() => toggle(9)}
            className="pb-1.5 pt-1.5 md:pb-0 md:pt-0"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
