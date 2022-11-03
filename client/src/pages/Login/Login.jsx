import React, { Component } from 'react'
import Placeholder from './assets/images/placeholder.jpg'
import Form from './components/Form/Form'
import "./style.css"

export default class Login extends Component {
  render() {
    return (
      <div id='app'>
        <div id="content">
          <div id="imgcontainer">
            <img id="login-background" alt="" src={Placeholder}/>
          </div>
          <div id='formcontainer'>
            <Form/>
          </div>
        </div>
      </div>
    )
  }
}