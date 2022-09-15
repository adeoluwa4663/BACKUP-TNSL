import React from 'react'
import '../../Styles/EmailVerification.scss'

function EmailVerificationPage() {
    return(
        <div className='container'>
            <h2>E-Mail Verification</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum dolorem ducimus. 
                Incidunt dolore in debitis. Similique ipsam obcaecati aliquid odio? Veniam, tempora reiciendis? Quae consequatur vel est explicabo fuga!</p>
            <div className="code-container">
                <input type="number" className="code" placeholder="" min="0" max="9" required />
                <input type="number" className="code" placeholder="" min="0" max="9" required />
                <input type="number" className="code" placeholder="" min="0" max="9" required />
                <input type="number" className="code" placeholder="" min="0" max="9" required />
            </div>
            <button type="submit">Verify</button>
            <small>Resend code?</small>
        </div>    
    )
}

export default EmailVerificationPage;