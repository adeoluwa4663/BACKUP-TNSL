import React from 'react'
import '../../Styles/Learning.scss'
import uidesigner from '../../assets/uidesigner.png'
function Experience() {
  return (
    <div className='experienceContainer'>
        <div className='user'>
            <div className='userImage'>
            <img src={uidesigner} alt="ui designer" />
            </div>
            <div className='content'>
            <h6>Uchicha Kaoru</h6>
            <p>
                User Interface Designer
            </p>
            </div>

        </div>
        <div className='words'>
            <p>“There is also a community based program where you’ll be able to interact with your peers and also mentors that will put you on the right track”</p>

        </div>
    </div>
  )
}

export default Experience