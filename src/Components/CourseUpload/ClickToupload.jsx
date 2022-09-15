import React from 'react'

function ClickToupload() {
  return (
    <div className='clickContainer'>
        <button className="clickContents">
          <div className="clicktoUpload">
            <div className="clickIcon">
              <img src="icons/upload.svg" alt="upload" />
            </div>

            <div className="clickDescription">
            Click to upload or drag and drop

            </div>

            <div className="formats">
            SVG,JPG,MP4

            </div>

          </div>
        </button>
    </div>
  )
}

export default ClickToupload