import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import BannerContent from '../Components/Banner/BannerContent'
import BannerImage2 from '../Components/Banner/BannerImage2'
import Footer from '../Components/Footer/Footer'
import ToggleMenu from '../Components/Learning/ToggleMenu'

function Learning() {
  return (
    <div>
        <Navbar/>
         <div className='bannerContainer'>
        <BannerContent/>
        <BannerImage2/>
        </div> 
        <ToggleMenu/>
         <Footer/>
    </div>
  )
}

export default Learning