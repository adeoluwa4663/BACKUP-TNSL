import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/UserNav.scss'
import logo from '../../assets/TNSL-logo.png'
import Searchicon from '../../assets/icons/Searchicon'
function UserNav() {
  return (
    <div className='userNav'>

    <div className='userNavcontainer'>
        <div className="userNavlogo">
            <img src={logo} alt="" />
        </div>
        <div className="search">
        <input type="search" />
        <div className='searchIcon'>
        <Searchicon/>
        </div>
        </div>
        <div className="links">
            <Link to='/'>TNSL Jobs</Link>
            <Link to='/'>Mentoring Sessions</Link>
            <Link to='/'>My learning</Link>
        </div>
        <div className="user">
            <button className='notification'><img src='icons/Notification.svg' alt=''/></button>
            <button className='profile'><img src='images/profile.png' alt=''/> </button>

        </div>
    </div>
    </div>
  )
}

export default UserNav