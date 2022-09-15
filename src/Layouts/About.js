import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import '../Styles/About.scss'
import BannerContent from '../Components/Banner/BannerContent'
import BannerImage1 from '../Components/Banner/BannerImage1'
import Numbers from '../Components/Numbers/Numbers'
import Team from '../Components/Team/Team'
import Footer from '../Components/Footer/Footer'
import WhoWeAre from '../Components/About/WhoWeAre'
import WhatWeDo from '../Components/About/WhatWeDo'
import ManImage from '../Components/About/ManImage'
import FounderSignature from '../Components/About/FounderSignature'
import TrustedSmall from '../Components/Trusted/TrustedSmall'

function About() {
  return (
    <div>
        <Navbar/>
        <div className='bannerContainer'>
        <BannerContent/>
        <BannerImage1 first={'images/female.png'} second={'images/male.png'}/>
        </div>
        <WhoWeAre/>
        <Numbers/>
        <WhatWeDo/>
        <ManImage/>
        <Team/>
        <FounderSignature/>
        <TrustedSmall/>
        <Footer/>
    </div>
  )
}

export default About