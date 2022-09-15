import React from 'react'
import '../../Styles/SideNav.scss'
import {Link} from 'react-router-dom'
function SideNav() {
  return (
    <div className='sideNavcontainer'>
        <div className="sideNavcontent">
        <button className='sideNavbtn'><img src='/icons/Exclude.svg' alt="" /> </button>
            <button className='sideNavbtn'><img src='/icons/Category.svg' alt="" /> </button>
            <Link to="/chat"></Link><button className='sideNavbtn'><img src='/icons/Play.svg' alt="" /> </button>
            <button className='sideNavbtn'><img src='/icons/Chat.svg' alt="" /> </button>
            <button className='sideNavbtn'><img src='/icons/Notification.svg' alt="" /> </button>
            <button className='sideNavbtn'><img src='/icons/Setting.svg' alt="" /> </button>
        </div>
    </div>
  )
}

export default SideNav