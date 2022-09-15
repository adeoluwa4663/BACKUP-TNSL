import React from 'react'
import OrangeButton from '../../assets/Buttons/OrangeButton'
import '../../Styles/Learning.scss'
function Payment() {
  return (
    <div className='paymentContainer'>
        <div className='paymentContent'>
          <h6>PAYMENT PLANS</h6>
          <p>GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS. </p>

        </div>
        <div className="paymentMethods">
          <div className="method1">

            <h6>FULL TUITION PAYMENT</h6>
            <p>GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS. </p>
          
          </div>
          <div className="method2">
            <h6>INSTALLMENTAL PAYMENT OPTIONS</h6>
            <p>GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS. </p>
          </div>
  
        </div>
        <OrangeButton name='Start Trial'/>

    </div>
  )
}

export default Payment