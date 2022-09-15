import React from 'react'
import '../../Styles/Learning.scss'
import community from '../../assets/community.png'

function Community() {
  return (
    <div className='communityContainer'>
        <div className='communityContent'>
        <h6>INTERACTIVE COMMUNITY</h6>
        <p>There is also a community based program where you’ll be ableto interact with your peers and also mentors that will put you on the right track</p>
        </div>
        <div className='communityImage'>
          <img src={community} alt="community" />
        </div>
    </div>
  )
}

export default Community