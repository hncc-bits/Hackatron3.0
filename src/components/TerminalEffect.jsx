import React, { useState, useEffect, useRef } from 'react';

const TerminalEffect = ({ text, speed = 60, delay = 300 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  // Intersection Observer to trigger typing on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStarted(true), delay);
          observer.unobserve(entry.target); // Stop observing once started
        }
      },
      { threshold: 0.5 } // Triggers when 50% of the heading is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  // Typewriter Logic
  useEffect(() => {
    if (!started) return;
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, started, text, speed]);

  const renderStyledText = (raw) => {
    return raw.split(" ").map((word, i) => {
      let color = "text-[#39FF14]"; 
      let extraStyle = "drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"; 

      if (word.startsWith("-")) color = "text-[#FFB000]"; 
      else if (
        word.includes(".") || word.includes("/") || 
        word.includes("~") || word.includes("_") ||
        word === "HACKATRON" || word === "TRACKS"
      ) {
        color = "text-white";
      }
      else if (word === "$") color = "text-[#39FF14] opacity-50";

      return (
        <span key={i} className={`${color} ${extraStyle} mr-3`}>
          {word}
        </span>
      );
    });
  };

  return (
    <div ref={elementRef} className="flex items-center min-h-[4rem]">
      <h1 className="terminal-heading py-6 text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl">
        {renderStyledText(displayedText)}
        {/* Cursor only shows if the observer has triggered the start */}
        {started && <span className="terminal-cursor"></span>}
      </h1>
    </div>
  );
};

export default TerminalEffect;