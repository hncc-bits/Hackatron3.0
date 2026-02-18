// import React, { useState } from 'react';
// import stars from '../../assets/images/footer/stars.svg';
// import {ChevronDown} from 'lucide-react';

// const faqData = [
//   {
//     question: "How many team members do I need?",
//     answer: "You can participate individually or in teams of 3 to 5 members. If you are participating in the hackathon individually and looking for a team, we will help you in connecting to other individual participants to get you a team.",
//   },
//   {
//     question: "Will the hackathon be in person or online?",
//     answer: "The Hackatron 3.0 hackathon will be conducted in complete offline/in person mode.",
//   },
//   {
//     question: "How much are the participation fees?",
//     answer: "Participation is absolutely free inclusive of resources.",
//   },
//   {
//     question: "What are the prerequisites to participate in this hackathon?",
//     answer: "No prerequisites are required to participate in this hackathon. This event is open to participants of all skill levels.",
//   },
//   {
//     question: "How do I register?",
//     answer: (
//       <span>
//         Register your team @
//         <a target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500" href="add link..">Devfolio</a>
//       </span>
//     ),
//   },
//   {
//     question: "What is the venue for Hackatron 3.0?",
//     answer: "BIT Sindri",
//   },
//   {
//     question: "Is the food and accommodation provided free of charge or are there any associated costs?",
//     answer: "We've got you covered when it comes to food, water, and coffee they're on us. However, any additional snacks can be purchased separately. As for accommodation, we will provide arrangements similar to those found in other hackathons, which typically involve a set of mattresses in a common hall.",
//   },
//   {
//     question: "Can my friend join our team after we have already submitted the application for review?",
//     answer: (
//       <span>
//         Yes, your friend can join the team by submitting an individual application. Once both your friend's individual application and your team's application are accepted, you will be able to add your friend to the team. For more information, please refer to devfolio's guide:
//         <a target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500" href="https://guide.devfolio.co/hackers/faqs#after-submitting-the-team-for-review">How To Add Team Members</a>
//       </span>
//     ),
//   },
// ];




// // export default Faq;
// export default function Faq() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };


// return(
//   <section className="bg-[#040842] py-16 px-4 text-white font-['VT323']">

//   <h2 className="text-center text-4xl text-purple-400 mb-12 tracking-wider text-[80px]">
//     FREQUENTLY ASKED QUESTIONS
//   </h2>

//   <div className="max-w-6xl mx-auto">

//     {/* 🔥 Always 2 columns */}
//     <div className="grid grid-cols-2 gap-4 items-start">

//       {faqData.map((item, index) => (
//         <div
//           key={index}
//           onClick={() => toggleFAQ(index)}
//           className={`bg-[#1e293b] 
//           border border-yellow-500 
//           rounded-lg 
//           p-6
//           text-sm
//           cursor-pointer
//           transition-all duration-200
//           ${openIndex === index
//             ? "bg-[#040842] text-white"
//             : "hover:bg-[#2a3b5f]"}`}
//         >
//           <div className="flex justify-between items-center">
//             <h3 className="text-base leading-tight">
//               {item.question}
//             </h3>
//             <span className="ml-2">⌄</span>
//           </div>

//           {openIndex === index && (
//             <p className="mt-3 text-sm text-gray-200">
//               {item.answer}
//             </p>
//           )}
//         </div>
//       ))}

//     </div>

//   </div>
// </section>
// )
// }
// import React, { useState } from 'react';
// import stars from '../../assets/images/footer/stars.svg';
//  import {ChevronDown} from 'lucide-react';

// const FaqItem = ({ question, answer, isOpen, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`bg-[#1e293b] 
//       border border-yellow-500 
//       rounded-lg 
//       p-8
//       cursor-pointer
//       transition-all duration-300
//       ${isOpen ? "bg-[#040842]" : "hover:bg-[#2a3b5f]"}`}
//     >
//       <div className="flex justify-between items-center">
//         <h3 className="text-xl">{question}</h3>
//         <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
//           ⌄
//         </span>
//       </div>

//       {isOpen && (
//         <div className="mt-4 text-lg text-gray-200">
//           {answer}
//         </div>
//       )}
//     </div>
//   );
// };
// export default function Faq() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (index) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <section className="relative z-[999]bg-[#040842] py-16 px-6 text-white">
      
//       <h2 className="text-center text-purple-400 mb-12 text-[70px]">
//         FREQUENTLY ASKED QUESTIONS
//       </h2>

//       <div className="max-w-7xl mx-auto flex gap-8 ">

//         {/* LEFT COLUMN */}
//         <div className="flex flex-col gap-6 flex-1 ">
//           <FaqItem
//             question="How many team members do I need?"
//             answer="You can participate individually or in teams of 3 to 5 members. 
//             If you are participating in the hackathon individually and looking for a team, we will help you in connecting to other individual participants to get you a team."
//             isOpen={openIndex === 0}
//             onClick={() => toggle(0)}
//           />

//           <FaqItem
//             question="How much are the participation fees?"
//             answer="Participation is absolutely free."
//             isOpen={openIndex === 1}
//             onClick={() => toggle(1)}
//           />

//           <FaqItem
//             question="How do I register?"
//             answer="Register through Devfolio."
//             isOpen={openIndex === 2}
//             onClick={() => toggle(2)}
//           />

//           <FaqItem
//             question="Is food and accommodation free?"
//             answer="Yes, food and basic accommodation is provided."
//             isOpen={openIndex === 3}
//             onClick={() => toggle(3)}
//           />
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="flex flex-col gap-6 flex-1 ">
//           <FaqItem
//             question="Will the hackathon be online or offline?"
//             answer="It will be completely offline."
//             isOpen={openIndex === 4}
//             onClick={() => toggle(4)}
//           />

//           <FaqItem
//             question="What are the prerequisites?"
//             answer="No prerequisites required."
//             isOpen={openIndex === 5}
//             onClick={() => toggle(5)}
//           />

//           <FaqItem
//             question="What is the venue?"
//             answer="BIT Sindri."
//             isOpen={openIndex === 6}
//             onClick={() => toggle(6)}
//           />

//           <FaqItem
//             question="Can my friend join later?"
//             answer="Yes, after individual application approval."
//             isOpen={openIndex === 7}
//             onClick={() => toggle(7)}
//           />
//         </div>

//       </div>
//     </section>
//   );
// }

import React, { useState,useEffect } from 'react';
import stars from '../../assets/images/footer/stars.svg';
import { Play } from 'lucide-react';

const FaqItem = ({ question, answer, isOpen, onClick,className="" }) => {
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
    <div
      onClick={onClick}
      className={`w-full
      bg-[#1e293b] 
      border border-[#00FF00]
      p-6
      rounded-lg
      cursor-pointer
      {/*transition-all duration-300*/}
      transition-colors duration-100
      bg-blue-500/10
      backdrop-blur-md
       hover:bg-blue-500/20
      ${className}
      ${isOpen 
        ? "bg-transparent border border-[#00FF00]-500 "
        : "bg-transparent hover:bg-"
}      `}
    >
      <div className="flex justify-between items-center gap-4">
        
        {/* ✅ Increased text size but controlled width */}
        <h3 className="text-2xl text-white-400 leading-tight break-words">
          {question}
        </h3>

        <Play 
          strokeWidth={3.5}
          className={`transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-90 text-[#00FF00]" : "text-[#00FF00]"
          }`}
        />
      </div>

      {isOpen && (
        <div className="mt-4 text-lg leading-relaxed break-words">
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
    <section id="faq" className="relative z-[1] py-16 px-6 text-white scroll-mt-[120px]">
      
      <h2 className="text-center text-[#00FF00] mb-12 text-4xl md:text-6xl">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      {/* ✅ Mobile = column | Desktop = 2 columns */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 w-full md:flex-1">
          <FaqItem
            question="How many team members do I need?"
            answer="You can participate individually or in teams of 3 to 5 members. If you are participating individually and looking for a team, we will help you connect with others."
            isOpen={openIndex === 0}
            onClick={() => toggle(0)}
          />

          <FaqItem
            question="How much are the participation fees?"
            answer="Participation is absolutely free."
            isOpen={openIndex === 1}
            onClick={() => toggle(1)}
          />

          <FaqItem
            question="How do I register?"
            answer={(
               <span>
               Register your team @
               <a target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500" href="add link..">Devfolio</a>
               </span>
        )}
            isOpen={openIndex === 2}
            onClick={() => toggle(2)}
          />

          <div >
          <FaqItem
            question="Is food and accommodation free?"
            answer="We've got you covered when it comes to food, water, and coffee they're on us.
             However, any additional snacks can be purchased separately. As for accommodation, we will provide arrangements similar to those found in other hackathons, which typically involve a set of mattresses in a common hall."  
            isOpen={openIndex === 3}
            onClick={() => toggle(3)}
          />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6 w-full md:flex-1">
          <FaqItem
            question="Will the hackathon be online or offline?"
            answer="It will be completely offline."
            isOpen={openIndex === 4}
            onClick={() => toggle(4)}
          />

          <FaqItem
            question="What are the prerequisites?"
            answer="No prerequisites are required to participate in this hackathon.
                    This event is open to participants of all skill levels."
//   },"
            isOpen={openIndex === 5}
            onClick={() => toggle(5)}
          />

          <FaqItem
            question="What is the venue?"
            answer="BIT Sindri."
            isOpen={openIndex === 6}
            onClick={() => toggle(6)}
          />


          <FaqItem
            question="Can my friend join our team after we have already submitted the application for review?"
            answer={(
              <span>
                Yes, your friend can join the team by submitting an individual application. Once both your friend's individual application and your team's application are accepted, you will be able to add your friend to the team. For more information, please refer to devfolio's guide: &nbsp;
                <a target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300" href="https://guide.devfolio.co/hackers/faqs#after-submitting-the-team-for-review">How To Add Team Members</a>
              </span>
            )}
            isOpen={openIndex === 7}
            onClick={() => toggle(7)}
            className='py-2.5'
          />
        </div>

      </div>
    </section>
  );
}
