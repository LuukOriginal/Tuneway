import React, { Component } from 'react'
import { registerUser } from '../../hooks/useAuth'
import './style.css'

const validator = require('validator');

export default class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordRepeated: "",
    termsChecked: false
  }

  handleSubmit = async e => {
    e.preventDefault();

    const nameValid = this.state.name.match(/^[\\x00-\\x7F]{3,20}$/) // TODO finish validation
    const emailValid = validator.isEmail(this.state.email)
    const passwordValid = this.state.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)// TODO add password strength meter
    const termsValid = this.state.termsChecked

    if(!nameValid || !emailValid || !passwordValid || !termsValid) return;

    const registerRes = await registerUser({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });

    if(registerRes.success) {
      this.props.setToken(registerRes.body.tokens.access.token) // TODO change the data to be passed through
    } else if(registerRes.body.message) {
      this.setState({
        Error: registerRes.body.message
      })
    }
  }

  render() {
    return (
      <div id="register-form-div">
        <h3>Sign Up</h3>
        <form id="register-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name-input">Username<label className='required-star'>*</label></label>
          <input id="name-input" className='register-input primary' onChange={e => this.setState({name: e.target.value})} type="text" form="register-form" placeholder="John Doe" size="30" autoComplete="off" required/>

          <label htmlFor="email-input">Email<label className='required-star'>*</label></label>
          <input id="email-input" className='register-input primary' onChange={e => this.setState({email: e.target.value})} type="email" form="register-form" placeholder="someone@example.com" size="30" autoComplete="off" required/>

          <label htmlFor="password-input">Password<label className='required-star'>*</label></label>
          <input id="password-input" className='register-input primary' onChange={e => this.setState({password: e.target.value})} type="password" form="register-form" placeholder="Password" required/>

          <div id='strength-box'>
            <div id='strength-bar'>
              <div id='strength-fill'/>
            </div>
            <span id='strength-label'>weak</span>
          </div>

          <label htmlFor="repeat-password-input">Repeat Password<label className='required-star'>*</label></label>
          <input id="repeat-password-input" className='register-input primary' onChange={e => this.setState({passwordRepeated: e.target.value})} type="password" form="register-form" placeholder="Password" required/>

          <div id="register-options-div">
            <div id="agree-div">
              <input id="agree-input" className='register-input' form='register-form' checked={this.state.termsChecked} onChange={e => this.setState({termsChecked: !this.state.termsChecked})} type="checkbox" />
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
