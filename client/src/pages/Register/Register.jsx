import React, { Component } from 'react'
import { registerUser } from '../../hooks/useAuth'
import PasswordStrength from './components/PasswordStrength/PasswordStrength';
import './style.css'

import validator from 'validator';

export default class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordRepeated: "",
    termsChecked: false,

    formErrors: {
      username: '', 
      email: '',
      password: '',
      passwordRepeat: '',
    },

    isValid: {
      username: false,
      email: false,
      password: false,
      passwordRepeat: false,
      form: false
    },
  }

  handleSubmit = async e => {
    e.preventDefault();

    // const nameValid = !!this.state.name // TODO finish validation
    // const emailValid = validator.isEmail(this.state.email)
    // const passwordValid = !!this.state.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)// TODO add password strength meter
    // const termsValid = this.state.termsChecked
    // const passwordsMatch = (this.state.password === this.state.passwordRepeated)

    // if(!nameValid || !emailValid || !passwordValid || !termsValid || !passwordsMatch) return;

    //TODO add valitation hook to check for invalid form data and display it next to the title label

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

  handleChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    }, () => { 
      this.validateField(name, value) 
    })
  }

  validateField(name, value) {
    var formErrors = this.state.formErrors
    var isValid = this.state.isValid

    switch(name) {
      case 'username':
        const usernameLength = value.length
        if(usernameLength < 3) {
          isValid.username = false
          formErrors.username = "Need at least 3 characters"
        } else if(usernameLength > 20) {
          isValid.username = false
          formErrors.username = "Can only have 20 characters"
        } else {
          isValid.username = true
          formErrors.username = ''
        }
        break;
      case 'email':
        isValid.email = validator.isEmail(value)

        formErrors.email = isValid.email ? '' : "Email is invalid"
        break;
      case 'password':
        break;
      case 'passwordRepeat':
        isValid.passwordRepeat = value === this.state.password
        formErrors.passwordRepeat = isValid.passwordRepeat ? '' : "Passwords do not match"
        break;
      case 'agreedTOS':
        break;
      default:
        break;
    }

    this.setState({
      formErrors: formErrors,
      isValid: isValid
    })
  }

  validateForm() {
    //validate if form is valid and set the state
  }

  render() {
    return (
      <div id="register-form-div">
        <h3>Sign Up</h3>
        <form id="register-form" onSubmit={this.handleSubmit} noValidate>
          <div className="input-info">
            <label htmlFor="name-input">Username<label className='required-star'>*</label></label>
            <span className="input-error">{this.state.formErrors.username}</span>
          </div>
          <input id="name-input" name="username" className='register-input primary' onChange={this.handleChange} type="text" form="register-form" placeholder="John Doe" size="30" autoComplete="off" required/>

          <div className="input-info">
            <label htmlFor="email-input">Email<label className='required-star'>*</label></label>
            <span className="input-error">{this.state.formErrors.email}</span>
          </div>
          <input id="email-input" name='email' className='register-input primary' onChange={this.handleChange} type="email" form="register-form" placeholder="someone@example.com" size="30" autoComplete="off" required/>

          <div className="input-info">
            <label htmlFor="password-input">Password<label className='required-star'>*</label></label>
            <span className="input-error">{this.state.formErrors.password}</span>
          </div>
          <input id="password-input" name='password' className='register-input primary' onChange={this.handleChange} type="password" form="register-form" placeholder="Password" required/>

          <PasswordStrength password={this.state.password}/>

          <div className="input-info">
            <label htmlFor="repeat-password-input">Repeat Password<label className='required-star'>*</label></label>
            <span className="input-error">{this.state.formErrors.passwordRepeat}</span>
          </div>
          <input id="repeat-password-input" name='passwordRepeat' className='register-input primary' onChange={this.handleChange} type="password" form="register-form" placeholder="Password" required/>

          <div id="register-options-div">
            <div id="agree-div">
              <input id="agree-input" name='agreedTOS' className='register-input' form='register-form' checked={this.state.agreedTOS} onChange={this.handleChange} type="checkbox" />
              <label htmlFor="agree-input">
                I agree to the <a href='terms-of-service' className='text-primary'>Terms & Conditions<label className='required-star'>*</label></a>
                </label>
            </div>
          </div>
          <input className='btn-primary' id="submit-input" type="submit" value="Sign Up"/>
          <div id="register-text">
            Already have an Account? <a className='text-primary' href='login'>Sign in</a>
          </div>
          <div>
            {this.state.Error}
          </div>
        </form>
      </div>
    )
  }
}
