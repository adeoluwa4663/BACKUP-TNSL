import React from 'react'
import WhatWeDoImage from './WhatWeDoImage'
import '../../Styles/WhatWeDo.scss'
import training from '../../assets/icons/training.svg'
import community from '../../assets/icons/community.svg'
import mentorship from '../../assets/icons/mentorship.svg'
import workforce from '../../assets/icons/workforce.svg'

function WhatWeDo() {
    return(
        <div className='whtContainer'>
            <div className="heading">
                <h4>WHAT WE DO</h4>
            </div>

        <div className='whatWrapper'>
            <div className='text'>
    
                <div className="detail" >
                    <div className="image">
                        <img src={training} alt="" />
                    </div> 
                    <div className="info">
                        <h4>TRAINING</h4>
                        <p>This is also a community based program where you will be able to interact with your peers and...</p>
                    </div>
                </div>
                <div className="detail" >
                    <div className="image">
                        <img src={community} alt="" />
                    </div> 
                    <div className="info">
                        <h4>COMMUNITY</h4>
                        <p>This is also a community based program where you will be able to interact with your peers and...</p>
                    </div>
                </div>
                <div className="detail" >
                    <div className="image">
                        <img src={mentorship} alt="" />
                    </div> 
                    <div className="info">
                        <h4>MENTORSHIP</h4>
                        <p>This is also a community based program where you will be able to interact with your peers and...</p>
                    </div>
                </div>
                <div className="detail" >
                    <div className="image">
                        <img src={workforce} alt="" />
                    </div> 
                    <div className="info">
                        <h4>WORKFORCE</h4>
                        <p>This is also a community based program where you will be able to interact with your peers and...</p>
                    </div>
                </div>
            </div>
            <div className='whtImage'>
                <WhatWeDoImage/>
            </div>
        </div>
        </div>
    )
}

export default WhatWeDo