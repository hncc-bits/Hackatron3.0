import React, { useState, useEffect } from 'react';
// import './CursorFollower.css';

const CursorFollower = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.pageX, y: e.pageY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName.toLowerCase() === 'a') {
                setIsHoveringLink(true);
            }
        };

        const handleMouseOut = (e) => {
            if (e.target.tagName.toLowerCase() === 'a') {
                setIsHoveringLink(false);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            <img
                src={
                    isHoveringLink
                        ? 'src/assets/images/LandingPage/cursor1.svg'
                        : 'src/assets/images/LandingPage/cursor.svg'
                }
                alt="Custom Cursor"
                className="custom-cursor"
                style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
            />
        </>
    );
};

export default CursorFollower;
