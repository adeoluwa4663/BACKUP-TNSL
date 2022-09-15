import React from 'react'
import data from './ProgressData.json'
import image2 from '../../../assets/programming.png'
import '../../../Styles/Courses.scss'

function InProgress() {

    return (
        <div className='progressList'>
            {data.progressdata.map((data, i) =>
                <div key={data.id} className='progressContent'>
                    <div className='progressImage'>
                        <img src={image2} alt="" />
                    </div>
                    <div className='progressDesc'>
                        <h3>{data.title}</h3>
                        <p>
                            <span className='week'>{data.week}</span>
                            <span className='unit'>{data.unit}</span>
                        </p>
                        <p>{data.question}</p>
                    </div>
                    <div className='progressInfo'>
                        <p>
                            <span className='next'>{data.next}</span> <br />
                            {data.topic} <br />
                            {data.length}
                        </p>
                    </div>
                </div> 
            )}
        </div>
    )
}

export default InProgress