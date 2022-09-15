import React from 'react'
import {Link} from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <h3>User dashboard</h3>
        <Link to='/desktop17'>Desktop-17</Link>
        <Link to='/desktop28'>Desktop-28</Link>
    
    <h2>User dashboard</h2>
    <Link to='/chat'>Chat</Link>
    </div>
  )
}

export default Dashboard