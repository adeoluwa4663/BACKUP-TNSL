import React from 'react'
import ClickToupload from '../Components/CourseUpload/ClickToupload'
import CourseUpload from '../Components/CourseUpload/CourseUpload'
import SideNav from '../Components/SideNav/SideNav'
import UserNav from '../Components/UserNav/UserNav'

function Desk28() {
  return (
    <div>
        <UserNav/>
        <SideNav/>
        <CourseUpload/>
        <ClickToupload/>
    </div>
  )
}

export default Desk28