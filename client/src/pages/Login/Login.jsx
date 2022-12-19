import React, { Component } from 'react'
import loginUser from '../../hooks/useAuth'
import './style.css'
import PropTypes from 'prop-types';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Username: "",
      Password: "",
      Remember: false,
      tmpToken: ""
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email: this.state.Username,
      password: this.state.Password
    });
    this.setState({tmpToken: token.token})
    this.props.setToken(token);
  }

  render() {
    return (
      <div id="login-form-div">
        <h3>Sign In</h3>
        <form id="login-form" onSubmit={this.handleSubmit}>
          <label htmlFor="email-input">Email<label className='required-star'>*</label></label>
          <input id="email-input" className='login-input primary' onChange={e => this.setState({Username: e.target.value})} type="email" placeholder="someone@example.com" size="30" autoComplete="off" required/>
          
          <label htmlFor="password-input">Password<label className='required-star'>*</label></label>
          <input id="password-input" className='login-input primary' onChange={e => this.setState({Password: e.target.value})} type="password" placeholder="Password" required/>
          
          <div id="login-options-div">
            <div id="remember-div">
              <input id="remember-input" className='login-input' onChange={e => this.setState({Remember: e.target.checked})} value={this.Remember} type="checkbox"/>
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

          <div>{this.state.tmpToken}</div>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}