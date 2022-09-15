import React from 'react'
import overview from '../../assets/ui.png'
import '../../Styles/Design.scss'

function OverviewImage() {
    return(
        <div className='overviewImage'>
            <img src={overview} alt="" />
        </div>
    )
}

export default OverviewImage;