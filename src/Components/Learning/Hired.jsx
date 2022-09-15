import React from 'react'
import '../../Styles/Learning.scss'
import OrangeButton from '../../assets/Buttons/OrangeButton'
import hire from '../../assets/hire.png'


function Hired() {
  return (
    <div className='hireContainer'>
        <div className="hireImage">
            <img src={hire} alt="hire" />
        </div>
        <div className="hireContent">
            <h6>GET HIRED TODAY</h6>
            <p>GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS. </p>

        </div>
        <OrangeButton name='Get Strarted'/>
    </div>
  )
}

export default Hired