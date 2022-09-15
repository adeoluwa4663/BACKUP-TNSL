import React from 'react'
import '../../Styles/CourseUpload.scss'

function CourseUpload() {
  return (
    <div className='courseUploads'>
        <div className="fileUpload">
            <h5>Files Upload</h5>
            <p>Lorem ipsum dolor nuit</p>
        </div>
        <div className="courseDetails">
            <div className="courseTitle">
                <h6>Course Title</h6>
                <input type="text" />
            </div>
            <div className="courseImage">
            <h6>Course Image</h6>
                 <div className='imgUpload'>
                    <button>
                    <img src="icons/addimg.svg" alt="" />
                    Add Image    
                    </button>
                    
                </div>   
            </div>
        </div>
    </div>
  )
}

export default CourseUpload