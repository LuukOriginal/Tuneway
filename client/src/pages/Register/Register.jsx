import React, { Component } from 'react'
import './style.css'

export default class Register extends Component {
  render() {
    return (
      <div id="register-form-div">
        <h3>Sign Up</h3>
        <form id="register-form">
          <label htmlFor="name-input">Name<label className='required-star'>*</label></label>
          <input id="name-input" className='register-input primary' type="text" form="register-form" placeholder="John Doe" size="30" autoComplete="off" required/>
          <label htmlFor="email-input">Email<label className='required-star'>*</label></label>
          <input id="email-input" className='register-input primary' type="email" form="register-form" placeholder="someone@example.com" size="30" autoComplete="off" required/>
          <label htmlFor="password-input">Password<label className='required-star'>*</label></label>
          <input id="password-input" className='register-input primary' type="password" form="register-form" placeholder="Password" required/>
          <label htmlFor="repeat-password-input">Repeat Password<label className='required-star'>*</label></label>
          <input id="repeat-password-input" className='register-input primary' type="password" form="register-form" placeholder="Password" required/>
          <div id="register-options-div">
            <div id="agree-div">
              <input id="agree-input" className='register-input' form='register-form' value={false} type="checkbox" />
              <label htmlFor="agree-input">
                I agree to the <a href='terms-of-service' className='text-primary'>Terms & Conditions<label className='required-star'>*</label></a>
                </label>
            </div>
          </div>
          <input className='btn-primary' id="submit-input" type="submit" value="Sign Up"/>
          <div id="register-text">
            Already have an Account? <a className='text-primary' href='login'>Sign in</a>
          </div>
        </form>
      </div>
    )
  }
}
