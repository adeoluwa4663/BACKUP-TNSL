//This page is for the UI/UX page under the categories dropdown list 

import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import DesignBanner from '../Components/DesignPage/DesignBanner'
import Overview from '../Components/DesignPage/Overview'
import SampleTeacher from '../Components/DesignPage/SampleTeacher'
import Footer from '../Components/Footer/Footer'
import LearningSchedule from '../Components/DesignPage/LearningSchedule'
import Mentors from '../Components/DesignPage/Mentors'
import Payment from '../Components/DesignPage/PaymentOptions'

function DesignPage() {
    return(
        <div>
            <Navbar/>
            <DesignBanner/>
            <Overview/>
            <SampleTeacher/>
            <LearningSchedule/>
            <Mentors/>
            <Payment/>
            <Footer/> 
        </div>
    )
}

export default DesignPage