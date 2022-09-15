import React from 'react'
import '../../Styles/Learning.scss'
import job from '../../assets/job.png'

function Jobs() {
  return (
    <div className='jobContainer'>
        <div className="jobContents">
            <h6>
            Find Jobs with TNSL
            </h6>
            <p>
            GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS. 
            </p>
            <p>GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS. </p>
            <p>GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS. </p>
        </div>
        <div className="jobImage">
            <img src={job} alt="job" />

        </div>

    </div>
  )
}

export default Jobs