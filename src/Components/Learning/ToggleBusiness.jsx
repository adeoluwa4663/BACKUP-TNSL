import React from 'react'
import OrangeButton from '../../assets/Buttons/OrangeButton'
import '../../Styles/Learning.scss'
import Employ from './Employ'
import Jobs from './Jobs'
function ToggleBusiness({ data, content }) {
  return (
    <div className="toggleContainer">
        <div className="learningContent">
          <h4>{content.heading}</h4>
        </div>
        <div className='businessContent'>
            <div className='heading'><h6>Get Personnels with Extensive Experience</h6></div>
            <div className='content'>
                
                <p>GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS. </p>
                <p>GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS. </p>
                <p>GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS. </p>
            </div>
        </div>
        <Jobs/>
        <Employ/>
        <OrangeButton name='Get Started' />

        
    </div>
  )
}

export default ToggleBusiness