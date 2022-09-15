import React from 'react'
import '../../Styles/Navbar.scss'
import { Link,useLocation } from 'react-router-dom'
import Searchicon from '../../assets/icons/Searchicon'
import Categories from '../Dropdowns/Categories'
import Services from '../Dropdowns/Services'
import logo from '../../assets/TNSL-logo.png'

function Navbar() {
  const location = useLocation();
  const {pathname} = location
  const splitLocation = pathname.split('/')
  return (
    <nav className='navbar'>
      <div className='logo'>
        <a href='/'>
          <img src={logo} alt="TNSL logo" />
        </a>
      </div>
      <div className='links'>
        <div className={splitLocation[1]=== '' ? 'active' : ''}>
        <Link to='/'>HOME</Link>
        </div>

        <div>
        
          <Categories loc = {splitLocation[1]}/>
          
          </div>
        <div>
          
            

          <Services loc = {splitLocation[1]}/>
          
          
          
          </div>
        <div className={splitLocation[1]=== 'contact' ? 'active' : ''}>
          <Link to='/contact'>CONTACT US</Link>
        </div>

        <div className={splitLocation[1]=== 'about' ? 'active' : ''}>
          <Link to='/about'>ABOUT</Link>
        </div>
        
      </div>
      <div className='operations'>
        <div className='navIcon'>
          <Searchicon/>
        </div>
        <Link to='/login'>LOGIN</Link>
      </div>
      {console.log(splitLocation[1])}
    </nav>
  )
}

export default Navbar