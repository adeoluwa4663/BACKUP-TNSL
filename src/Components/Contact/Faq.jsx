import React from 'react'
import '../../Styles/Contact.scss'

function Faq() {
  return (
    <div className='faqContainer'>
        <div className='faqContent'>
            <h5>FAQ's</h5>
            <p>Frequently Asked Questions</p>
        </div>
        <div className="faqDropdown">
        <select>
        <option>Do you give refunds ?</option>
        </select>
        <select>
        <option>How long does the program take before getting a Gig ?</option>
        </select>
        <select>
        <option>Can we make payments in installments ?</option>
        </select>
        </div>
    </div>
  )
}

export default Faq