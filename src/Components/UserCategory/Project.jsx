import React from 'react'
import '../../Styles/UserDetails.scss'

function Project() {
  return (
    <div className='projectContainer'>
        <div className="projectHeader">
            <h5>Projects</h5>
        </div>
        <div className="projectContent">
          <div className="projectImage">
            <img src='images/amazon.png' alt="" />
          </div>      
        <div className="projectItems">
        <h6>Cowry</h6>
        <p>Design role</p>
        <p>2 months</p>
        <div className="rating">
        <img src='icons/Star.svg' alt="" />
        <img src='icons/Star.svg' alt="" />
          <img src='icons/Star.svg' alt="" />
          <img src='icons/Star.svg' alt="" />
          <img src='icons/Star.svg' alt="" />
        </div>
        </div>
        </div>
        
        <div className="projectContent">
          <div className="projectImage">
            <img src='images/d.png' alt="" />
          </div>      
        <div className="projectItems">
        <h6>Cowry</h6>
        <p>Design role</p>
        <p>2 months</p>
        <div className="rating">
        <img src='icons/Star.svg' alt="" />
        <img src='icons/Star.svg' alt="" />
          <img src='icons/Star.svg' alt="" />
          <img src='icons/Star.svg' alt="" />
          <img src='icons/Star.svg' alt="" />
        </div>
        </div>
        
        </div>

        <div className="projectContent">
          <div className="projectImage">
            <img src='images/microsoft.png' alt="" />
          </div>      
        <div className="projectItems">
        <h6>Cowry</h6>
        <p>Design role</p>
        <p>2 months</p>
        <div className="rating">
        <img src='icons/Star.svg' alt="" />
        <img src='icons/Star.svg' alt="" />
          <img src='icons/Star.svg' alt="" />
          <img src='icons/Star.svg' alt="" />
          <img src='icons/Star.svg' alt="" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Project