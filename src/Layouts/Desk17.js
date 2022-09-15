import React from 'react'
import BottomChat from '../Components/Chat/BottomChat'
import SideNav from '../Components/SideNav/SideNav'
import Overviews from '../Components/UserCategory/Overviews'
import Projects from '../Components/UserCategory/Projects'
import UserCategory from '../Components/UserCategory/UserCategory'
import UserNav from '../Components/UserNav/UserNav'

function Desk17() {
  return (
    <div>
      
        <UserNav/>
         <SideNav/> 
         <UserCategory/>
         <Overviews/>
         <Projects/>
         <BottomChat/>
        
    </div>
  )
}

export default Desk17