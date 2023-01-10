import React, { Component } from 'react'

export default class ResetPassword extends Component {
  state = {
    token: ""
  }

  componentDidMount() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    this.setState({
      token: params.token
    })
  }

  render() {
    return (
      <div id="App">
        <div id="Content">
          <h1>Reset Password</h1>
          <p>Token:{this.state.token}</p>
        </div>
      </div>
    )
  }
}
