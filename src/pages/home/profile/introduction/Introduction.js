import React, { useState, useEffect } from 'react';
import "./Introduction.css"
import { Tween } from 'react-gsap';

function Introduction() {
  const [scrollDirection, setScrollDirection] = useState('scroll-up');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setScrollDirection('scroll-down');
      } else {
        setScrollDirection('scroll-up');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cursorStyle = {
    cursor: scrollDirection === 'scroll-down' ? 'pointer' : 'auto',
    transition: 'cursor 0.3s ease',
  };

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };
  return (
    <Tween
        to={{
          y:'0',
          scale:1,
          // yPercent:-50,
        }}
        scrollTrigger= {{
          scrub: true,
          trigger:'.title',
          start: '0 100%',
          endTrigger:'.title',
          end:'0 50%',
          refreshPriority: 3,
        }}
      >
        <div className="logo-container" onClick={scrollTop}>
            <svg className="logo" viewBox="0 0 657.49 723.66" style={cursorStyle}>
                <path className="logo-color" d="M316.15,363.38a84.35,84.35,0,0,1-24.59-52.88l158.94,159L492.93,427,270.25,204.34a145,145,0,0,0,3.48,201.47L393.93,526l42.43-42.42Z" transform="translate(-171.26 -138.17)"/>
                <path className="logo-color" d="M726.27,660.36l-120.2-120.2-42.43,42.42L683.85,702.79a84.35,84.35,0,0,1,24.59,52.88L549.5,596.73l-42.43,42.42L729.75,861.83a145,145,0,0,0-3.48-201.47Z" transform="translate(-171.26 -138.17)"/>
                <path className="logo-color" d="M490,283.09a84.36,84.36,0,0,1,20-54.79V410l60-60V138.17A145,145,0,0,0,430,283.09V350l60,60Z" transform="translate(-171.26 -138.17)"/>
                <path className="logo-color" d="M729.81,264.34a144,144,0,0,0-102.53,42.47l-456,456a145,145,0,0,0,201.46-3.48l456-456A144,144,0,0,0,729.81,264.34ZM330.29,716.93a84.36,84.36,0,0,1-52.88,24.6l392.3-392.29a84.36,84.36,0,0,1,52.88-24.6Z" transform="translate(-171.26 -138.17)"/>
            </svg>

            <Tween
                to={{
                opacity: 0,
                display: 'none'
                }}
                scrollTrigger={{
                scrub: true,
                trigger: '.title',
                start: '0 100%',
                endTrigger: '.title',
                end: '0 50%'
                }}
                >
                <div className="logo-text" >
                ⵅⴰⵍⵉⴷ ⴰⵢⵜ ⵎⵃⴰⵎⴻⴷ
                </div>
            </Tween>
        </div>
    </Tween>
  )
}

export default Introduction