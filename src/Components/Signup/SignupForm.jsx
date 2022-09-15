import React from 'react'
import { Link } from 'react-router-dom'
import google from '../../assets/Google.png'
import '../../Styles/Login.scss'

function SignupForm() {
  return (
    <div className='loginForm'>
            <div className='loginTitle'>
                <p >Sign up to The Next Stage Lab</p>

            </div>
            <div className='google'>
                <button>
                    <img src={google} alt="" />
                    Continue with Google
                </button>
            </div>
            <div className='formLine'>
                <hr className='line' />
                <p className='lineContent' >or</p>
                <hr className='line' />
            </div>

            <div className='loginWith'>
                <p>Sign Up With</p>
            </div>

            <div className='formGroup'>
                <div className='signupForm'>
                    <div  className='signupName'>
                    <label htmlFor="name" className='he'>Name</label>
                    <input type="text" />
                    </div>
                    <div className='signupMail'>
                    <label htmlFor="email" className='he'>E-mail</label>
                    <input type="text" />
                    </div>
                </div>
                <div className='signupForm'>
                    <div  className='signupName'>
                    <label htmlFor="name" className='he'>Password</label>
                    <input type="text" />
                    </div>
                    <div className='signupMail'>
                    <label htmlFor="email" className='he'>Country</label>
                    <select>
                        <option value="county"></option>
                    </select>
                    </div>
                </div>
            </div>
            <div className='signupAddons'>
                <div className='forgot'>Forgot Password?</div>
            </div>
            <div className='signupDescription'>
                <p>Creating an account means you are okay with our <span>Terms of Service, Privacy Policy</span> and our default 
                <span> Notification Settings</span></p>
            </div>
            <div className='signupBtn'>
                <button>Register</button>
            </div>
            <div className='formFooter'>
                <p>Already a User? <span ><Link to='/login' className='loginLink'> Login</Link></span> </p>
            </div>

        </div>
  )
}

export default SignupForm