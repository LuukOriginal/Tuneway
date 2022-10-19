import React, { Component } from 'react'
import Placeholder from './assets/images/placeholder.jpg'
import Form from './components/Form/Form'

export default class Login extends Component {
  render() {
    return (
      <div id='App'>
        <div id="Content" className='flex w-full h-screen'>
          <div className='hidden lg:flex w-1/2 h-full bg-blue-400'>
            <img className='object-cover' src={Placeholder}/>
          </div>
          <div className='w-full flex justify-center lg:w-1/2'>
            <Form/>
          </div>
        </div>
      </div>
    )
  }
}