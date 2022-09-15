import React from 'react'
import Connect from '../Components/Contact/Connect'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Faq from '../Components/Contact/Faq'
import ContactBanner from '../Components/Contact/ContactBanner'
import ContactFrom from '../Components/Contact/ContactFrom'

function Contact() {
  return (
    <div>
      <Navbar/>        
      <ContactBanner />   
      <Connect/>
      <ContactFrom/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Contact