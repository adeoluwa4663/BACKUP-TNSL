import React from 'react'
import '../../Styles/Trusted.scss'
import visa from '../../assets/visa.png'
import sc from '../../assets/sc.png'
import mg from '../../assets/moneygram.png'
import paypal from '../../assets/paypal.png'

function TrustedSmall() {
  return (
    <div className='trustedSmall'>
        <div className='smallContent'>
        <h4>TRUSTED BY COMPANIES OF ALL SIZES</h4>
        </div>
        <div className='trustedImages'>
        <div><img src={sc} alt="standard charterer" /></div>
        <div><img src={visa} alt="visa" /></div>
        <div><img src={mg} alt="money gram" /></div>
        <div><img src={paypal} alt="paypal" /></div>
        </div>
    </div>
  )
}

export default TrustedSmall