import React from 'react'
import SignupForm from '../Components/Signup/SignupForm'
import SignupTheme from '../Components/Signup/SignupTheme'
import '../Styles/Login.scss'

function Signup() {
  return (
    <div className='mainLogin'>
            <SignupTheme/>
            <SignupForm/>
    </div>
  )
}

export default Signup