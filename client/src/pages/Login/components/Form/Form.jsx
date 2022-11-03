import React, { Component } from 'react'
import './style.css'

export default class Form extends Component {
  render() {
    return (
      <div>
        <h3>Sign In</h3>
        <form action="#" id="form-container">
        <div>
          <label for="name">Username</label>
          <input type="text" placeholder="Username" required/>
        </div>
        <div>
          <label for="name">Password</label>
          <input type="password" placeholder="Password" required/>
        </div>
        </form>
      </div>
    )
  }
}
