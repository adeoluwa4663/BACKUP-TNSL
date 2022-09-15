import React from 'react'
import BannerContent from '../Components/Banner/BannerContent'
import BannerImage1 from '../Components/Banner/BannerImage1'
import ToggleMenu from '../Components/Learning/ToggleMenu'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
function Business() {
  return (
    <div>
        <Navbar/>
        <div className='bannerContainer'>
                <BannerContent/>
                {/* <BannerImage1/> */}
                <BannerImage1 first={'images/2men.png'} second = {'images/team.png'}/>
        </div>
        <ToggleMenu />
        <Footer/>
    </div>
  )
}

export default Business