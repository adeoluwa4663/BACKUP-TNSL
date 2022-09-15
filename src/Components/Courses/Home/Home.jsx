import React from 'react'
import data from './HomeData.json'
import stars from '../../../assets/icons/star.svg'
import image from '../../../assets/ui.png'
import '../../../Styles/Courses.scss'

function Home() {
    const star = <img src={stars} alt="stars" />

    return (
        <div className='courseList'>
            {data.homedata.map((data, i) =>
                <div key={data.id} className='courseContent'>
                    <div className='courseImage'>
                    <img src={image} alt="" />
                    </div>
                    <div className='courseDesc'>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                        <p><span>{data.rating}</span>{star}{star}{star}{star}{star}{data.people}</p>
                    </div>
                    <div className='courseInfo'>
                        <p>
                            {data.level} <br />
                            {data.date} <br />
                            {data.length}
                        </p>
                    </div>
                </div> 
            )}
        </div>
    )
}

export default Home