import React from 'react'
import CurrentVideo from './CurrentVideo'
import CourseContent from './CourseContent'
import '../../Styles/CourseVideo.scss'


function Video() {
    return(
        <div className='parent'>
                <CurrentVideo/>
                <CourseContent/>
        </div>
    )
}

export default Video