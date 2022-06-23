import React from 'react'
import './about.css';
 const About = () => {
  return (
    <div className='about-contianer'>
         <div className='about-me'>
              <h1>Leran More About Me</h1>
           <h2> React JS Developer & UI/UX Desinger</h2>
         <div className='info'>
          <ul>
               <li className='list'>Birthday : <b>23 August 1998</b></li>
               <li className='list'>Phone : <b>+2519-3138-83-56</b></li>
               <li className='list'>City : <b>Addis Ababa, Ethiopia</b></li>
               <li className='list'>Email : <b>heaventek13@gmail.com</b></li>
               <li className='list'>Degree : <b>Bachelor in Software Engineering</b></li>
          </ul>
         </div>
         </div>
         <div className='about-skills'>
            <h1>My Skills</h1>
            <div className='skills'>
               <p className='h-skill'><strong>HTML</strong><strong>100%</strong></p>
               <div style={{
                    position:'relative'
               }}>
               <p className='html-skill'></p>
               <p className='html-skills'></p>
           
               </div>
               <p style={{
                    marginTop:20
               }} className='c-skill'><strong>CSS</strong><strong>90%</strong></p>
               <div style={{
                    position:'relative'
               }}>
               <p className='css-skill'></p>
               <p className='css-skills'></p>
           
               </div>
               <p className='j-skill'
                style={{
                    marginTop:20
                }}
               ><strong>JavaScript</strong><strong>75%</strong></p>
               <div style={{
                    position:'relative'
               }}>
               <p className='js-skill'></p>
               <p className='js-skills'></p>
           
               </div>

               <p className='r-skill'
                style={{
                    marginTop:20
                }}
               ><strong>React Js</strong><strong>90%</strong></p>
               <div style={{
                    position:'relative'
               }}>
               <p className='react-skill'></p>
               <p className='react-skills'></p>
           
               </div>
            </div>
         </div>
        </div>
  )
}

export default About;