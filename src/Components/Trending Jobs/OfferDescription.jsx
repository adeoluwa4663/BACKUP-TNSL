import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import data from './JobData.json'
import '../../Styles/TrendingJobs.scss'

function OfferDescription(){
    return(
        <div className='offerdescription'>
            <Navbar/>
            <div className='header'>
                <h2>JOB DESCRIPTION</h2>
            </div>
            <div className='body'>
                <div className='simpledescription'>
                    <p><span>Company: </span> {data.jobdata[0].company}</p>
                    <p><span>Role: </span> {data.jobdata[0].role}</p>
                    <p><span>Skills: </span> {data.jobdata[0].skills}</p>
                </div>
                <div className='fulldescription'>
                    <p className='info'>Job Description</p>
                    <hr />
                    <p>{data.jobdata[0].description}</p>
                </div>
                <p><span>Duration:</span>2 months</p>
                <p><span>Pay:</span>150,000</p>
                <button className='button'>Apply</button>
            </div>
            <Footer/>
        </div>
    )
}

export default OfferDescription