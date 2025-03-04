import React from 'react'
import bgImage from "/sale.jpg"
import "./section1.css"

const Section1 = () => {
    const headerBgStyle = {
        backgroundImage:  `url(${bgImage})`, 
    };
  return (
    <div className='section1'>
      <div className="section1-bg" style={headerBgStyle}></div>
      <div className="section1-content">
        <h1>Unwrap Your Style: Fashion Awaits</h1>
        <div className="sectionbtn">
          <button className="btn">Shop Now</button>
      </div>
      </div>
    </div>
  )
}

export default Section1
