import React from 'react'
import { Link } from 'react-router-dom'
import google from '../../assets/Google.png'
import '../../Styles/Login.scss'
function LoginForm() {
    return (
        <div className='loginForm'>
            <div className='loginTitle'>
                <p >Sign in to The Next Stage Lab</p>

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
                <p>Login With</p>
            </div>

            <div className='formGroup'>
                <div className='email'>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" />
                </div>
                <div className='password'>
                    <label htmlFor="password">Password</label>
                    <input type="password" />
                </div>
            </div>
            <div className='formAddons'>
                <div className='remember'>
                    <input type="checkbox" checked="checked" />
                    <span class="checkmark"></span>
                    <label htmlFor=""> Remember me</label>
                </div>
                <div className='forgot'>Forgot Password?</div>
            </div>
            <div className='loginBtn'>
                <button>Login</button>
            </div>
            <div className='formFooter'>
                <p>Dont't have any account, <span><Link to='/signup' className='loginLink'> Sign up</Link></span></p>
            </div>

        </div>
    )
}

export default LoginForm