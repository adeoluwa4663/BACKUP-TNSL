import React from 'react'
import '../../Styles/TransparentNav.scss'
import { Link,useLocation } from 'react-router-dom'
import Searchicon from '../../assets/icons/Searchicon'
import Categories from '../Dropdowns/Categories'
import Services from '../Dropdowns/Services'
import logo from '../../assets/TNSL-logo.png'

function TransparentNav() {
    const location = useLocation();
    const {pathname} = location
    const splitLocation = pathname.split('/')
  return (
    <nav className='transparentNav'>
        <div className='logo'>
        <a href='/'>
          <img src={logo} alt="TNSL logo" />
        </a>
      </div>
      <div className='links'>
        <div className={splitLocation[1]=== '' ? 'active' : ''}>
        <Link to='/' className='home'>HOME</Link>
        </div>

        <div className=''>
          <Link to='/categories' className='home'>
          <Categories loc = {splitLocation[1]}/>
          </Link>
          
          </div>
        <div>
          <Link to='/services' className='home'>
          <Services loc = {splitLocation[1]}/>
          </Link>
          
          </div>
        <div className={splitLocation[1]=== 'contact' ? 'active' : ''}>
          <Link to='/contact' className='home'>CONTACT US</Link>
        </div>

        <div className={splitLocation[1]=== 'about' ? 'active' : ''}>
          <Link to='/about' className='home'>ABOUT</Link>
        </div>
        
      </div>
      <div className='operations'>
        <div className='navIcon'>
          <Searchicon/>
        </div>
        <Link to='/login' className='home' >LOGIN</Link>
      </div>
      {console.log(splitLocation[1])}
    
    </nav>
  )
}

export default TransparentNav