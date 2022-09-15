import React from 'react'
import '../../Styles/Trusted.scss'
import mastercard from '../../assets/master.png'
import picknpay from '../../assets/pick-n-pay.png'
import paypal from '../../assets/paypal.png'
import sage from '../../assets/sage.png'
import visa from '../../assets/visa.png'
import sc from '../../assets/sc.png'
import paypoint from '../../assets/paypoint.png'
import postpay from '../../assets/postepay.png'
import moneygram from '../../assets/moneygram.png'

function Trusted() {
  return (
    <div className='trustedContainer'>
      <div className="content">
        <h3>Trusted by <span>Entrepreneurs</span> and
Hiring Managers globally</h3>
        <p>We match employers with trained and vetted candidates that are a perfect fit for their
companies. That’s why companies love us</p>
      </div>
      <div className='companies'>
          <div className="row">
            <img src={mastercard} alt=''/>
            <img src={picknpay} alt=''/>
            <img src={paypal} alt=''/>
            <img src={sage} alt=''/>
          </div>
          <div className="row">
            <img src={visa} alt=''/>
            <img src={sc} alt=''/>
            <img src={paypoint} alt=''/>
            <img src={postpay} alt=''/>
          </div>
          <div className="row1">
            <img src={moneygram} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Trusted