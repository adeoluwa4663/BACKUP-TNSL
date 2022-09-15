import React from 'react'
import Job from './Job';
import InfoDescription from './InfoDescription'
import '../../Styles/TrendingJobs.scss'
import orange1 from '../../assets/icons/orange.svg'
import data from './JobData.json'

function Offers() {
    const orange = <img src={orange1} width='20em' alt="" />
    return(
        <div className='offers'>
            {data.jobdata.map((data,i)=>
                <div>
                    <Job 
                        image={data.image} 
                        client={data.company} 
                        icon={orange}
                        role={data.role}
                        info={<InfoDescription/>}
                        id={data.id}
                    />
                    <hr />
                </div>
            )}
        </div>
    )
}

export default Offers;