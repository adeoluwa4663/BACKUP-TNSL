import React from 'react'
import '../../Styles/Banner.scss'
import Gradient1 from '../Gradients/Gradient1'
import Gradients2 from '../Gradients/Gradients2'


function BannerImage1({first, second}) {
  return (
<div className='imageContainer'>
    <Gradient1/>
    <Gradients2/>
    <div className='imgs'>

   <div className='female'>
     <img src={first} alt='female'/>
    </div>
    <div className='male'>
     <img src={second}  alt='male'/>
    </div> 
    </div>
    {console.log(first)}

    </div>
  )
}

export default BannerImage1