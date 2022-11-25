import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import './style.css'

export default class Form extends Component {
  render() {
    return (
      <div>
        <h3>Sign In</h3>
        <form action="#" id="login-form">
          <label htmlFor="email-input">Email*</label>
          <input id="email-input" className="login-input" type="email" name="login-input" form="login-form" placeholder="someone@example.com" pattern=".+@globex\.com" size="30" required/>
          <label htmlFor="password-input">Password*</label>
          <input id="password-input" className='login-input' type="password" name="password-input" form="login-form" placeholder="Password" required/>
          <input id="submit-input" type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}
