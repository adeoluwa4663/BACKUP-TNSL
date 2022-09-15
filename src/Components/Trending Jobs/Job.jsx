import React from 'react'
import '../../Styles/TrendingJobs.scss'

function Job(props) {
    return(
            <div className='jobEntry'>
                <div className='jobImage'>
                    <img src={props.image} alt="" />
                </div>
                <div className='jobDesc'>
                    <h3>{props.client} {props.icon}</h3>
                    <h4>{props.role}</h4>
                    <p>{props.info}</p>
                    <p className='hideid'>{props.id}</p>
                </div>
            </div>
    )
}

export default Job;