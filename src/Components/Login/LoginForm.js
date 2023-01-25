import React from 'react'

import './index.css'

export default function LoginForm() {

  return (
    <div className="login-app" >
      <div className='login'>
        <h1> Login</h1>
        <div className='container-form'>
          <div className='top'>
            <i class='fab fa-google'></i>
            <i class='fab fa-facebook-square'></i>
            <i class='fab fa-linkedin'></i>
            <i class='fab fa-twitter-square'></i>
            <i class='fab fa-apple'></i>
          </div>
          <p className='divider'><span>Or</span></p>
          <form className='form-login'>
            <label>E-mail</label>
            <input className='input-email' type='email' placeholder='Enter your email' />
            <label>Password</label>
            <input className='input-form' type='password' placeholder='Enter your password' />
            <div className='remember'>
              <input type='checkbox' checked='checked' />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className='bottom'>
            <p>Forget your password?</p>
            <a href='/'>Reset Password</a>
          </div>
          <p className='create'>Create Account</p>
        </div>
      
      </div>
    </div>
  );
}

