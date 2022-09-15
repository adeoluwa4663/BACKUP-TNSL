import React from 'react'
import BannerContent from '../Components/Banner/BannerContent'
import BannerImage2 from '../Components/Banner/BannerImage2'
import Navbar from '../Components/Navbar/Navbar'
import ServiceToggle from '../Components/Services/ServiceToggle'
import '../Styles/Banner.scss'

function Home4() {
  return (
    <div>
      <Navbar/>
      <div className='bannerContainer'>
        <BannerContent/>
        <BannerImage2/>
      </div>
      <ServiceToggle/>
    </div>
  )
}

export default Home4