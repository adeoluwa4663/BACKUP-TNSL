import React from 'react'
import play from '../../assets/icons/play.png'
import '../../Styles/WhatWeDo.scss'

function ManImage() {
    return(
        <div className="manContainer">
        <div className='man'>
            <div className="manOverlay">
                <img src={play} alt="play" />
            </div>
        </div>
        </div>
    )
}

export default ManImage