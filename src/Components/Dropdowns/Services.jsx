import React from 'react'
import '../../Styles/Dropdowns.scss'
import {Link} from 'react-router-dom'

function Services(loc) {
    return (
        <div className="dropdown">
        <div className={loc.loc === 'Recruit' || loc.loc === 'jobs' ? 'active dropbtn' : 'dropbtn'}>SERVICES</div>
        <div className="dropdown-content">
          <Link to="/Recruit">Recruit creatives</Link>
          <Link to="/">Hire TNSL's alumnis</Link>
          <Link to="/jobs">Trending jobs</Link>

        </div>
      </div> 

    )
}

export default Services