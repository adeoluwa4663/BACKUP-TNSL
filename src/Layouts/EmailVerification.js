import React from 'react'
import LoginTheme from '../Components/Login/LoginTheme'
import EmailVerificationPage from '../Components/EmailVerification/EmailVerificationPage'

function EmailVerification() {
    return (
        <div className='mainLogin'>
            <LoginTheme />
            <EmailVerificationPage />
        </div>
    )
}

export default EmailVerification;