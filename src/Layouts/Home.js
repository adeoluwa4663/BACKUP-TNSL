import React from 'react'
import BannerContent from '../Components/Banner/BannerContent'
import BannerImage1 from '../Components/Banner/BannerImage1'
import Details from '../Components/Details/Details'
import Footer from '../Components/Footer/Footer'
import Navbar1 from '../Components/Navbar/Navbar'
import Newsletter from '../Components/Newsletter/Newsletter'
import Numbers from '../Components/Numbers/Numbers'
import Services from '../Components/Services/Services'
import Team from '../Components/Team/Team'
import Trusted from '../Components/Trusted/Trusted'
import '../Styles/Banner.scss'

function Home() {
    return (
        <div>
            <Navbar1/>
            <div className='bannerContainer'>
                <BannerContent/>
                {/* <BannerImage1/> */}
                <BannerImage1 first={'images/female.png'} second={'images/male.png'}/>
            </div>
            <Details/>
            <Services/>
            <Trusted/>
            <Numbers/>
            <Team/>
            <Newsletter/>
            <Footer/>   
        </div>
    )
}

export default Home