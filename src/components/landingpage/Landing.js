
import React from 'react'
import './landing.css';
import bgimg from '../../assets/images/bgimg.png'
import bg from '../../assets/images/bg.mp4'
const  Landing = () => {
  return (
    <div className='landing-page-container' style={{
      backgroundImage:`url(${bgimg})`
    }}>
     <div className='about'>
      <h1>Genet Teklay</h1>
      <p>I'm Passionated React JS Developer..</p>
     </div>
     <div className='downloadresume'>
      <button className='resume'>Download Resume</button>
     </div>
    </div>
  )
}

export default Landing;
