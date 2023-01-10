import React, { Component } from 'react'
import { loginUser } from '../../hooks/useAuth'
import PropTypes from 'prop-types';
import './style.css'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      remember: false,
      Error: null
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const loginRes = await loginUser({
      email: this.state.email,
      password: this.state.password
    });

    if(loginRes.success) {
      this.props.setToken(loginRes.body.tokens.access.token) // TODO change the data to be passed through
    } else if(loginRes.body.message) {
      this.setState({
        Error: loginRes.body.message
      })
    }
  }
  //#ff4949
  render() {
    return (
      <div id="login-form-div">
        <h3>Sign In</h3>
        <form id="login-form" onSubmit={this.handleSubmit}>
          {this.state.Error && <div id="error-message">
            <span>{this.state.Error}</span>
            <span onClick={() => {this.setState({Error: null})}} id="error-close">&times;</span>
          </div>}

          <label htmlFor="email-input">Email<label className='required-star'>*</label></label>
          <input id="email-input" className='login-input primary' onChange={e => this.setState({email: e.target.value})} type="email" placeholder="someone@example.com" size="30" autoComplete="off" required/>
          
          <label htmlFor="password-input">Password<label className='required-star'>*</label></label>
          <input id="password-input" className='login-input primary' onChange={e => this.setState({password: e.target.value})} type="password" placeholder="Password" required/>
          
          <div id="login-options-div">
            <div id="remember-div">
              <input id="remember-input" className='login-input' onChange={e => this.setState({remember: !this.state.remember})} checked={this.state.remember} type="checkbox"/>
              <label htmlFor="remember-input">Remember me</label>
            </div>
            <div id="forgot-text-div" className="text-primary">
              <a id="forgot-text" className='text-primary' href='request-password'>Forgot Password?</a>
            </div>
          </div>
          
          <input className='btn-primary' id="submit-input" type="submit" value="Login"/>
          <div id="register-text">
            Not registered yet? <a className='text-primary' href='register'>Create an Account</a>
          </div>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}