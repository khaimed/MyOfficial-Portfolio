import React from 'react'
import "./BackgroundAnimate.css"
import { Tween } from 'react-gsap'

function BackgroundAnimate() {
  function bottom() {
    document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="container">
    <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <div className="field">
      <Tween
        to={{
          opacity: 0,
        }}
        scrollTrigger={{
          scrub: true,
          trigger: '.img-content',
          start: '0 100%',
          endTrigger: '.img-content',
          end: '0 50%'
        }}
        >
        <div className="scroll" onClick={bottom}></div>
      </Tween>
    </div>
</div>
  )
}

export default BackgroundAnimate