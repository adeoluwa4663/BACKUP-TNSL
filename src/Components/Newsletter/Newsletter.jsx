import React from 'react'
import '../../Styles/Newsletter.scss'

function Newsletter() {
  return (
    <div className="newsletterContainer">
      <div className="description">
        <h3>Get the latest updates on our
upcoming projects
</h3>
      </div>
      <div className="subscribe">
        <input type="text"/>
        <button>Subscribe</button>
          
        </div>
    </div>
  )
}

export default Newsletter