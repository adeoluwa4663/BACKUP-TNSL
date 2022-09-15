import React from 'react'
import SideNav from '../Components/SideNav/SideNav'
import UserNav from '../Components/UserNav/UserNav'
import CoursesMenu from '../Components/Courses/CoursesMenu'

function Courses() {
  return (
    <div>
        <UserNav/>
        <SideNav/> 
        <CoursesMenu/>
    </div>
  )
}

export default Courses