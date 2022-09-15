import React from 'react'
import '../../Styles/UserDetails.scss'

function Overviews() {
  const overview = [{'header':'JOBS COMPLETED','money':'147'},
                    {'header':'EARNINGS','money':'$150,000'},
                    {'header':'REFERRALS','money':'25'}]

  return (
    <div className='userOverview'>
      <h5>Overview</h5>
      <div className="overViewcontent">

      { overview.map((d,i)=>
      <div className="overviewContainer" key={i}>
        <div className="headerContent">
            <h6>{d.header}</h6>
        </div>
        <div className='money'>
          <p>{d.money}</p>
        </div>
      </div>
      )}
      </div>
    </div>
  )
}

export default Overviews