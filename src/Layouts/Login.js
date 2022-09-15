import React from 'react'
import LoginForm from '../Components/Login/LoginForm'
import LoginTheme from '../Components/Login/LoginTheme'

function Login() {
    return (
        <div className='mainLogin'>
            <LoginTheme />
            <LoginForm />
        </div>
    )
}

export default Login