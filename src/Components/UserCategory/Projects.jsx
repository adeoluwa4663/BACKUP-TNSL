import React from 'react'
import '../../Styles/UserDetails.scss'
import Project from './Project'
import Trending from './Trending'

function Projects() {
  return (
    <div className='projectsContainer'>
        <Project/>
        <Trending/>
    </div>
  )
}

export default Projects