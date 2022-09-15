import React from 'react'
import '../../Styles/Banner.scss'
import banner2 from '../../assets/banner2.png'
import Gradient1 from '../Gradients/Gradient1';
import Gradients2 from '../Gradients/Gradients2';
function BannerImage2() {
  return (
    <div className='imageContainer2'>
    <Gradient1/>
    <Gradients2/>
     <img src={banner2}  alt='banner'/>


    </div>
  )
}

export default BannerImage2;