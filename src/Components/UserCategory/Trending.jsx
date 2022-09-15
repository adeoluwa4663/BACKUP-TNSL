import React from 'react'
import '../../Styles/UserDetails.scss'
function Trending() {
  return (
    <div className='trendingContainer'>
      <div className="trendingHeader">
        <h5>Trending</h5>
      </div>
      <div className="trendingContent">
        <div className="trendingImg">
          <img src='images/canon.png' alt="" />
        </div>
        <div className="trendingDescription">
          <h6>Billabong Developer-X</h6>
          <p>User Interface Design</p>

        </div>

      </div>

      <div className="trendingContent">
        <div className="trendingImg">
          <img src='images/razen.png' alt="" />
        </div>
        <div className="trendingDescription">
          <h6>Billabong Developer-X</h6>
          <p>User Interface Design</p>
        </div>
        

      </div>
    </div>
  )
}

export default Trending