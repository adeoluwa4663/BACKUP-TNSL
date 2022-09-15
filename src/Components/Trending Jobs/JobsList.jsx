import React from 'react'
import '../../Styles/Jobs.scss'
import data from './JobData.json'

function JobsList() {
  return (
    <div className='jobList'>
        {data.jobdata.map((data,i)=>

            <div className='jobView'>
            <div className="jobImage">
                <img src={data.image} alt="job" />
            </div>
            <div className="jobContent">
                <h5>{data.company}</h5>
                <h6>{data.role}</h6>
                <p>{data.skills}</p>
            </div>
        </div>
        ) 
        }

    </div>
  )
}

export default JobsList