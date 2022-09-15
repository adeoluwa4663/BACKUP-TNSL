import React from 'react'
import love from '../../assets/love.png'
import stick from '../../assets/stick.png'
import children from '../../assets/children.png'
import '../../Styles/Learning.scss'

function Environments() {
  return (
    <div className='environment'>
        <div className='envContent'>
            <h6>OUR LEARNING ENVIRONS</h6>
        </div>
        <div className='envImages'>
            <img src={love} alt="love" />
            <img src={stick} alt="stick" />
            <img src={children} alt="children" />
            
        </div>
    </div>
  )
}

export default Environments