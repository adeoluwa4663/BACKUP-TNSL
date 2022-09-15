import React from 'react'
import ManImage from '../About/ManImage'

function SampleTeacher() {
    return(
        <div className='sample'>
            <h5 className='heading'>Lorem ipsum dolor</h5>
            <div className='teacher'>
                <div className='image'>
                    <ManImage/>
                </div>
                <div className='details'>
                    <h4>UCHIHA KAORU</h4>
                    <h6>Facilitator</h6>
                    <p>UI/UX Designer</p>
                </div>
            </div>
        </div>
    )
}

export default SampleTeacher