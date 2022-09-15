import React from 'react'
import '../../Styles/Team.scss'
import T1 from '../../assets/T1.png'
import T2 from '../../assets/T2.png'
import T3 from '../../assets/T3.png'
import T4 from '../../assets/T4.png'
function Team() {
  return (
    <div className='teamContainer'>
      <div className="header">
        <h4>MEET OUR STAFF</h4>
        <h3>OUR TEAM</h3>
        <div className="profiles">
          <div className="profile">
            <img src={T1} alt="" />
            <div className="description">
              <h5>DANIEL KONNECT</h5>
              <p>CANVA</p>
            </div>
          </div>
          <div className="profile">
            <div>
            <img src={T2} alt="" />
            </div>
            <div className="description">
              <h5>UCHIHA KAORU</h5>
              <p>CANVA</p>
            </div>
          </div>

          <div className="profile">
            <img src={T3} alt="" />
            <div className="description">
              <h5>OGUNSEYE BISOLA</h5>
              <p>CANVA</p>
            </div>
          </div>

          <div className="profile">
            <img src={T4} alt="" />
            <div className="description">
              <h5>COURAGE ABDUL</h5>
              <p>CANVA</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Team